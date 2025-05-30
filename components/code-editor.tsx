"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Copy, Check, Terminal } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

interface CodeEditorProps {
  code: string
  language: string
  filename?: string
}

export default function CodeEditor({ code, language, filename = "code.tsx" }: CodeEditorProps) {
  const { toast } = useToast()
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    toast({
      title: "Code copied to clipboard",
      description: "You can now paste it anywhere you need",
    })
    setTimeout(() => setCopied(false), 2000)
  }

  // Simple syntax highlighting
  const highlightCode = (code: string) => {
    // Replace keywords
    const highlighted = code
      .replace(
        /(import|export|from|const|let|function|return|async|await|try|catch|if|else|for|while|class|extends|new|null|undefined|true|false)/g,
        '<span class="text-purple-400">$1</span>',
      )
      .replace(/('.*?'|".*?")/g, '<span class="text-green-400">$1</span>')
      .replace(/(\/\/.*)/g, '<span class="text-gray-500">$1</span>')
      .replace(/(\{|\}|$$|$$|\[|\]|;|,|\.)/g, '<span class="text-gray-400">$1</span>')
      .replace(/(\w+)(?=\s*\()/g, '<span class="text-yellow-300">$1</span>')
      .replace(/(useState|useEffect|useRef|useCallback|useMemo)/g, '<span class="text-cyan-400">$1</span>')
      .replace(/(\w+)(?=\s*=)/g, '<span class="text-blue-400">$1</span>')
      .replace(/(process\.env\.\w+)/g, '<span class="text-green-300">$1</span>')

    return highlighted
  }

  const lines = code.split("\n")

  return (
    <motion.div
      className="rounded-lg overflow-hidden border border-gray-700 bg-gray-900 shadow-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ boxShadow: "0 0 30px rgba(0, 255, 255, 0.1)" }}
    >
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center">
          <div className="flex space-x-2 mr-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-xs font-mono text-gray-400 flex items-center">
            <Terminal className="h-3.5 w-3.5 mr-1.5" />
            <span>{filename}</span>
          </div>
        </div>
        <button
          onClick={copyToClipboard}
          className="text-gray-400 hover:text-white transition-colors p-1 rounded"
          aria-label="Copy code"
        >
          {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
      <div className="p-4 text-sm font-mono">
        <table className="w-full border-collapse">
          <tbody>
            {lines.map((line, i) => (
              <tr key={i} className="leading-relaxed">
                <td className="text-right pr-4 text-gray-500 select-none w-7">{i + 1}</td>
                <td className="text-gray-300" dangerouslySetInnerHTML={{ __html: highlightCode(line) || "&nbsp;" }} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}
