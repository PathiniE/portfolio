"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background to-muted/20" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Section - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1"
          >
            <motion.h1
              className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hi, I&#39;m{" "}
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Pathini Ekanayaka
              </span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Computer Science student passionate about building innovative
              software solutions. Currently seeking software engineering
              internship opportunities.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button size="lg" className="font-medium w-full sm:w-auto">
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="font-medium bg-transparent w-full sm:w-auto"
              >
                Download Resume
              </Button>
            </motion.div>

            <motion.div
              className="flex space-x-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-secondary"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-secondary"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-secondary"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              <motion.div
                className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-secondary/20 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/professional-headshot-of-young-software-engineer.png"
                  alt="Alex Johnson - Software Engineering Student"
                  className="w-full h-full object-cover"
                  width={384}
                  height={384}
                  priority
                />
              </motion.div>
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-secondary rounded-full opacity-60" />
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-8 h-8 sm:w-12 sm:h-12 bg-accent rounded-full opacity-40" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
