# 🍎 macOS Portfolio

A stunning, interactive portfolio website designed to mimic the macOS desktop interface. Built with React and Vite, this project showcases a creative and modern approach to displaying your professional profile, projects, and experiences.

## ✨ Features

### 🎨 macOS-Inspired Design

- Sleek and modern UI that replicates the macOS aesthetic
- Responsive dock at the bottom for quick access to applications
- Navigation bar at the top with date and time display
- Draggable and resizable windows (powered by react-rnd)

### 🪟 Interactive Windows/Applications

- **GitHub Window**: Display and browse your GitHub repositories and profile information
- **Note-Taking App**: Built-in notes application for quick notes
- **Resume/CV**: Showcase your professional resume and qualifications
- **Spotify Integration**: Display music preferences and Spotify integration
- **Terminal/CLI**: Interactive command-line interface emulator
- **Calendar**: Quick link to Google Calendar
- **Mail**: Direct email contact option
- **LinkedIn**: Quick link to your LinkedIn profile

### 🔧 Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Styling**: SCSS
- **UI Components**:
  - react-rnd (Draggable and resizable windows)
  - react-console-emulator (Terminal emulation)
  - react-markdown (Markdown support)
  - react-syntax-highlighter (Code syntax highlighting)

## 📋 Project Structure

```
mac-os/
├── src/
│   ├── components/
│   │   ├── DateTime.jsx          # Date and time display component
│   │   ├── Dock.jsx              # Dock with application icons
│   │   ├── Nav.jsx               # Navigation bar
│   │   ├── dock.scss
│   │   ├── nav.scss
│   │   └── windows/
│   │       ├── Cli.jsx           # Terminal/CLI application
│   │       ├── Github.jsx        # GitHub profile window
│   │       ├── MacWindow.jsx     # Base window component
│   │       ├── Note.jsx          # Notes application
│   │       ├── Resume.jsx        # Resume/CV window
│   │       ├── Spotify.jsx       # Spotify integration
│   │       ├── cli.scss
│   │       ├── github.scss
│   │       ├── note.scss
│   │       ├── resume.scss
│   │       ├── spotify.scss
│   │       └── window.scss
│   ├── assets/
│   │   └── github.json           # GitHub data
│   ├── App.jsx                   # Main application component
│   ├── app.scss
│   └── main.jsx                  # Entry point
├── public/
│   ├── doc-icons/               # Application icons
│   ├── navbar-icons/            # Navigation bar icons
│   └── note.txt                 # Sample note
├── package.json
├── vite.config.js
├── eslint.config.js
└── index.html
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository** (or navigate to the project directory)

```bash
cd mac-os
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal)

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint Code

```bash
npm lint
```

## 🎯 How to Use

1. **Open Applications**: Click on the dock icons at the bottom to open different applications
2. **Drag Windows**: Click and drag the title bar of any window to move it around
3. **Resize Windows**: Use the resize handles on windows to adjust their size
4. **Quick Links**: Use the dock icons to quickly access:
   - GitHub profile
   - Google Calendar
   - Email
   - LinkedIn profile
5. **Terminal**: Access the CLI emulator for an interactive command-line experience

## 🛠️ Customization

### Updating Your Information

- Edit the relevant component files in `src/components/windows/` to customize content
- Update icons in the `public/doc-icons/` and `public/navbar-icons/` folders
- Modify `src/assets/github.json` to update GitHub profile data

### Styling

- Global styles are in `src/app.scss`
- Component-specific styles are in their respective `.scss` files
- The project uses SCSS for advanced styling capabilities

## 📦 Key Dependencies

| Package                  | Version | Purpose                            |
| ------------------------ | ------- | ---------------------------------- |
| react                    | ^19.2.0 | React library                      |
| react-dom                | ^19.2.0 | React DOM rendering                |
| react-rnd                | ^10.5.2 | Draggable and resizable components |
| react-console-emulator   | ^5.0.2  | Terminal emulation                 |
| react-markdown           | ^10.1.0 | Markdown rendering                 |
| react-syntax-highlighter | ^16.1.0 | Code syntax highlighting           |
| sass                     | ^1.97.2 | SCSS compilation                   |
| vite                     | ^7.2.4  | Build tool and dev server          |

## 🎨 Design Highlights

- **Modern Aesthetics**: Clean and minimalist design inspired by macOS
- **Interactive Elements**: Smooth animations and transitions
- **Window Management**: Draggable windows with proper z-index management
- **Responsive Layout**: Adapts well to different screen sizes
- **Professional Look**: Perfect for showcasing your portfolio to potential employers or clients

## 🔮 Future Enhancements

Potential ideas for extending this project:

- Add more applications/windows
- Implement localStorage for saving notes
- Add dark mode toggle
- Create a real terminal with actual command execution
- Add animations and transitions
- Implement actual Spotify API integration
- Add more interactive features

## 📝 License

This project is created for personal portfolio purposes. Feel free to customize and adapt it to your needs.

## 👨‍💻 About

This macOS portfolio is a creative way to showcase your skills and projects in a unique, interactive format. It demonstrates knowledge of:

- React and modern web development
- Component-based architecture
- State management
- SCSS and CSS styling
- UI/UX design principles
- Creating interactive web applications



---

**Created with using React and Vite**
