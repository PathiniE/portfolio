"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        {
          name: "Java",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
      ],
    },
    {
      title: "Databases",
      skills: [
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "Neo4j",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg",
        },
      ],
    },
    {
      title: "DevOps & Cloud",
      skills: [
        {
          name: "AWS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
        },
        {
          name: "Jenkins",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
        },
        {
          name: "Ansible",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg",
        },
        {
          name: "Terraform",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
        },
        {
          name: "Docker",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        {
          name: "Kubernetes",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
        },
      ],
    },
    {
      title: "Development Tools",
      skills: [
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "GitHub",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
        {
          name: "VS Code",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        },
        {
          name: "Linux",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
        },
        {
          name: "Jupyter Notebook",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
        },
      ],
    },
    {
      title: "Web Technologies",
      skills: [
        {
          name: "Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Express.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
      ],
    },
  ];

  const certifications = [
    {
      name: "Crash Course: Kubernetes For Absolute Beginners",
      provider: "KodeKloud",
      url: "https://learn.kodekloud.com/user/certificate/8b2b5e2a-1921-4239-8794-132e948781a1",
      date: "Sep 2025",
    },
    {
      name: "Neo4j Fundamentals",
      provider: "Neo4j",
      url: "https://graphacademy.neo4j.com/c/952b7a22-026c-4a42-ab83-4b97d1ca1977",
      date: "Aug 2025",
    },
    {
      name: "Crash Course: Linux For Absolute Beginners",
      provider: "KodeKloud",
      url: "https://learn.kodekloud.com/certificate/bbfb195a-8747-4cc0-ab7a-6a977cddb280",
      date: "June 2025",
    },
    {
      name: "Python for Beginners",
      provider: "University of Moratuwa",
      url: "#",
      date: "Jun 2024",
    },
    {
      name: "Python For Beginner and Intermediate Learners",
      provider: "Codebasics",
      url: "https://codebasics.io/certificate/CB-48-370208",
      date: "June 2024",
    },
    {
      name: "Docker Fundamentals",
      provider: "Alison",
      url: "https://alison.com/certification/check/e7ca45d0df",
      date: "Dec 2024",
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-sans text-3xl md:text-4xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technical skills and tools I&apos;ve mastered through coursework and
            personal projects
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="font-sans text-lg">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          duration: 0.5,
                        }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center p-3 rounded-lg border hover:shadow-md transition-shadow duration-200 group"
                      >
                        <div className="w-12 h-12 mb-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-200 relative">
                          <Image
                            src={skill.icon}
                            alt={`${skill.name} logo`}
                            width={48}
                            height={48}
                            className="object-contain"
                            priority={categoryIndex < 2}
                          />
                        </div>
                        <span className="text-sm font-medium text-center leading-tight">
                          {skill.name}
                        </span>
                      </motion.div>
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
          className="text-center"
        >
          <h3 className="font-sans text-2xl font-semibold mb-6">
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card
                  className="h-full cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
                  onClick={() => window.open(cert.url, "_blank")}
                >
                  <CardContent className="">
                    <div className="text-left">
                      <h4 className="font-semibold text-sm mb-2 line-clamp-2">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-muted-foreground mb-2">
                        {cert.provider} • {cert.date}
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="text-xs">
                          View Certificate
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
