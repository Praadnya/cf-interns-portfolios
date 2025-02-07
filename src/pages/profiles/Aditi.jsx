import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  BookOpen,
  Briefcase,
  User,
} from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A full-stack web application built with React and Node.js",
      link: "https://project1.com",
      github: "https://github.com/username/project1",
    },
    {
      title: "Project 2",
      description: "Mobile-first e-commerce platform using Next.js",
      link: "https://project2.com",
      github: "https://github.com/username/project2",
    },
    {
      title: "Project 3",
      description: "Real-time chat application with WebSocket",
      link: "https://project3.com",
      github: "https://github.com/username/project3",
    },
  ];

  const skills = [
    "React",
    "TypeScript",
    "Node.js",
    "Next.js",
    "Tailwind CSS",
    "PostgreSQL",
    "GraphQL",
    "AWS",
  ];

  const experience = [
    {
      company: "Tech Company",
      position: "Senior Frontend Developer",
      period: "Jan 2022 - Present",
      description:
        "Led development of multiple React applications, improved performance by 40%, mentored junior developers.",
      technologies: ["React", "TypeScript", "Next.js"],
    },
    {
      company: "Startup Inc",
      position: "Full Stack Developer",
      period: "Mar 2020 - Dec 2021",
      description:
        "Developed and maintained multiple web applications, implemented new features, worked with cross-functional teams.",
      technologies: ["Node.js", "React", "MongoDB"],
    },
  ];

  const education = [
    {
      degree: "Master of Computer Science",
      school: "University Name",
      period: "2018 - 2020",
      description:
        "Specialized in Software Engineering and Distributed Systems",
    },
    {
      degree: "Bachelor of Computer Science",
      school: "University Name",
      period: "2014 - 2018",
      description: "Major in Computer Science with focus on Web Technologies",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Header/Nav */}
      <nav className="fixed w-full bg-gray-900/50 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xl font-bold">Portfolio</span>
          </motion.div>
          <div className="flex gap-4">
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Resume</Button>
            <Button variant="ghost">Projects</Button>
            <Button variant="ghost">Contact</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2"
            >
              <Avatar className="w-32 h-32 mb-6">
                <AvatarImage src="/your-photo.jpg" alt="Your Name" />
                <AvatarFallback>YN</AvatarFallback>
              </Avatar>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Hi, I'm <span className="text-blue-500">Your Name</span>
              </h1>
              <p className="text-xl text-gray-400 mb-6">
                Full Stack Developer specializing in modern web technologies
              </p>
              <div className="flex gap-4">
                <Button>
                  <Mail className="mr-2 w-4 h-4" /> Contact Me
                </Button>
                <Button variant="outline" className="text-gray-700">
                  <Download className="mr-2 w-4 h-4 " /> Download Resume
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-8">
              <User className="w-6 h-6 text-blue-500" />
              <h2 className="text-3xl font-bold">About Me</h2>
            </div>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="pt-6">
                <p className="text-gray-300 leading-relaxed">
                  I'm a passionate Full Stack Developer with over 5 years of
                  experience in building web applications. I specialize in
                  React, Node.js, and modern web technologies. I love solving
                  complex problems and creating user-friendly applications that
                  make a difference.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  When I'm not coding, you can find me contributing to
                  open-source projects, writing technical blogs, or exploring
                  new technologies. I believe in continuous learning and staying
                  updated with the latest industry trends.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-8">
            <Briefcase className="w-6 h-6 text-blue-500" />
            <h2 className="text-3xl font-bold">Experience</h2>
          </div>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold">{job.position}</h3>
                          <p className="text-blue-500">{job.company}</p>
                        </div>
                        <span className="text-gray-400">{job.period}</span>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-8">
            <BookOpen className="w-6 h-6 text-blue-500" />
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold">{edu.degree}</h3>
                          <p className="text-blue-500">{edu.school}</p>
                        </div>
                        <span className="text-gray-400">{edu.period}</span>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{edu.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex gap-4">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="mr-2 w-4 h-4" /> Demo
                      </Button>
                      <Button variant="outline" size="sm">
                        <Github className="mr-2 w-4 h-4" /> Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <HoverCard>
                  <HoverCardTrigger>
                    <div className="px-4 py-2 bg-gray-800 rounded-full cursor-pointer">
                      {skill}
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="bg-gray-800 border-gray-700">
                    Experience with {skill}
                  </HoverCardContent>
                </HoverCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Get In Touch</h2>
          <div className="flex justify-center gap-6">
            <Button>
              <Mail className="mr-2 w-4 h-4" /> Email Me
            </Button>
            <Button variant="outline">
              <Linkedin className="mr-2 w-4 h-4" /> LinkedIn
            </Button>
            <Button variant="outline">
              <Github className="mr-2 w-4 h-4" /> GitHub
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
