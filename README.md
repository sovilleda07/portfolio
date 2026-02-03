# Portfolio Website

A modern, responsive portfolio website showcasing my work as a Full Stack Developer. Built with React, TypeScript, and Tailwind CSS, featuring a clean design with smooth animations and internationalization support.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success?style=flat-square)
![React](https://img.shields.io/badge/React-19.2.0-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.18-38bdf8?style=flat-square&logo=tailwindcss)

## ✨ Features

- **Responsive Design** - Fully responsive layout that works seamlessly across all devices
- **Dark/Light Mode** - Theme toggle with smooth transitions and persistent user preference
- **Internationalization** - Multi-language support (English/Spanish) using i18next
- **Modern UI/UX** - Clean, professional design with smooth animations and interactive elements
- **Sections**:
  - Hero section with animated introduction
  - About section highlighting skills and experience
  - Skills showcase organized by category (Frontend, Backend, Database)
  - Projects portfolio with live demos and GitHub links
  - Contact form for direct communication
- **Optimized Performance** - Fast loading times with Vite build optimization
- **Accessibility** - Semantic HTML and ARIA labels for better accessibility

## 🛠️ Tech Stack

### Frontend
- **React 19.2.0** - UI library for building component-based interfaces
- **TypeScript 5.9.3** - Type-safe JavaScript for better development experience
- **Tailwind CSS 4.1.18** - Utility-first CSS framework for rapid styling
- **Vite 7.2.4** - Next-generation frontend build tool for fast development

### Internationalization
- **i18next 25.8.0** - Internationalization framework
- **react-i18next 16.5.3** - React integration for i18next

### Development Tools
- **ESLint** - Code linting and quality enforcement
- **TypeScript ESLint** - TypeScript-specific linting rules
- **Vite Plugin React** - Fast Refresh and JSX support

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/sovilleda07/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional)
   
   Create a `.env.local` file in the root directory if you need to configure any environment-specific variables:
   ```bash
   VITE_FORMSPREE_ID=xxxx
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   
   The application will be available at `http://localhost:5173`

## 🚀 Available Scripts

- **`npm run dev`** - Start the development server with hot module replacement
- **`npm run build`** - Build the production-ready application
- **`npm run preview`** - Preview the production build locally
- **`npm run lint`** - Run ESLint to check code quality

## 📁 Project Structure

```
portfolio/
├── public/              # Static assets
│   ├── projects/        # Project screenshots
│   └── resume/          # Resume files
├── src/
│   ├── components/      # React components
│   │   ├── background/  # Background effects
│   │   ├── layout/      # Header, Footer, etc.
│   │   ├── sections/    # Main page sections
│   │   └── ui/          # Reusable UI components
│   ├── context/         # React context providers
│   ├── data/            # Static data and configurations
│   ├── hooks/           # Custom React hooks
│   ├── i18n/            # Internationalization setup
│   │   └── locales/     # Translation files (en, es)
│   ├── styles/          # Global styles
│   ├── types/           # TypeScript type definitions
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global CSS and Tailwind imports
├── index.html           # HTML template
├── package.json         # Project dependencies
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── README.md            # Project documentation
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Sonia Villeda**
- Full Stack Web Developer
- GitHub: [@sovilleda07](https://github.com/sovilleda07)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
