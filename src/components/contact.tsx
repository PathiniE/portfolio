"use client";

import type React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus("idle");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "pathini2002@gmail.com",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "pathini2002@gmail.com",
      href: "mailto:pathini2002@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+94729499492",
      href: "tel:+94729499492",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "437/7, Sampath Kumara Mawatha, Ganemulla, Sri Lanka",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/PathiniE",
      username: "@PathiniE",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/pathini-ekanayaka",
      username: "Pathini Ekanayaka",
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
            I&#39;m always open to discussing new opportunities, interesting
            projects, or just having a chat about technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="font-sans text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
                Contact Information
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 sm:space-x-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <info.icon className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-sm sm:text-base">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-muted-foreground hover:text-secondary transition-colors text-sm sm:text-base break-all"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground text-sm sm:text-base">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-sans text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
                Connect With Me
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                        <social.icon className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-sm sm:text-base">
                          {social.label}
                        </p>
                        <p className="text-muted-foreground text-sm sm:text-base truncate">
                          {social.username}
                        </p>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader className="pb-4 sm:pb-6">
                <CardTitle className="font-sans text-lg sm:text-xl">
                  Send Me a Message
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Fill out the form below and I&#39;ll get back to you as soon
                  as possible
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm sm:text-base">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="text-sm sm:text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm sm:text-base">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="text-sm sm:text-base"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm sm:text-base">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                      className="text-sm sm:text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm sm:text-base">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or opportunity..."
                      rows={5}
                      required
                      className="text-sm sm:text-base resize-none"
                    />
                  </div>

                  {submitStatus === "success" && (
                    <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-lg">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-sm">
                        Message sent successfully! I&#39;ll get back to you
                        soon.
                      </span>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
                      <AlertCircle className="h-4 w-4" />
                      <span className="text-sm">
                        Failed to send message. Please try again or contact me
                        directly.
                      </span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full text-sm sm:text-base"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
