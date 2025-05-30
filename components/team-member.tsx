import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface TeamMemberProps {
  name: string
  role: string
  image: string
  skills: string[]
  bio: string
  university?: string
}

export default function TeamMember({ name, role, image, skills, bio, university }: TeamMemberProps) {
  return (
    <Card className="card-tech border-gray-800 bg-gray-800/50 backdrop-blur-md hover:shadow-md hover:shadow-cyan-500/5 transition-all duration-300 group">
      <CardContent className="pt-6">
        <div className="relative h-56 w-56 mx-auto mb-6 rounded-full overflow-hidden border-2 border-gray-700 group-hover:border-cyan-500/50 transition-colors">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
          <p className="text-cyan-400 font-medium mb-2">{role}</p>
          {university && <p className="text-sm text-gray-400 mb-3">{university}</p>}
        </div>

        <p className="text-gray-300 text-sm mb-4 leading-relaxed text-center">{bio}</p>

        <div className="flex flex-wrap gap-2 justify-center">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-gray-700/50 text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors text-xs"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
