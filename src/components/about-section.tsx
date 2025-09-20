"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Code, Target, Users } from "lucide-react"

export function AboutSection() {
  const interests = [
    "DevOps & Cloud Computing",
    "Machine Learning",
    "Containerization & Orchestration",
    "CI/CD Pipelines",
    "Infrastructure as Code",
    "Neuroevolutionary AI",
    "Sports Analytics",
    "Full-Stack Development"
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-sans text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Motivated 4th year Computer Science undergraduate with hands-on experience in DevOps, cloud platforms, and innovative AI research
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-6 w-6 text-secondary mr-3" />
                  <h3 className="font-sans text-xl font-semibold">Education</h3>
                </div>
                <div className="text-muted-foreground mb-6">
                  <p className="mb-3">
                    <strong>Bachelor of Science (Honours) in Computer Science</strong>
                    <br />
                    University of Sri Jayewardenepura, Nugegoda
                    <br />
                    Current GPA: 3.4/4.0 (2022 - Present)
                  </p>
                  <p className="mb-2">
                    <strong>GCE Advanced Level (2020)</strong>
                    <br />
                    Chemistry - A, Combined Mathematics - B, Physics - C
                  </p>
                  <p>
                    <strong>GCE Ordinary Level (2017)</strong>
                    <br />
                    9 A&apos;s
                  </p>
                </div>

                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 text-secondary mr-3" />
                  <h3 className="font-sans text-xl font-semibold">Extracurricular Activities</h3>
                </div>
                <div className="text-muted-foreground mb-4 space-y-3">
                  <div>
                    <strong>President (2025 - 2026)</strong>
                    <br />
                    <span className="text-sm">Computer Science Association, University of Sri Jayewardenepura</span>
                    <br />
                    <span className="text-xs">Leading the association and organizing academic and professional development events</span>
                  </div>
                  <div>
                    <strong>Committee Member (2024 - 2025)</strong>
                    <br />
                    <span className="text-sm">Computer Science Association Board</span>
                  </div>
                  <div>
                    <strong>Secretary (2024)</strong>
                    <br />
                    <span className="text-sm">Aurora - Conference of Computer Science</span>
                    <br />
                    <span className="text-xs">Organized major computer science conference with industry participation</span>
                  </div>
                  <div>
                    <strong>IEEE Member (Present)</strong>
                    <br />
                    <span className="text-sm">Institute of Electrical and Electronics Engineers</span>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <Code className="h-6 w-6 text-secondary mr-3" />
                  <h3 className="font-sans text-xl font-semibold">Areas of Interest</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <motion.div
                      key={interest}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <Badge variant="secondary" className="text-xs">{interest}</Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start">
              <Target className="h-6 w-6 text-secondary mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-sans text-lg font-semibold mb-2">Current Focus</h3>
                <p className="text-muted-foreground">
                  I&apos;m seeking a DevOps internship to apply my hands-on experience with containerization (Docker), 
                  orchestration (Kubernetes), cloud platforms (AWS), and CI/CD pipelines (Jenkins). Currently working 
                  as a Frontend Developer at Flyxto while pursuing my degree.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Code className="h-6 w-6 text-secondary mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-sans text-lg font-semibold mb-2">Research & Innovation</h3>
                <p className="text-muted-foreground">
                  I&apos;m actively involved in cutting-edge research, currently developing neuroevolutionary agents for 
                  strategic decision-making in sports analytics. I&apos;ve also built AI-powered solutions including a 
                  desk robot assistant and genetic algorithms for optimization problems.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Users className="h-6 w-6 text-secondary mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-sans text-lg font-semibold mb-2">Leadership & Collaboration</h3>
                <p className="text-muted-foreground">
                  As President of the Computer Science Association and former Secretary of Aurora Conference, 
                  I bring strong leadership abilities, excellent communication skills, and proven ability to work 
                  collaboratively in team environments while organizing major academic events.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <GraduationCap className="h-6 w-6 text-secondary mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-sans text-lg font-semibold mb-2">Technical Expertise</h3>
                <p className="text-muted-foreground">
                  Proficient in infrastructure as code with Terraform and Ansible, complemented by strong 
                  programming skills in Java and Python. Quick learner with strong analytical thinking and 
                  adaptability to new technologies and methodologies.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}