<div align="center">

![Header](https://capsule-render.vercel.app/api?type=waving&color=0:0f0c29,50:1e3a5f,100:0ea5e9&height=200&section=header&text=LinkED&fontSize=72&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=AI-Powered%20Career%20Development%20Platform&descAlignY=58&descSize=20&descColor=7dd3fc)

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=20&duration=3000&pause=800&color=38BDF8&center=true&vCenter=true&width=700&lines=AI+Mentor+Matching+System;AI+Resume+Builder+%26+Optimization;Technical+Interview+Preparation;Personalized+Career+Guidance;Bridge+Education+to+Industry)](https://git.io/typing-svg)

<br/>

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://prisma.io)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://neon.tech)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)](https://clerk.com)
[![Gemini AI](https://img.shields.io/badge/Gemini_AI-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://aistudio.google.com)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)

<br/>

[![Live Demo](https://img.shields.io/badge/Live_Demo--0ea5e9?style=for-the-badge)](https://link-ed-nine.vercel.app/)
[![GitHub Stars](https://img.shields.io/github/stars/Ahamedin/LinkED?style=for-the-badge&color=fbbf24&labelColor=1e1b4b)](https://github.com/Ahamedin/LinkED)

</div>

---

##  What is LinkED?

**LinkED** (Link Education) bridges the gap between education and real-world career opportunities by helping students and aspiring software engineers grow with AI-powered mentorship, resume building, interview preparation, and personalized career guidance.

> Built with Next.js · Prisma ORM · Neon PostgreSQL · Clerk Auth · Google Gemini AI

Built with modern full-stack technologies and AI integration, LinkED transforms learning into industry-ready experience and professional growth.

---

##  Features

<table>
<tr>
<td width="50%">

###  AI Career Guidance
- Personalized onboarding flow
- Industry-specific career recommendations
- AI-generated growth insights
- Role-based career path suggestions

###  AI Mentor Matching System
- Smart mentor recommendation engine
- Dynamic booking & cancellation
- Personalized mentor profiles
- Availability-based scheduling

###  AI Resume Builder
- Resume creation & management
- AI-powered content enhancement
- ATS-friendly formatting
- Industry-aligned optimization

###  Industry Insights Dashboard
- Real-time industry trends
- Skill gap analysis
- Career progression mapping

</td>
<td width="50%">

###  AI Cover Letter Generator
- Tailored job-role-based content
- Professional business formatting
- One-click AI generation

###  Technical Interview Preparation
- AI-generated technical quizzes
- Skill-based assessments
- Improvement feedback
- Performance tracking over time

###  Authentication & User Management
- Secure Clerk authentication
- Protected routes & middleware
- Seamless onboarding system
- Session management

###  Mentor Booking System
- Book and manage sessions
- Cancellation & rescheduling
- Track upcoming meetings

</td>
</tr>
</table>

---

##  Tech Stack

| Layer | Technology |
|:---|:---|
| **Frontend** | Next.js, React.js, Tailwind CSS, ShadCN UI |
| **Backend** | Next.js Server Actions, Prisma ORM |
| **Database** | Neon PostgreSQL |
| **Authentication** | Clerk |
| **AI Integration** | Google Gemini AI |
| **Deployment** | Vercel |

---

##  Project Structure

```bash
LinkED/
├── app/                  # Next.js App Router pages & layouts
├── components/           # Reusable UI components (ShadCN + custom)
├── actions/              # Next.js Server Actions (API logic)
├── data/                 # Static data & seed files
├── lib/                  # Utilities, helpers, AI client setup
├── prisma/               # Prisma schema & migrations
└── public/               # Static assets
```

---

##  Getting Started

### Prerequisites
- Node.js 18+
- A [Neon](https://neon.tech) PostgreSQL database
- A [Clerk](https://clerk.com) account
- A [Google AI Studio](https://aistudio.google.com) Gemini API key

### 1. Clone the repository

```bash
git clone https://github.com/Ahamedin/LinkED.git
```

### 2. Move into project directory

```bash
cd LinkED
```

### 3. Install dependencies

```bash
npm install
```

---

##  Environment Variables

Create a `.env` file in the root directory and add:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Clerk Redirect URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

# Neon Database
DATABASE_URL="your_neon_database_url"
PRISMA_CLIENT_ENGINE_TYPE=binary

# Gemini API
GEMINI_API_KEY=your_gemini_api_key
```

---

##  Prisma Setup

Generate Prisma Client:

```bash
npx prisma generate
```

Push schema to database:

```bash
npx prisma db push
```

---

##  Running the App

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

##  Deployment

This project is optimized for **Vercel** deployment.

| Setting | Value |
|:---|:---|
| **Install Command** | `npm install` |
| **Build Command** | `npm run build` |
| **Output Directory** | `.next` |

> Add all environment variables in your Vercel project settings before deploying.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Ahamedin/LinkED)

---

##  Roadmap

- [x] AI Career Guidance & Onboarding
- [x] Mentor Matching & Booking
- [x] AI Resume Builder
- [x] AI Cover Letter Generator
- [x] Technical Interview Preparation
- [x] Industry Insights Dashboard

---

##  Author

<div align="center">

**Iklash Ahamed**

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Ahamedin)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/iklashahamed)

*Full Stack Developer · AI Builder · SDE Candidate*

</div>

---

##  Conclusion

**LinkED** is designed to empower the next generation of software engineers — bridging the gap between academic learning and industry-ready skills using **AI-powered intelligence**, making career growth smarter, faster, and more accessible.

---

<div align="center">

![Footer](https://capsule-render.vercel.app/api?type=waving&color=0:0f0c29,50:1e3a5f,100:0ea5e9&height=100&section=footer&animation=fadeIn)

*If this project helped you, consider giving it a ⭐ — it means a lot!*

</div>
