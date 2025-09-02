import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"
import Image from "next/image";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
}

export function ExperienceCard({
  title,
  company,
  period,
  description,
  achievements,
  technologies,
  logo,
}: ExperienceCardProps) {
  return (
    <div className="space-y-4 pb-6 border-b border-zinc-800 last:border-0 last:pb-0">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
        <div className="flex items-center gap-3">
          {logo && (
            <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-white p-1">
              <Image
                src={logo}
                alt={`${company} logo`}
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
          )}
          <div>
            <h4 className="font-medium text-base sm:text-lg">{title}</h4>
            <div className="text-sm text-cyan-400">{company}</div>
          </div>
        </div>
        <div className="text-xs text-zinc-400 bg-zinc-800/70 px-2 py-1 sm:px-3 sm:py-1 rounded-full self-start mt-1 sm:mt-0 sm:self-auto">
          {period}
        </div>
      </div>

      <p className="text-sm text-zinc-300">{description}</p>

      <div className="space-y-3">
        <h5 className="text-sm font-medium text-zinc-400">Key Achievements</h5>
        <ul className="space-y-2">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex text-sm text-zinc-300">
              <CheckCircle2 className="w-4 h-4 mr-2 text-cyan-400 flex-shrink-0 mt-0.5" />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h5 className="text-sm font-medium text-zinc-400 mb-2">
          Technologies & Skills
        </h5>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="outline"
              className="text-xs bg-zinc-800/50 hover:bg-zinc-800"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
