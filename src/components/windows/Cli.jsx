import React from 'react'
import MacWindow from './MacWindow'
import Terminal from 'react-console-emulator'
import "./cli.scss" 

const Cli = () => {
  const commands = {
    
    about: {
      description: 'Learn about me',
      usage: 'about',
      fn: () => `
Hi! I'm Aditya Rai, a Full Stack Developer passionate about creating amazing web experiences.
I specialize in MERN stack development and modern web technologies.
      `
    },
    skills: {
      description: 'View my technical skills',
      usage: 'skills',
      fn: () => `
Technical Skills:
  Frontend:     React.js, HTML5, CSS3, SCSS, JavaScript
  Backend:      Node.js, Express.js, MongoDB
  Tools:        Git, VS Code, npm, Webpack, Vite
  Other:        REST APIs, Responsive Design, Web Performance
      `
    },
    projects: {
      description: 'View my recent projects',
      usage: 'projects',
      fn: () => `
Recent Projects:
  1. Portfolio Website   - MERN Stack | Live Demo Available
  2. E-commerce App      - React + Node.js | MongoDB Database
  3. Task Manager        - React with Redux | Real-time Updates
  4. Chat Application    - Socket.io + Express | Multi-user Support
      `
    },
    contact: {
      description: 'Get my contact information',
      usage: 'contact',
      fn: () => `
Contact Information:
  Email:        aditayrai@email.com
  Phone:        +91 XXXXXXXXXX
  GitHub:       github.com/aditayrai
  LinkedIn:     linkedin.com/in/aditayrai
  Twitter:      @aditayrai
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
    
    <MacWindow>
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
