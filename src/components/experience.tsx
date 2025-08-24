"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "TechStart Solutions",
      location: "San Francisco, CA",
      period: "Jun 2024 - Aug 2024",
      description:
        "Developed responsive web applications using React and TypeScript. Collaborated with design team to implement pixel-perfect UI components and improved website performance by 40%.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Git", "Figma"],
      type: "internship",
    },
    {
      title: "Web Development Teaching Assistant",
      company: "University of Technology",
      location: "Remote",
      period: "Jan 2024 - Present",
      description:
        "Assist students in learning web development fundamentals. Grade assignments, conduct office hours, and help debug code for 50+ students in HTML, CSS, and JavaScript courses.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Teaching"],
      type: "academic",
    },
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      location: "Remote",
      period: "Sep 2023 - Present",
      description:
        "Built custom websites for small businesses and startups. Managed full project lifecycle from client consultation to deployment, delivering 8+ successful projects.",
      technologies: ["Next.js", "WordPress", "Shopify", "SEO", "Client Management"],
      type: "freelance",
    },
    {
      title: "Software Development Volunteer",
      company: "Local Non-Profit Organization",
      location: "Local Community",
      period: "Mar 2023 - Dec 2023",
      description:
        "Developed a volunteer management system to streamline operations. Created database schema, built REST API, and implemented user authentication system.",
      technologies: ["Python", "Django", "PostgreSQL", "Bootstrap", "Heroku"],
      type: "volunteer",
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "internship":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "academic":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "freelance":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      case "volunteer":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "internship":
        return "Internship"
      case "academic":
        return "Academic"
      case "freelance":
        return "Freelance"
      case "volunteer":
        return "Volunteer"
      default:
        return "Experience"
    }
  }

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-sans text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and hands-on experience in software development
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={`${experience.company}-${experience.title}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <CardTitle className="font-sans text-xl">{experience.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-secondary">
                        {experience.company}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1">
                      <Badge className={getTypeColor(experience.type)}>{getTypeLabel(experience.type)}</Badge>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {experience.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {experience.location}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{experience.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Card className="max-w-2xl mx-auto bg-secondary/10 border-secondary/20">
            <CardContent className="p-8">
              <h3 className="font-sans text-xl font-semibold mb-4">Looking for Opportunities</h3>
              <p className="text-muted-foreground">
                I&#39;m actively seeking software engineering internship opportunities for Summer 2025. I&#39;m excited to
                contribute to innovative projects and learn from experienced developers in a collaborative environment.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
