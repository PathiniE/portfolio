"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export function ProjectsSection() {
  const projects = [
    {
      title: "Neuroevolutionary Agents for Strategic Decision-Making in Sports Analytics",
      description:
        "Developing autonomous agents using neuroevolution for team-based sports strategy optimization. Implementing neural network controllers for intelligent player behavior simulation and researching emergent tactics and multi-agent cooperation in simulated environments.",
      image: "/sports-analytics-ai.png",
      technologies: [
        "Python",
        "Machine Learning",
        "Neural Networks",
        "Neuroevolution",
        "Sports Analytics",
        "Multi-Agent Systems"
      ],
      github: "https://github.com/PathiniE",
      demo: null,
      featured: true,
      status: "Ongoing",
      type: "Research Project"
    },
    {
      title: "AI-Powered Desk Robot Assistant",
      description:
        "Designed and implemented an interactive robot assistant for office environments. Integrated cloud-based AI services (OpenAI, ElevenLabs) for speech recognition and synthesis. Developed visitor logging system and physical interaction capabilities using sensors and servo motors.",
      image: "/desk-assistant-robot.png",
      technologies: [
        "ESP32",
        "Python",
        "AI Integration",
        "OpenAI",
        "ElevenLabs",
        "Sensors",
        "Servo Motors"
      ],
      github: "https://github.com/PathiniE",
      demo: "https://drive.google.com/file/d/1IYhpJkFiiQjwl71LafPFFcFUWPKY-AAc/view?usp=drive_link",
      featured: true,
      status: "2024",
      type: "Team Project"
    },
    {
      title: "Genetic Algorithm for Video Storage Optimization",
      description:
        "Implemented comprehensive genetic algorithm with multiple crossover and mutation strategies for DVD storage optimization. Developed performance analysis framework comparing single-point vs uniform crossover and bit-flip vs interchange mutation methods. Achieved optimal video selection maximizing viewing time (648+ minutes) within 4500 MB capacity constraint using tournament selection.",
      image: "/genetic-algorithm-optimization.png",
      technologies: [
        "Python",
        "Machine Learning",
        "Optimization",
        "Genetic Algorithms",
        "Statistical Analysis"
      ],
      github: "https://github.com/PathiniE",
      demo: null,
      featured: true,
      status: "2024",
      type: "Algorithm Research Project"
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Built responsive portfolio website with modern UI/UX design and dark/light theme toggle. Implemented smooth animations using Framer Motion and integrated EmailJS for contact functionality. Utilized shadcn/ui component library and deployed with optimized performance and SEO.",
      image: "/portfolio-website.png",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "EmailJS",
        "shadcn/ui"
      ],
      github: "https://github.com/PathiniE",
      demo: "https://portfolio-one-lilac-59.vercel.app",
      featured: false,
      status: "2024",
      type: "Web Development Project"
    }
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

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
          <h2 className="font-sans text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my research projects and technical work in AI, machine learning, and software development
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-1 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative h-64 md:h-full overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">
                        {project.type}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {project.status}
                      </Badge>
                    </div>
                    <CardTitle className="font-sans text-xl mb-3">{project.title}</CardTitle>
                    <CardDescription className="text-sm mb-4 leading-relaxed">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      {project.demo && (
                        <Button size="sm" asChild>
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            {project.title === "Personal Portfolio Website" ? "Live Demo" : "Demo"}
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="font-sans text-2xl font-semibold text-center mb-8">
                Other Projects
              </h3>
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
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {project.type}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {project.status}
                        </Badge>
                      </div>
                      <CardTitle className="font-sans text-lg">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {project.description.length > 120 
                          ? `${project.description.substring(0, 120)}...`
                          : project.description
                        }
                      </CardDescription>
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
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                        {project.demo && (
                          <Button variant="ghost" size="sm" asChild>
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
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
          </>
        )}
      </div>
    </section>
  );
}