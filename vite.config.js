import { defineConfig } from "vite"
import { resolve } from "node:path"

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        experience: resolve(__dirname, "experience.html"),
        education: resolve(__dirname, "education.html"),
        projects: resolve(__dirname, "projects.html"),
        project: resolve(__dirname, "project.html"),
        skills: resolve(__dirname, "skills.html"),
        contact: resolve(__dirname, "contact.html"),
        resume: resolve(__dirname, "resume.html"),
      },
    },
  },
})
