"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce application with user authentication, payment processing, and admin dashboard.",
      image: "/modern-ecommerce-interface.png",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true,
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/task-management-dashboard.png",
      technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io", "shadcn/ui"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true,
    },
    {
      title: "Weather Analytics Dashboard",
      description:
        "Data visualization dashboard that displays weather patterns and analytics using real-time weather APIs.",
      image: "/weather-analytics-dashboard.png",
      technologies: ["Vue.js", "D3.js", "Python", "FastAPI", "Chart.js"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false,
    },
    {
      title: "Social Media API",
      description:
        "RESTful API for a social media platform with user management, posts, comments, and real-time notifications.",
      image: "/api-documentation-interface.png",
      technologies: ["Express.js", "MongoDB", "JWT", "Socket.io", "Swagger"],
      github: "https://github.com",
      demo: null,
      featured: false,
    },
    {
      title: "Machine Learning Classifier",
      description:
        "Image classification model using deep learning to identify and categorize different types of objects.",
      image: "/ml-model-visualization.png",
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Jupyter"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false,
    },
    {
      title: "Mobile Expense Tracker",
      description:
        "Cross-platform mobile app for tracking personal expenses with budget management and spending analytics.",
      image: "/mobile-expense-tracker-app-interface.png",
      technologies: ["React Native", "Firebase", "Redux", "Chart.js", "Expo"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false,
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-sans text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my technical skills
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-sans">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="font-sans text-2xl font-semibold text-center mb-8">Other Projects</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="font-sans text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-sm">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    {project.demo && (
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
