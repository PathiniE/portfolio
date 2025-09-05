"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Code, Coffee } from "lucide-react"

export function AboutSection() {
  const interests = [
    "Full-Stack Development",
    "Machine Learning",
    "Cloud Computing",
    "Mobile Development",
    "Open Source",
    "UI/UX Design",
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
            Passionate computer science student with a love for creating innovative solutions
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
                <p className="text-muted-foreground mb-4">
                  <strong>Bachelor of Science in Computer Science</strong>
                  <br />
                  University of Sri Jayewardenapura
                  <br />
                  Expected Graduation: 2026
                  <br />
                  GPA: 3.4/4.0
                </p>

                <div className="flex items-center mb-4">
                  <Code className="h-6 w-6 text-secondary mr-3" />
                  <h3 className="font-sans text-xl font-semibold">Interests</h3>
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
                      <Badge variant="secondary">{interest}</Badge>
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
              <Coffee className="h-6 w-6 text-secondary mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-sans text-lg font-semibold mb-2">My Journey</h3>
                <p className="text-muted-foreground">
                  I discovered my passion for programming during my first year of college when I built my first web
                  application. Since then, I&#39;ve been constantly learning and building projects that solve real-world
                  problems.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Code className="h-6 w-6 text-secondary mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-sans text-lg font-semibold mb-2">What Drives Me</h3>
                <p className="text-muted-foreground">
                  I&#39;m motivated by the endless possibilities that technology offers to make a positive impact. Whether
                  it&#39;s optimizing algorithms, designing user interfaces, or building scalable systems, I love the
                  challenge of turning ideas into reality.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <GraduationCap className="h-6 w-6 text-secondary mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-sans text-lg font-semibold mb-2">Looking Forward</h3>
                <p className="text-muted-foreground">
                  I&#39;m actively seeking software engineering internship opportunities where I can contribute to
                  meaningful projects, learn from experienced developers, and grow my skills in a collaborative
                  environment.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
