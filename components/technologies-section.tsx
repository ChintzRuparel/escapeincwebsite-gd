"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import CodeEditor from "@/components/code-editor"

type Category = "frontend" | "backend" | "devops"
type Technology = {
  id: string
  name: string
  category: Category
  color: string
  description: string
  codeSnippet: string
  language: string
}

export default function TechnologiesSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("frontend")
  const [selectedTech, setSelectedTech] = useState<string>("react")

  const technologies: Technology[] = [
    // Frontend
    {
      id: "react",
      name: "React",
      category: "frontend",
      color: "#61DAFB",
      description: "Component-based architecture for reusable UI",
      codeSnippet: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;`,
      language: "jsx",
    },
    {
      id: "nextjs",
      name: "Next.js",
      category: "frontend",
      color: "#000000",
      description: "The React framework for production",
      codeSnippet: `// app/page.tsx
export default async function Page() {
  // This function runs on the server
  const data = await fetch('https://api.example.com/data')
    .then(res => res.json());
  
  return (
    <main>
      <h1>Welcome to Next.js</h1>
      <p>Data items: {data.length}</p>
    </main>
  );
}`,
      language: "tsx",
    },
    {
      id: "vue",
      name: "Vue",
      category: "frontend",
      color: "#4FC08D",
      description: "Progressive JavaScript framework",
      codeSnippet: `<template>
  <div>
    <p>{{ message }}</p>
    <button @click="count++">Count is: {{ count }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Vue!',
      count: 0
    }
  }
}
</script>`,
      language: "vue",
    },
    {
      id: "angular",
      name: "Angular",
      category: "frontend",
      color: "#DD0031",
      description: "Platform for building web applications",
      codeSnippet: `import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: \`
    <div>
      <p>Count: {{ count }}</p>
      <button (click)="increment()">Increment</button>
    </div>
  \`
})
export class CounterComponent {
  count = 0;
  
  increment() {
    this.count++;
  }
}`,
      language: "typescript",
    },
    {
      id: "sass",
      name: "SASS",
      category: "frontend",
      color: "#CC6699",
      description: "CSS with superpowers",
      codeSnippet: `$primary-color: #3498db;
$secondary-color: #2ecc71;

nav {
  background-color: $primary-color;
  padding: 10px;
  
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    
    li {
      display: inline-block;
      margin-right: 10px;
      
      a {
        color: white;
        text-decoration: none;
        
        &:hover {
          color: $secondary-color;
        }
      }
    }
  }
}`,
      language: "scss",
    },
    {
      id: "typescript",
      name: "TypeScript",
      category: "frontend",
      color: "#3178C6",
      description: "JavaScript with syntax for types",
      codeSnippet: `interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

function getUserInfo(user: User): string {
  return \`User \${user.name} (ID: \${user.id})\`;
}

// Generic function
function getFirstItem<T>(items: T[]): T | undefined {
  return items.length > 0 ? items[0] : undefined;
}`,
      language: "typescript",
    },
    {
      id: "javascript",
      name: "JavaScript",
      category: "frontend",
      color: "#F7DF1E",
      description: "The programming language of the web",
      codeSnippet: `// Modern JavaScript features
const add = (a, b) => a + b;

// Destructuring
const person = { name: 'John', age: 30 };
const { name, age } = person;

// Spread operator
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

// Async/await
async function getData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}`,
      language: "javascript",
    },

    // Backend technologies
    {
      id: "nodejs",
      name: "Node.js",
      category: "backend",
      color: "#339933",
      description: "JavaScript runtime built on Chrome's V8 engine",
      codeSnippet: `import express from 'express';
const app = express();
app.get('/api/users', async (req, res) => {
  const users = await db.getUsers();
  res.json(users);
});`,
      language: "javascript",
    },

    // Add more backend and devops technologies as needed
  ]

  const filteredTech = technologies.filter((tech) => tech.category === activeCategory)
  const currentTech = technologies.find((tech) => tech.id === selectedTech) || technologies[0]

  const whyWeLove = {
    react: [
      "Component-based architecture for reusable UI",
      "Virtual DOM for optimal performance",
      "Rich ecosystem and community support",
    ],
    nextjs: ["Server-side rendering for better SEO", "File-based routing system", "Built-in API routes and middleware"],
    vue: [
      "Progressive framework that's easy to learn",
      "Reactive and composable component system",
      "Gentle learning curve with great documentation",
    ],
    angular: [
      "Full-featured framework with built-in tools",
      "TypeScript integration for type safety",
      "Dependency injection for better testing",
    ],
    sass: [
      "Variables and mixins for reusable styles",
      "Nesting capabilities for cleaner code",
      "Built-in functions for complex calculations",
    ],
    typescript: [
      "Static type checking for fewer bugs",
      "Better IDE support and code completion",
      "Improved code maintainability",
    ],
    javascript: [
      "Universal language for web development",
      "Constantly evolving with new features",
      "Massive ecosystem and community support",
    ],
    nodejs: [
      "JavaScript on the server for full-stack development",
      "Non-blocking I/O for high performance",
      "Vast ecosystem with npm packages",
    ],
  }

  // Helper function to trim code to a specific number of lines
  const trimCodeToFit = (code: string) => {
    const lines = code.split("\n")

    // Trim to 8 lines which better matches the height of the "Why we love" section
    if (lines.length <= 8) return code

    // Take only the first 8 lines
    const trimmedLines = lines.slice(0, 8)

    // Add an ellipsis comment based on the language
    const commentChar =
      currentTech.language === "html" || currentTech.language === "vue"
        ? "<!--"
        : currentTech.language === "scss" || currentTech.language === "css"
          ? "/*"
          : "//"

    const endComment =
      currentTech.language === "scss" || currentTech.language === "css"
        ? " */"
        : currentTech.language === "html" || currentTech.language === "vue"
          ? " -->"
          : ""

    return trimmedLines.join("\n") + `\n${commentChar} ...${endComment}`
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col space-y-6"
      >
        <h3 className="text-2xl font-bold text-white">Select a technology:</h3>

        {/* Category Tabs */}
        <div className="flex space-x-4 mb-4">
          <button
            onClick={() => setActiveCategory("frontend")}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeCategory === "frontend"
                ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/50"
                : "text-gray-400 hover:text-white border border-gray-700"
            }`}
          >
            Frontend
          </button>
          <button
            onClick={() => setActiveCategory("backend")}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeCategory === "backend"
                ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/50"
                : "text-gray-400 hover:text-white border border-gray-700"
            }`}
          >
            Backend
          </button>
          <button
            onClick={() => setActiveCategory("devops")}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeCategory === "devops"
                ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/50"
                : "text-gray-400 hover:text-white border border-gray-700"
            }`}
          >
            Tools & DevOps
          </button>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 gap-4">
          {filteredTech.map((tech) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className={`flex items-center p-3 bg-gray-800 border ${
                selectedTech === tech.id ? "border-cyan-500" : "border-gray-700"
              } rounded-lg hover:border-gray-600 transition-all cursor-pointer`}
              onClick={() => setSelectedTech(tech.id)}
            >
              <div
                className={`w-3 h-3 rounded-full bg-[${tech.color}] mr-3`}
                style={{ backgroundColor: tech.color }}
              ></div>
              <span className="text-gray-200 font-mono">{tech.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Why We Love Section */}
        {selectedTech && (
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-white mb-2">Why we love {currentTech.name}</h4>
            <ul className="space-y-2 text-gray-300 font-mono">
              {whyWeLove[selectedTech as keyof typeof whyWeLove]?.map((point, i) => (
                <li key={i} className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-cyan-400 mr-2 shrink-0" />
                  <span>{point}</span>
                </li>
              )) || (
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-cyan-400 mr-2 shrink-0" />
                  <span>Powerful features and capabilities</span>
                </li>
              )}
            </ul>
          </div>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <CodeEditor
          code={trimCodeToFit(currentTech.codeSnippet)}
          language={currentTech.language}
          filename={`${currentTech.id === "nextjs" ? "page" : "example"}.${currentTech.language}`}
        />
      </motion.div>
    </div>
  )
}
