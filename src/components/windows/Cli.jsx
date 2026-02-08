import React from 'react'
import MacWindow from './MacWindow'
import Terminal from 'react-console-emulator'
import "./cli.scss" 

const Cli = ({windowName, setWindowsState}) => {
  const commands = {
    
    about: {
      description: 'Learn about me',
      usage: 'about',
      fn: () => `
Hi! I'm Aditay Kumar, a B.Tech (IT) student at NIT Srinagar (2027).

I have strong analytical thinking and hands-on development experience.
Solved 300+ Data Structures & Algorithms problems, demonstrating solid
problem-solving skills.

I am proficient in MERN stack development, API integration, and building
scalable web applications and Chrome Extensions.

Currently seeking opportunities to create efficient and impactful
software solutions.
      `
    },
    skills: {
      description: 'View my technical and soft skills',
      usage: 'skills',
      fn: () => `
SKILLS

Programming Languages:
  C++, C, JavaScript

Databases:
  SQL

Frameworks & Libraries:
  React.js, GSAP, Tailwind CSS

Backend Technologies:
  Node.js, Express.js, MongoDB

Core CS Fundamentals:
  OOPs, DBMS, DSA, Software Engineering, Operating Systems

Tools & Technologies:
  Azure Fundamentals (Basics)
  Git, GitHub
  VS Code, Code Blocks, IntelliJ IDEA
  Jupyter Notebook
  Prompt Engineering

Soft Skills:
  Leadership, Communication
  Critical Thinking, Problem Solving
  Teamwork, Time Management
      `
    },
    projects: {
      description: 'View my recent projects',
      usage: 'projects',
      fn: () => `
Recent Projects:
  PROJECTS

1. KR.AI – Autonomous Meeting Intelligence Agent
   • AI-powered assistant for structured meeting insights
   • Cognitive summarization & task extraction using GenAI & LLMs
   • Chrome Extension for live Zoom call interception
   • RAG-based contextual memory across meetings
   • Multi-format input (.mp3, .txt) with email sharing
   • Role: Team Lead, Backend, Chrome Extension, Zoom API

2. Uber Clone – MERN Stack Ride-Hailing Platform
   • Full-stack Uber-like application
   • JWT & bcrypt-based authentication
   • Role-based access control (users & captains)
   • REST APIs with MongoDB & Mongoose
   • Token blacklisting & protected routes

3. macOS-Inspired Interactive Portfolio Website
   • macOS-style desktop UI experience
   • Dock, navbar, and window system
   • Draggable & resizable React windows
   • Apps: Resume Viewer, GitHub Browser, Notes, Terminal (CLI)
   • Role: Frontend Dev, UI/UX Design, React Architecture
      `
    },
    contact: {
      description: 'Get my contact information',
      usage: 'contact',
      fn: () => `
Contact Information:
  Email:        aditayatwork@gmail.com
  Phone:        +91 8195937740
  GitHub:       https://github.com/adiwillhit/
  LinkedIn:     https://www.linkedin.com/in/aditay-kumar-rai/
  
      `
    },
    resume: {
      description: 'Download my resume',
      usage: 'resume',
      fn: () => `Resume downloaded! Check your downloads folder.`
    },
    echo: {
      description: 'Echo a passed string',
      usage: 'echo <string>',
      fn: (...args) => args.join(' ')
    }
  }

  const welcomeMsg = `
╔═══════════════════════════════════════════════════════════╗
║           Welcome to Aditya Rai's Portfolio              ║
║                   Type 'help' for commands                ║
╚═══════════════════════════════════════════════════════════╝



Available Commands:
  help          - List all available commands
  about         - Learn about me
  skills        - View my technical skills
  projects      - View my recent projects
  contact       - Get my contact information
  resume        - Download my resume
  clear         - Clear the terminal
  echo          - Echo a passed string
  `

  

  return (
    
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
        <div className="cli-window">
            <Terminal
        commands={commands}
        welcomeMessage={welcomeMsg}
        promptLabel={'aditayrai:~$'}
        promptLabelStyle={{ color: '#00ff00' }}

        />


        </div>
    
    </MacWindow>
  )
}

export default Cli
