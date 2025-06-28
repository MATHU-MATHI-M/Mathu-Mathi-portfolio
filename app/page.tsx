"use client"

import type React from "react"

import { useState, useEffect } from "react"
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Award,
  ExternalLink,
  Download,
  Menu,
  X,
  Code,
  Database,
  Brain,
  Palette,
  Server,
  Globe,
  Cpu,
  MessageSquare,
  Shield,
  Users,
  Crown,
  Compass,
} from "lucide-react"
import jsPDF from "jspdf"
import html2canvas from "html2canvas"

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [typedText, setTypedText] = useState("")
  const [typedSubText, setTypedSubText] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("")

  const fullText = "Full Stack Developer & AI Enthusiast"
  const subText = "III Year B.E. Computer Science Engineering Student at Kongu Engineering College"

  // Typing animation effect
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
        // Start sub text typing
        let subIndex = 0
        const subTimer = setInterval(() => {
          if (subIndex <= subText.length) {
            setTypedSubText(subText.slice(0, subIndex))
            subIndex++
          } else {
            clearInterval(subTimer)
          }
        }, 50)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollTop / docHeight

      setScrollY(scrollTop)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const skills = [
    { name: "Python", level: 90, icon: Code },
    { name: "Java", level: 85, icon: Code },
    { name: "C Language", level: 88, icon: Code },
    { name: "C++ Language", level: 85, icon: Code },
    { name: "React.js", level: 88, icon: Globe },
    { name: "Node.js", level: 82, icon: Server },
    { name: "Go Lang", level: 75, icon: Code },
    { name: "Fullstack Development", level: 85, icon: Server },
    { name: "MongoDB", level: 80, icon: Database },
    { name: "SQL", level: 82, icon: Database },
    { name: "AI Models", level: 80, icon: Brain },
    { name: "LLM Model Development", level: 78, icon: Cpu },
    { name: "Prompting", level: 85, icon: MessageSquare },
    { name: "UI/UX Design", level: 78, icon: Palette },
  ]

  const certifications = [
    {
      title: "Microsoft Azure AI",
      issuer: "Microsoft",
      type: "Global Certification",
      color: "from-blue-500 to-cyan-500",
      icon: Shield,
    },
    {
      title: "React Frontend Developer",
      issuer: "HackerRank",
      type: "Certification",
      color: "from-green-500 to-emerald-500",
      icon: Code,
    },
    {
      title: "Oracle Cloud",
      issuer: "Oracle",
      type: "Certification",
      color: "from-red-500 to-orange-500",
      icon: Database,
    },
  ]

  const softSkills = [
    { name: "Communication Skills", icon: MessageSquare },
    { name: "Problem Solving", icon: Brain },
    { name: "Team Collaboration", icon: Users },
    { name: "Leadership", icon: Crown },
    { name: "Guidance", icon: Compass },
  ]

  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Tamil", level: "Native" },
    { name: "Hindi", level: "Conversational" },
  ]

  const projects = [
    {
      title: "Chefora Recipe Finder",
      description: "Fullstack recipe finder application using API integration",
      tech: ["React", "Node.js", "API"],
      github: "https://github.com/MATHU-MATHI-M/Chefora",
      live: "https://chefora-app-0b9v.onrender.com",
    },
    {
      title: "Maa Saati Sava",
      description: "Meta project for pregnant women health care system",
      tech: ["React", "Node.js", "Tailwind"],
      github: "https://github.com/MATHU-MATHI-M/NeoMitra",
      live: "https://maa-sathi-seva.lovable.app/",
    },
    {
      title: "College Seminar Hall Booking",
      description: "Python Flask application for hall booking system",
      tech: ["Python", "Flask", "SQLite"],
      github: "https://github.com/MATHU-MATHI-M/Python-SemiHallBooking",
      live: "https://Python-semihallbooking-3.onrender.com",
    },
    {
      title: "Student Information System",
      description: "Database management system for student records",
      tech: ["React", "Node.js", "MySQL"],
      github: "https://github.com/MATHU-MATHI-M/Navify",
      live: "https://dbms-mini-8.onrender.com",
    },
    {
      title: "Edumaster Frontend Project",
      description: "IIT Bhubaneswar Frontend Battle competition project",
      tech: ["TypeScript", "React", "CSS"],
      github: "https://github.com/MATHU-MATHI-M/Frontend-Battle-Round1",
      live: "https://frontend-battle3.onrender.com/",
    },
    {
      title: "Techcounsel Chatbot",
      description: "AI-powered chatbot application for technical counseling",
      tech: ["AI/ML", "Python", "NLP"],
      github: "#",
      live: "#",
    },
    {
      title: "Bus Booking System",
      description: "Complete UI/UX design for bus booking platform",
      tech: ["Figma", "UI/UX", "Design"],
      github: "#",
      live: "https://www.figma.com/proto/P39TkOidWKvwYMfI2tJlQJ/UI-UX-Figma?node-id=106-523&p=f&t=DvLi4AgStNsTTjzH-1&scaling=scale-down&content-scaling=fixed&page-id=23%3A184&starting-point-node-id=106%3A523",
    },
    {
      title: "Book Store - UI/UX Figma",
      description: "Complete UI/UX design for online book store platform",
      tech: ["Figma", "UI/UX", "Design"],
      github: "#",
      live: "https://www.figma.com/proto/P39TkOidWKvwYMfI2tJlQJ/UI-UX-Figma?node-id=336-1000&p=f&t=i7s4T2xtJI9uuL6y-1&scaling=scale-down&content-scaling=fixed&page-id=9%3A71",
    },
    {
      title: "Freelance Platform - HireUs",
      description: "Platform connecting freelancers with clients",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "#",
      live: "https://shubhashreesv.github.io/HireUs/",
    },
    {
      title: "Asha Chatbot Application",
      description: "JobsForHerFoundation chatbot for women empowerment",
      tech: ["AI/ML", "Python", "Chatbot"],
      github: "#",
      live: "#",
    },
  ]

  const achievements = [
    "Hindustan College of Technology Paper presentation - Winner",
    "PSG College of Technology Paper presentation - Winner",
    "IIT Madras Technical Writing Challenge - Winner",
    "VIT Hackathon - Special Mentions",
    "Exodia IEEE Paper at KEC - Winner",
    "Infinity 3.0 ISTE Project at KEC - Winner",
    "HackBuzz'25 Hackathon - Runner",
    "Aurigo Software Technologies Hackathon - 11th/90 Rank",
  ]

  const experience = [
    {
      title: "AI/ML Solution Developer & Project Management Intern",
      company: "StudAI Edutech Pvt. Ltd.",
      period: "June 12 2025 - Present",
      description:
        "Contributing in solving real world problems. Teamed with different tech skilled peoples to leverage project.",
    },
    {
      title: "Web Developer",
      company: "Octanet Service Pvt Ltd",
      period: "July 2024 - September 2024",
      description: "Contributed to interactive web applications and demonstrated teamwork abilities.",
    },
    {
      title: "Web Developer",
      company: "CodSoft Technology",
      period: "March 2024 - April 2024",
      description: "Gained hands-on experience in HTML, CSS, and JavaScript.",
    },
  ]

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setSubmitStatus(data.message)
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitStatus(data.error || "Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(""), 5000)
    }
  }

  const downloadResume = async () => {
    const input = document.getElementById("resume-content")
    if (!input) return
    // Wait for the next animation frame to ensure rendering is complete
    await new Promise((resolve) => requestAnimationFrame(resolve))
    const canvas = await html2canvas(input, { useCORS: true })
    // Wait a bit to ensure the canvas is ready
    await new Promise((resolve) => setTimeout(resolve, 100))
    const imgData = canvas.toDataURL("image/png")
    const pdf = new jsPDF({ orientation: "portrait", unit: "pt", format: "a4" })
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight)
    pdf.save("Mathu_Mathi_M_Resume.pdf")
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              MM
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  {item.name}
                </button>
              ))}
              <button onClick={downloadResume} className="neon-button-small">
                <Download className="w-4 h-4 mr-2" />
                Resume
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-300 hover:text-cyan-400">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  {item.name}
                </button>
              ))}
              <button onClick={downloadResume} className="neon-button-small mt-4">
                <Download className="w-4 h-4 mr-2" />
                Resume
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Animated Character */}
          <div className="mb-16 relative">
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 animate-spin-slow"></div>
              <div className="absolute inset-2 rounded-full bg-black flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-400 to-cyan-400 flex items-center justify-center text-2xl font-bold">
                  MM
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-10 text-white drop-shadow-2xl">
            <span className="text-black bg-white px-4 py-2 rounded-lg shadow-2xl">Mathu</span>{" "}
            <span className="text-white bg-black px-4 py-2 rounded-lg border-2 border-white shadow-2xl">Mathi</span>{" "}
            <span className="text-black bg-gray-200 px-4 py-2 rounded-lg shadow-2xl">M</span>
          </h1>

          <p className="text-xl md:text-2xl mb-6 text-gray-300 h-8">
            {typedText}
            <span className="animate-pulse">|</span>
          </p>

          <p className="text-lg mb-8 text-gray-400 max-w-2xl mx-auto h-6">
            {typedSubText}
            {typedSubText.length === subText.length ? "" : <span className="animate-pulse">|</span>}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in-up delay-400">
            <a href="mailto:mathu9147@gmail.com" className="neon-button">
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </a>
            <a href="https://www.linkedin.com/in/mathu-mathi-m-913a1427b" className="neon-button-secondary">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
            <a
              href="/Mathu-Mathi-M-Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="neon-button-accent"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </div>

          <div className="animate-bounce mt-12">
            <ChevronDown className="w-8 h-8 mx-auto text-cyan-400" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Technical Arsenal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon
              return (
                <div key={skill.name} className="skill-card group" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="p-6">
                    <div className="flex items-center justify-center mb-4">
                      <IconComponent className="w-8 h-8 text-cyan-400 mr-2" />
                      <h3 className="text-lg font-semibold text-center">{skill.name}</h3>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-gray-800 rounded-full h-2 mb-2">
                        <div
                          className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Certifications & Credentials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon
              return (
                <div key={index} className="certification-card" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="p-6 text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{cert.title}</h3>
                    <p className="text-gray-400 mb-1">{cert.issuer}</p>
                    <span className="inline-block px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                      {cert.type}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Soft Skills & Languages Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
            Soft Skills & Languages
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Soft Skills */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center text-cyan-400">Soft Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {softSkills.map((skill, index) => {
                  const IconComponent = skill.icon
                  return (
                    <div key={skill.name} className="soft-skill-card" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="flex items-center p-4">
                        <IconComponent className="w-6 h-6 text-orange-400 mr-3" />
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center text-purple-400">Languages</h3>
              <div className="space-y-4">
                {languages.map((language, index) => (
                  <div key={language.name} className="language-card" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-center justify-between p-4">
                      <span className="text-gray-300 font-medium">{language.name}</span>
                      <span className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm border border-purple-500/30">
                        {language.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-500"></div>
            {experience.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                  <div className="experience-card">
                    <h3 className="text-xl font-semibold mb-2 text-cyan-400">{exp.title}</h3>
                    <p className="text-purple-400 font-medium mb-2">{exp.company}</p>
                    <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-black shadow-lg shadow-cyan-400/50"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-cyan-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="project-card group">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-cyan-400">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-purple-900/50 text-purple-300 rounded-full text-xs border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                      >
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </a>
                    )}
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        className="flex items-center text-gray-400 hover:text-purple-400 transition-colors text-sm"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-start p-4">
                  <Award className="w-6 h-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">{achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="contact-card">
                <Mail className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-400">mathu9147@gmail.com</p>
              </div>
              <div className="contact-card">
                <Phone className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-400">+91 6369593242</p>
              </div>
              <div className="contact-card">
                <MapPin className="w-8 h-8 text-pink-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-gray-400">Tamil Nadu, Dindigul</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors text-white"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors text-white"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors text-white resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full neon-button-large disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {submitStatus && (
                  <div className="text-center text-green-400 bg-green-400/10 border border-green-400/30 rounded-lg p-3">
                    {submitStatus}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-4 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">© 2025 Mathu Mathi M. Crafted with passion and code.</p>
        </div>
      </footer>

      {/* Hidden Resume Section for PDF Generation */}
      <div
        id="resume-content"
        style={{
          position: "absolute",
          left: "-9999px",
          top: "0",
          width: "800px",
          background: "#fff",
          color: "#000",
          padding: "32px",
          fontSize: "16px",
          fontFamily: "Arial, sans-serif",
          zIndex: -1,
        }}
      >
        <h1>Mathu Mathi M</h1>
        <h2>{fullText}</h2>
        <p>{subText}</p>
        <h3>Skills</h3>
        <ul>
          {skills.map((skill) => (
            <li key={skill.name}>{skill.name} - {skill.level}%</li>
          ))}
        </ul>
        <h3>Experience</h3>
        <ul>
          {experience.map((exp, idx) => (
            <li key={idx}>
              <strong>{exp.title}</strong> at {exp.company} ({exp.period})
              <br />{exp.description}
            </li>
          ))}
        </ul>
        <h3>Certifications</h3>
        <ul>
          {certifications.map((cert, idx) => (
            <li key={idx}>{cert.title} - {cert.issuer} ({cert.type})</li>
          ))}
        </ul>
        <h3>Achievements</h3>
        <ul>
          {achievements.map((ach, idx) => (
            <li key={idx}>{ach}</li>
          ))}
        </ul>
        <h3>Contact</h3>
        <ul>
          <li>Email: mathu9147@gmail.com</li>
          <li>Phone: +91 6369593242</li>
          <li>Location: Tamil Nadu, Dindigul</li>
        </ul>
      </div>
    </div>
  )
}
