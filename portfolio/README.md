# Srirama Krishna Kadiyam Portfolio (React + Vite)
## Run locally
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # production build in dist/
## Replace placeholders
- `src/data/links.js`: LinkedIn URL (email already set; change it there if needed)
- `public/resume.pdf`: already your resume; replace the file (same name) when you update it
- `public/images/`: profile photo (then swap the SK circle in `Hero.jsx` for an <img>)
- `src/data/projects.js`: verify each project's features against your repos
## Contact form
No backend is connected. Submitting opens the visitor's email app with a prefilled message to your email. For direct delivery, add a service such as Formspree or EmailJS.
## Push to GitHub
    git init && git add . && git commit -m "Initial portfolio"
    git branch -M main
    git remote add origin https://github.com/sriramkrishnakadiyam/portfolio.git
    git push -u origin main
## Deploy on Vercel
Import the repo at vercel.com/new. Framework: Vite, build command `npm run build`, output `dist`. No environment variables needed.
