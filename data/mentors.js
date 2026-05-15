const mentors = [
  {
    id: 0,
    name: "Harish Vardhana",
    gender: "Male",
    date_of_birth: "1989-06-12",
    location: "Chennai, Tamil Nadu, India",
    profile_picture_url: "https://randomuser.me/api/portraits/men/1.jpg",
    contact: {
      email: "harish.vardhana@example.com",
      phone: "+91-9000000000",
      linkedin_url: "https://www.linkedin.com/in/harish-vardhana/",
      website: "https://kalmrobotics.com"
    },
    professional_background: {
      current_position: "Founder & CTO",
      organization: "KAL-M Robotics and Innovations",
      years_of_experience: 8,
      industries: ["Robotics", "Artificial Intelligence", "Defense Technology"],
      skills: ["Robotics", "Artificial Intelligence", "Product Development", "Leadership", "Startup Management"]
    },
    mentorship_details: {
      areas_of_expertise: ["Robotics Engineering", "AI Product Development", "Startup & Entrepreneurship", "Career Guidance", "Leadership"],
      availability: ["Wednesday 7-9 PM", "Saturday 11-1 PM"],
      preferred_mentorship_mode: "Online",
      languages: ["English", "Tamil"],
      mentorship_style: "Hands-on & Strategic"
    },
    education: [
      { degree: "Postgraduate Certificate in Leadership & Management", institution: "Michigan State University", year: 2023 },
      { degree: "PGP – Business Analytics & Business Intelligence", institution: "Great Lakes Institute of Management", year: 2020 }
    ],
    social_proof: {
      testimonials: ["Highly knowledgeable in robotics and innovation.", "Great mentor for startup and product development."],
      rating: 4.8
    },
    metadata: { status: "active" }
  },
  {
    id: 1,
    name: "Dhravya Shah",
    gender: "Male",
    date_of_birth: "2002-04-18",
    location: "San Francisco, California, United States",
    profile_picture_url: "https://randomuser.me/api/portraits/men/2.jpg",
    contact: {
      email: "dhravya.shah@example.com",
      phone: "+1-415-555-0198",
      linkedin_url: "https://www.linkedin.com/in/dhravyashah/",
      website: "https://supermemory.ai"
    },
    professional_background: {
      current_position: "Founder & CEO",
      organization: "supermemory",
      years_of_experience: 4,
      industries: ["Artificial Intelligence", "Developer Tools", "Cloud Computing"],
      skills: ["AI Agents", "Backend Engineering", "Python", "React.js", "Developer Relations"]
    },
    mentorship_details: {
      areas_of_expertise: ["Startup Building", "AI Engineering", "Developer Relations", "Hackathons", "Career Guidance"],
      availability: ["Saturday 10-12 AM", "Sunday 6-8 PM"],
      preferred_mentorship_mode: "Online",
      languages: ["English"],
      mentorship_style: "Hands-on & Founder-driven"
    },
    education: [
      { degree: "Bachelor's in Computer Science", institution: "Arizona State University", year: 2023 }
    ],
    social_proof: {
      testimonials: ["Great mentor for startups and AI systems.", "Very insightful about developer-focused products."],
      rating: 4.7
    },
    metadata: { status: "active" }
  },
  {
    id: 2,
    name: "Steve Huffman",
    gender: "Male",
    date_of_birth: "1983-11-12",
    location: "San Francisco, California, United States",
    profile_picture_url: "https://randomuser.me/api/portraits/men/3.jpg",
    contact: {
      email: "steve.huffman@example.com",
      phone: "+1-415-555-0123",
      linkedin_url: "https://www.linkedin.com/in/shuffman56/",
      website: "https://www.redditinc.com"
    },
    professional_background: {
      current_position: "Chief Executive Officer",
      organization: "Reddit",
      years_of_experience: 24,
      industries: ["Technology", "Social Media", "Internet & Web Services"],
      skills: ["Entrepreneurship", "Python", "System Architecture", "Leadership", "Product Scaling"]
    },
    mentorship_details: {
      areas_of_expertise: ["Startup Building", "Scaling Tech Companies", "Product Leadership", "Entrepreneurship"],
      availability: ["Saturday 9-10 AM"],
      preferred_mentorship_mode: "Online",
      languages: ["English"],
      mentorship_style: "Strategic & High-level Guidance"
    },
    education: [
      { degree: "BS in Computer Science", institution: "University of Virginia", year: 2005 }
    ],
    social_proof: {
      testimonials: ["Exceptional insights on building internet-scale products."],
      rating: 5.0
    },
    metadata: { status: "active" }
  },
  {
    id: 3,
    name: "Linus Torvalds",
    gender: "Male",
    date_of_birth: "1969-12-28",
    location: "Portland, Oregon, United States",
    profile_picture_url: "https://randomuser.me/api/portraits/men/4.jpg",
    contact: {
      email: "linus.torvalds@example.com",
      phone: "+1-503-555-0111",
      linkedin_url: "linkedin.com",
      website: "linuxfoundation.org"
    },
    professional_background: {
      current_position: "Linux Foundation Fellow",
      organization: "The Linux Foundation",
      years_of_experience: 35,
      industries: ["Software Development", "Internet & Web Services"],
      skills: ["C Programming", "Linux Kernel", "Git", "Operating Systems", "Open Source Architecture"]
    },
    mentorship_details: {
      areas_of_expertise: ["Low-Level Programming", "Open Source Contribution", "Systems Architecture"],
      availability: ["Monday 4-5 PM"],
      preferred_mentorship_mode: "Online",
      languages: ["English", "Swedish", "Finnish"],
      mentorship_style: "Blunt, Technical & Direct"
    },
    education: [
      { degree: "M.S. in Computer Science", institution: "University of Helsinki", year: 1996 }
    ],
    social_proof: {
      testimonials: ["The ultimate authority on operating systems and git."],
      rating: 5.0
    },
    metadata: { status: "active" }
  },
  {
    id: 4,
    name: "Demis Hassabis",
    gender: "Male",
    date_of_birth: "1976-07-27",
    location: "London, England, United Kingdom",
    profile_picture_url: "https://randomuser.me/api/portraits/men/5.jpg",
    contact: {
      email: "demis.hassabis@example.com",
      phone: "+44-20-7946-0192",
      linkedin_url: "linkedin.com",
      website: "https://deepmind.google"
    },
    professional_background: {
      current_position: "CEO & Co-Founder",
      organization: "Google DeepMind",
      years_of_experience: 28,
      industries: ["Artificial Intelligence/Machine Learning", "Data Science & Analytics"],
      skills: ["Deep Learning", "Reinforcement Learning", "Neuroscience", "AI Research", "Game Development"]
    },
    mentorship_details: {
      areas_of_expertise: ["AGI Research", "Deep Learning Architectures", "AI for Science", "Tech Leadership"],
      availability: ["Friday 3-4 PM"],
      preferred_mentorship_mode: "Online",
      languages: ["English"],
      mentorship_style: "Scientific & Visionary"
    },
    education: [
      { degree: "PhD in Cognitive Neuroscience", institution: "University College London", year: 2009 },
      { degree: "BA in Computer Science", institution: "University of Cambridge", year: 1997 }
    ],
    social_proof: {
      testimonials: ["Incredible guidance on pioneering advanced AI and research pipelines."],
      rating: 5.0
    },
    metadata: { status: "active" }
  },
  {
    id: 5,
    name: "Vitalik Buterin",
    gender: "Male",
    date_of_birth: "1994-01-31",
    location: "Singapore",
    profile_picture_url: "https://randomuser.me/api/portraits/men/6.jpg",
    contact: {
      email: "vitalik.buterin@example.com",
      phone: "+65-6555-0143",
      linkedin_url: "linkedin.com",
      website: "https://ethereum.org"
    },
    professional_background: {
      current_position: "Co-Founder",
      organization: "Ethereum Foundation",
      years_of_experience: 13,
      industries: ["Blockchain & Cryptocurrency", "Quantum Computing"],
      skills: ["Cryptography", "Smart Contracts", "Solidity", "Decentralized Governance", "Mechanism Design"]
    },
    mentorship_details: {
      areas_of_expertise: ["Blockchain Protocol Design", "Zero-Knowledge Proofs", "Crypto-economics"],
      availability: ["Thursday 10-12 PM"],
      preferred_mentorship_mode: "Online",
      languages: ["English", "Russian", "Chinese"],
      mentorship_style: "Highly Theoretical & Mathematical"
    },
    education: [
      { degree: "Honorary Doctorate", institution: "University of Basel", year: 2018 }
    ],
    social_proof: {
      testimonials: ["Unparalleled depth in decentralized cryptography systems."],
      rating: 4.9
    },
    metadata: { status: "active" }
  },
  {
    id: 6,
    name: "Andrew Ng",
    gender: "Male",
    date_of_birth: "1976-04-18",
    location: "Palo Alto, California, United States",
    profile_picture_url: "https://randomuser.me/api/portraits/men/7.jpg",
    contact: {
      email: "andrew.ng@example.com",
      phone: "+1-650-555-0122",
      linkedin_url: "linkedin.com",
      website: "landing.ai"
    },
    professional_background: {
      current_position: "Founder & CEO",
      organization: "Landing AI",
      years_of_experience: 26,
      industries: ["Artificial Intelligence/Machine Learning", "Data Science & Analytics"],
      skills: ["Machine Learning", "Computer Vision", "Deep Learning", "Online Education", "AI Strategy"]
    },
    mentorship_details: {
      areas_of_expertise: ["AI Model Deployment", "Computer Vision Systems", "Building AI Teams", "EdTech Startup Growth"],
      availability: ["Tuesday 8-10 AM"],
      preferred_mentorship_mode: "Online",
      languages: ["English", "Mandarin"],
      mentorship_style: "Structured, Academic & Encouraging"
    },
    education: [
      { degree: "PhD in Computer Science", institution: "University of California, Berkeley", year: 2002 },
      { degree: "MS in Computer Science", institution: "Massachusetts Institute of Technology", year: 1998 }
    ],
    social_proof: {
      testimonials: ["The pioneer of modern AI education. Brilliant guidance."],
      rating: 5.0
    },
    metadata: { status: "active" }
  },
  {
    id: 7,
    name: "Joy Buolamwini",
    gender: "Female",
    date_of_birth: "1989-10-10",
    location: "Cambridge, Massachusetts, United States",
    profile_picture_url: "https://randomuser.me/api/portraits/women/1.jpg",
    contact: {
      email: "joy.b@example.com",
      phone: "+1-617-555-0185",
      linkedin_url: "linkedin.com",
      website: "algorithmicjusticeleague.org"
    },
    professional_background: {
      current_position: "Founder",
      organization: "Algorithmic Justice League",
      years_of_experience: 12,
      industries: ["Artificial Intelligence/Machine Learning", "Software Development"],
      skills: ["Computer Vision", "AI Ethics", "Data Bias Analysis", "Public Policy", "Software Auditing"]
    },
    mentorship_details: {
      areas_of_expertise: ["Responsible AI", "Computer Vision Audit", "Tech Policy & Bias Mitigation"],
      availability: ["Thursday 2-4 PM"],
      preferred_mentorship_mode: "Online",
      languages: ["English"],
      mentorship_style: "Empathetic, Analytical & Ethics-Focused"
    },
    education: [
      { degree: "PhD in Media Arts and Sciences", institution: "Massachusetts Institute of Technology", year: 2022 },
      { degree: "Master of Science", institution: "Oxford University", year: 2014 }
    ],
    social_proof: {
      testimonials: ["Gave me an entirely new, necessary perspective on AI system validation."],
      rating: 4.9
    },
    metadata: { status: "active" }
  },
  {
    id: 8,
    name: "Werner Vogels",
    gender: "Male",
    date_of_birth: "1958-10-03",
    location: "Seattle, Washington, United States",
    profile_picture_url: "https://randomuser.me/api/portraits/men/1.jpg",
    contact: {
      email: "werner.vogels@example.com",
      phone: "+1-206-555-0134",
      linkedin_url: "linkedin.com",
      website: "allthingsdistributed.com"
    },
    professional_background: {
      current_position: "VP & Chief Technology Officer",
      organization: "Amazon",
      years_of_experience: 36,
      industries: ["Cloud Computing", "IT Services"],
      skills: ["Distributed Systems", "Cloud Architecture", "Scalability", "Enterprise IT Strategy", "NoSQL"]
    },
    mentorship_details: {
      areas_of_expertise: ["Hyper-scale Architecture", "Cloud Strategy", "Fault-tolerant Systems"],
      availability: ["Friday 4-5 PM"],
      preferred_mentorship_mode: "Online",
      languages: ["English", "Dutch"],
      mentorship_style: "Architectural, Practical & Systems-focused"
    },
    education: [
      { degree: "PhD in Computer Science", institution: "Vrije Universiteit Amsterdam", year: 2003 }
    ],
    social_proof: {
      testimonials: ["Unrivaled advice on making highly-available global scale infrastructures."],
      rating: 5.0
    },
    metadata: { status: "active" }
  },
  {
    id: 9,
    name: "Troy Hunt",
    gender: "Male",
    date_of_birth: "1976-10-21",
    location: "Gold Coast, Queensland, Australia",
    profile_picture_url: "https://randomuser.me/api/portraits/men/2.jpg",
    contact: {
      email: "troy.hunt@example.com",
      phone: "+61-7-5555-0162",
      linkedin_url: "linkedin.com",
      website: "https://haveibeenpwned.com"
    },
    professional_background: {
      current_position: "Founder & Security Researcher",
      organization: "Have I Been Pwned",
      years_of_experience: 25,
      industries: ["Cybersecurity", "Internet & Web Services"],
      skills: ["Penetration Testing", "Data Breach Analysis", "Application Security", "Cloud Security", "Web Architecture"]
    },
    mentorship_details: {
      areas_of_expertise: ["Web App Vulnerability Assessment", "Incident Response Strategy", "Cloud Threat Modeling"],
      availability: ["Monday 9-11 AM"],
      preferred_mentorship_mode: "Online",
      languages: ["English"],
      mentorship_style: "Practical, Real-world & Hands-on Security"
    },
    education: [
      { degree: "Bachelor of Business (Computing)", institution: "Griffith University", year: 2001 }
    ],
    social_proof: {
      testimonials: ["Clear, actionable blueprints on secure coding and threat management."],
      rating: 4.9
    },
    metadata: { status: "active" }
  },
  {
    id: 10,
    name: "Katie Moussouris",
    gender: "Female",
    date_of_birth: "1976-05-14",
    location: "Las Vegas, Nevada, United States",
    profile_picture_url: "https://randomuser.me/api/portraits/women/2.jpg",
    contact: {
      email: "katie.m@example.com",
      phone: "+1-702-555-0174",
      linkedin_url: "linkedin.com",
      website: "lyticssecurity.com"
    },
    professional_background: {
      current_position: "Founder & CEO",
      organization: "Luta Security",
      years_of_experience: 24,
      industries: ["Cybersecurity", "IT Services"],
      skills: ["Vulnerability Disclosure", "Bug Bounty Architecture", "Incident Response", "Exploit Intelligence", "GovTech Security"]
    },
    mentorship_details: {
      areas_of_expertise: ["Vulnerability Coordination", "Cybersecurity Policy", "Enterprise Threat Management"],
      availability: ["Wednesday 1-3 PM"],
      preferred_mentorship_mode: "Online",
      languages: ["English"],
      mentorship_style: "Strategic, Policy-Driven & Technical"
    },
    education: [
      { degree: "BS in Biology & Chemistry", institution: "Boston University", year: 1998 }
    ],
    social_proof: {
      testimonials: ["Masterclass in vulnerability disclosure programs and defense strategy."],
      rating: 4.8
    },
    metadata: { status: "active" }
  },
  {
    id: 11,
    name: "Marc Raibert",
    gender: "Male",
    date_of_birth: "1949-12-22",
    location: "Waltham, Massachusetts, United States",
    profile_picture_url: "https://randomuser.me/api/portraits/men/3.jpg",
    contact: {
      email: "marc.raibert@example.com",
      phone: "+1-781-555-0143",
      linkedin_url: "linkedin.com",
      website: "bostondynamics.com"
    },
    professional_background: {
      current_position: "Executive Director",
      organization: "AI Institute (Boston Dynamics)",
      years_of_experience: 46,
      industries: ["Robotics", "Artificial Intelligence/Machine Learning"],
      skills: ["Dynamic Robotics", "Control Systems", "Legged Locomotion", "Mechanical Design", "Kinematics"]
    },
    mentorship_details: {
      areas_of_expertise: ["Hardware-Software Co-design", "Advanced Robotics control", "R&D Scaling"],
      availability: ["Tuesday 3-5 PM"],
      preferred_mentorship_mode: "Online",
      languages: ["English"],
      mentorship_style: "Engineering First & First-Principles Based"
    },
    education: [
      { degree: "PhD in Computer Science", institution: "Massachusetts Institute of Technology", year: 1977 },
      { degree: "BS in Electrical Engineering", institution: "Northeastern University", year: 1973 }
    ],
    social_proof: {
      testimonials: ["Unmatched deep understanding of dynamic physical systems and control."],
      rating: 5.0
    },
    metadata: { status: "active" }
  },
  {
    id: 12,
    name: "Fei-Fei Li",
    gender: "Female",
    date_of_birth: "1976-07-03",
    location: "Stanford, California, United States",
    profile_picture_url: "https://randomuser.me/api/portraits/women/4.jpg",
    contact: {
      email: "feifeili@example.com",
      phone: "+1-650-555-0199",
      linkedin_url: "linkedin.com",
      website: "stanford.edu"
    },
    professional_background: {
      current_position: "Co-Director",
      organization: "Stanford Human-Centered AI Institute",
      years_of_experience: 22,
      industries: ["Artificial Intelligence/Machine Learning", "Data Science & Analytics"],
      skills: ["Computer Vision", "Cognitive Neuroscience", "ImageNet Dataset Engineering", "Deep Learning Architectures", "Human-Centered Tech"]
    },
    mentorship_details: {
      areas_of_expertise: ["Computer Vision", "Ethical AI Design", "Academic-Industry Technology Transfer"],
      availability: ["Monday 10-12 AM"],
      preferred_mentorship_mode: "Online",
      languages: ["English", "Mandarin"],
      mentorship_style: "Inspirational, Academic & Rigorous"
    },
    education: [
      { degree: "PhD in Electrical Engineering", institution: "California Institute of Technology", year: 2005 },
      { degree: "AB in Physics", institution: "Princeton University", year: 1999 }
    ],
    social_proof: {
      testimonials: ["The pioneer of dataset-driven deep learning. Absolute master of vision AI."],
      rating: 5.0
    },
    metadata: { status: "active" }
  },
  {
    id: 13,
    name: "Yann LeCun",
    gender: "Male",
    date_of_birth: "1960-07-08",
    location: "New York City, New York, United States",
    profile_picture_url: "https://randomuser.me/api/portraits/men/4.jpg",
    contact: {
      email: "yann.lecun@example.com",
      phone: "+1-212-555-0161",
      linkedin_url: "linkedin.com",
      website: "meta.com"
    },
    professional_background: {
      current_position: "Chief AI Scientist",
      organization: "Meta",
      years_of_experience: 38,
      industries: ["Artificial Intelligence/Machine Learning", "Software Development"],
      skills: ["Convolutional Neural Networks", "Joint Embedding Predictive Architectures (JEPA)", "Computer Vision", "Robotics Control Systems", "PyTorch"]
    },
    mentorship_details: {
      areas_of_expertise: ["Self-Supervised Learning", "Energy-Based Models", "Neural Network Implementations"],
      availability: ["Wednesday 4-5 PM"],
      preferred_mentorship_mode: "Online",
      languages: ["English", "French"],
      mentorship_style: "Deep Mathematical Frameworks & Conceptual Strategy"
    },
    education: [
      { degree: "PhD in Computer Science", institution: "Université Pierre et Marie Curie", year: 1987 }
    ],
    social_proof: {
      testimonials: ["Helped me structuralize complex architectures for continuous state spaces."],
      rating: 4.9
    },
    metadata: { status: "active" }
  },
  {
    id: 14,
    name: "Gavin Wood",
    gender: "Male",
    date_of_birth: "1980-04-23",
    location: "Zug, Switzerland",
    profile_picture_url: "https://randomuser.me/api/portraits/men/5.jpg",
    contact: {
      email: "gavin.wood@example.com",
      phone: "+41-41-555-0155",
      linkedin_url: "linkedin.com",
      website: "https://parity.io"
    },
    professional_background: {
      current_position: "Founder",
      organization: "Parity Technologies",
      years_of_experience: 21,
      industries: ["Blockchain & Cryptocurrency", "Internet & Web Services"],
      skills: ["Solidity", "Rust", "Substrate Framework", "Web3 Consensus Mechanics", "Substrate Runtime"]
    },
    mentorship_details: {
      areas_of_expertise: ["Polkadot Sharding Architectures", "Substrate Engine Customization", "Smart Contract Language Engineering"],
      availability: ["Tuesday 2-4 PM"],
      preferred_mentorship_mode: "Online",
      languages: ["English"],
      mentorship_style: "Heavy Focus on Systems Code & Compiler Design"
    },
    education: [
      { degree: "PhD in Computer Science", institution: "University of York", year: 2005 }
    ],
    social_proof: {
      testimonials: ["Unrivaled instruction on writing low level Rust for cross-chain execution networks."],
      rating: 4.9
    },
    metadata: { status: "active" }
  },
  {
    id: 15,
    name: "Kelsey Hightower",
    gender: "Male",
    date_of_birth: "1981-02-27",
    location: "Portland, Oregon, United States",
    profile_picture_url: "https://randomuser.me/api/portraits/men/6.jpg",
    contact: {
      email: "kelsey.hightower@example.com",
      phone: "+1-503-555-0129",
      linkedin_url: "linkedin.com",
      website: "github.com"
    },
    professional_background: {
      current_position: "Principal Engineer (Retired)",
      organization: "Google Cloud",
      years_of_experience: 22,
      industries: ["Cloud Computing", "Software Development"],
      skills: ["Kubernetes", "Go (Golang)", "DevOps Systems", "Linux Container Infrastructure", "System Architecture"]
    },
    mentorship_details: {
      areas_of_expertise: ["Cloud Native Transformations", "Golang API Infrastructures", "Developer Relations Strategies"],
      availability: ["Thursday 11-1 PM"],
      preferred_mentorship_mode: "Online",
      languages: ["English"],
      mentorship_style: "Extremely Practical, Story-Driven & Minimalistic Code Designs"
    },
    education: [
      { degree: "Self-Taught / Industry Veteran", institution: "N/A", year: 2004 }
    ],
    social_proof: {
      testimonials: ["Breaks down massive cloud infrastructure problems into clean, human steps."],
      rating: 5.0
    },
    metadata: { status: "active" }
  },
  {
    id: 16,
    name: "Michelle J. Howard",
    gender: "Female",
    date_of_birth: "1960-04-30",
    location: "Washington, DC, United States",
    profile_picture_url: "https://randomuser.me/api/portraits/women/3.jpg",
    contact: {
      email: "michelle.howard@example.com",
      phone: "+1-202-555-0102",
      linkedin_url: "linkedin.com",
      website: "mitre.org"
    },
    professional_background: {
      current_position: "Cybersecurity Board Advisory Member",
      organization: "The MITRE Corporation",
      years_of_experience: 35,
      industries: ["Cybersecurity", "IT Services"],
      skills: ["Cyber Warfare Infrastructure", "Strategic Threat Management", "Crisis Leadership", "Maritime IT Command Systems"]
    },
    mentorship_details: {
      areas_of_expertise: ["Macro Tech Infrastructure Operations", "National-Level Threat Frameworks", "Executive IT Escalation Protocols"],
      availability: ["Monday 3-4 PM"],
      preferred_mentorship_mode: "Online",
      languages: ["English"],
      mentorship_style: "Commanding, Structural & High-Stakes Focus"
    },
    education: [
      { degree: "Masters of Military Arts and Science", institution: "U.S. Army Command and General Staff College", year: 1998 },
      { degree: "BS in Telecommunications", institution: "United States Naval Academy", year: 1982 }
    ],
    social_proof: {
      testimonials: ["Her tactical knowledge on high-impact incident coordination is unique."],
      rating: 5.0
    },
    metadata: { status: "active" }
  },
  {
    id: 17,
    name: "Arvind Krishna",
    gender: "Male",
    date_of_birth: "1962-01-23",
    location: "Armonk, New York, United States",
    profile_picture_url: "https://randomuser.me/api/portraits/men/7.jpg",
    contact: {
      email: "arvind.krishna@example.com",
      phone: "+1-914-555-0144",
      linkedin_url: "linkedin.com",
      website: "ibm.com"
    },
    professional_background: {
      current_position: "Chairman & CEO",
      organization: "IBM",
      years_of_experience: 34,
      industries: ["Quantum Computing", "Cloud Computing", "IT Services"],
      skills: ["Quantum System Orchestration", "Hybrid Cloud Topology", "Enterprise Linux Acquisitions", "Semiconductor Material R&D"]
    },
    mentorship_details: {
      areas_of_expertise: ["Quantum Circuit Optimization Planning", "Enterprise Multi-Cloud Architecture", "Corporate R&D Engineering Strategy"],
      availability: ["Saturday 8-9 AM"],
      preferred_mentorship_mode: "Online",
      languages: ["English", "Telugu", "Hindi"],
      mentorship_style: "Highly Structured, Technical & Long-Range Focused"
    },
    education: [
      { degree: "PhD in Electrical and Computer Engineering", institution: "University of Illinois Urbana-Champaign", year: 1991 },
      { degree: "BTech in Electrical Engineering", institution: "IIT Madras", year: 1985 }
    ],
    social_proof: {
      testimonials: ["Gave incredible structural insights on moving physical computing units into logical stacks."],
      rating: 4.9
    },
    metadata: { status: "active" }
  },
  {
    id: 18,
    name: "Nate Silver",
    gender: "Male",
    date_of_birth: "1978-01-13",
    location: "New York City, New York, United States",
    profile_picture_url: "https://randomuser.me/api/portraits/men/8.jpg",
    contact: {
      email: "nate.silver@example.com",
      phone: "+1-212-555-0172",
      linkedin_url: "linkedin.com",
      website: "natesilver.net"
    },
    professional_background: {
      current_position: "Founder & Quantitative Analyst",
      organization: "FiveThirtyEight / Silver Bulletin",
      years_of_experience: 23,
      industries: ["Data Science & Analytics", "Internet & Web Services"],
      skills: ["Bayesian Statistics", "Predictive Modeling Pipelines", "R (Programming Language)", "Data Ingestion Workflows"]
    },
    mentorship_details: {
      areas_of_expertise: ["Stochastic Modeling", "Data Cleaning at Scale", "Statistical Output Communication"],
      availability: ["Wednesday 5-7 PM"],
      preferred_mentorship_mode: "Online",
      languages: ["English"],
      mentorship_style: "Analytical, Probabilistic & Data-Critical"
    },
    education: [
      { degree: "Bachelor of Arts in Economics", institution: "University of Chicago", year: 2000 }
    ],
    social_proof: {
      testimonials: ["Exceptional approach toward building predictive engines when sparse datasets occur."],
      rating: 4.7
    },
    metadata: { status: "active" }
  },
  {
    id: 19,
    name: "Tim Berners-Lee",
    gender: "Male",
    date_of_birth: "1955-06-08",
    location: "Boston, Massachusetts, United States",
    profile_picture_url: "https://randomuser.me/api/portraits/men/9.jpg",
    contact: {
      email: "tim.berners-lee@example.com",
      phone: "+1-617-555-0156",
      linkedin_url: "linkedin.com",
      website: "w3.org"
    },
    professional_background: {
      current_position: "Director",
      organization: "World Wide Web Consortium (W3C)",
      years_of_experience: 36,
      industries: ["Internet & Web Services", "Software Development"],
      skills: ["Web Standards Architecture", "HTTP Protocol Design", "XML/HTML Specification", "Semantic Web", "Web Accessibility"]
    },
    mentorship_details: {
      areas_of_expertise: ["Web Standards & Protocols", "Open Web Platform Design", "Information Architecture"],
      availability: ["Friday 2-3 PM"],
      preferred_mentorship_mode: "Online",
      languages: ["English"],
      mentorship_style: "Visionary & Standards-focused"
    },
    education: [
      { degree: "BS in Physics", institution: "Oxford University", year: 1976 }
    ],
    social_proof: {
      testimonials: ["The inventor of the web. Masterclass on decentralized information systems."],
      rating: 5.0
    },
    metadata: { status: "active" }
  },
  {
    id: 20,
    name: "Arvind Krishna",
    gender: "Male",
    date_of_birth: "1962-04-10",
    location: "Armonk, New York, United States",
    profile_picture_url: "https://randomuser.me/api/portraits/men/17.jpg",
    contact: {
      email: "arvind.krishna@example.com",
      phone: "+1-914-555-0144",
      linkedin_url: "linkedin.com",
      website: "ibm.com"
    },
    professional_background: {
      current_position: "Chairman & CEO",
      organization: "IBM",
      years_of_experience: 30,
      industries: ["Cloud Computing", "Quantum Computing", "IT Services"],
      skills: ["Hybrid Cloud", "Quantum Strategy", "Enterprise Software", "Corporate Governance", "AI Transformation"]
    },
    mentorship_details: {
      areas_of_expertise: ["Quantum Computing Roadmap", "Enterprise Scaling", "Cloud Migration Strategy", "Executive Leadership"],
      availability: ["Friday 5-6 PM"],
      preferred_mentorship_mode: "Online",
      languages: ["English", "Hindi"],
      mentorship_style: "Visionary & Enterprise-focused"
    },
    education: [
      {
        degree: "PhD in Electrical Engineering",
        institution: "University of Illinois Urbana-Champaign",
        year: 1991
      },
      {
        degree: "B.Tech in Electrical Engineering",
        institution: "IIT Kanpur",
        year: 1985
      }
    ],
    social_proof: {
      testimonials: ["Incredible bird's-eye view of where hybrid cloud and quantum are moving next."],
      rating: 4.9
    },
    metadata: { status: "active" }
  },
  {
    id: 21,
    name: "Demis Hassabis",
    gender: "Male",
    date_of_birth: "1976-07-27",
    location: "London, United Kingdom",
    profile_picture_url: "https://randomuser.me/api/portraits/men/18.jpg",
    contact: {
      email: "demis.hassabis@example.com",
      phone: "+44-20-7946-0192",
      linkedin_url: "linkedin.com",
      website: "https://deepmind.google"
    },
    professional_background: {
      current_position: "CEO & Co-Founder",
      organization: "Google DeepMind",
      years_of_experience: 22,
      industries: ["Artificial Intelligence/Machine Learning", "Data Science & Analytics"],
      skills: ["Deep Learning", "Reinforcement Learning", "Neural Networks", "Research Leadership", "AI Ethics"]
    },
    mentorship_details: {
      areas_of_expertise: ["AGI Research Directions", "AI Productization", "Building Scientific Compute Teams"],
      availability: ["Thursday 4-5 PM"],
      preferred_mentorship_mode: "Online",
      languages: ["English"],
      mentorship_style: "Research-driven & Deep Academic Insight"
    },
    education: [
      {
        degree: "PhD in Cognitive Neuroscience",
        institution: "University College London",
        year: 2009
      },
      {
        degree: "BA in Computer Science",
        institution: "University of Cambridge",
        year: 1997
      }
    ],
    social_proof: {
      testimonials: ["Unrivaled guidance on bridging deep neuroscience concepts with deep reinforcement learning architectures."],
      rating: 5.0
    },
    metadata: { status: "active" }
  },
  {
    id: 22,
    name: "Joy Buolamwini",
    gender: "Female",
    date_of_birth: "1989-11-05",
    location: "Boston, Massachusetts, United States",
    profile_picture_url: "https://randomuser.me/api/portraits/women/5.jpg",
    contact: {
      email: "joy.b@example.com",
      phone: "+1-617-555-0183",
      linkedin_url: "linkedin.com",
      website: "algorithmicjusticeleague.org"
    },
    professional_background: {
      current_position: "Founder",
      organization: "Algorithmic Justice League",
      years_of_experience: 11,
      industries: ["Artificial Intelligence/Machine Learning", "Software Development"],
      skills: ["Computer Vision", "AI Bias Audit", "Data Ethics", "Public Policy", "Python"]
    },
    mentorship_details: {
      areas_of_expertise: ["Responsible AI Architecture", "Computer Vision Bias Mitigation", "Tech Ethics Legislation"],
      availability: ["Tuesday 3-5 PM"],
      preferred_mentorship_mode: "Online",
      languages: ["English"],
      mentorship_style: "Ethical & Systemic Risk Analysis"
    },
    education: [
      {
        degree: "PhD in Media Arts and Sciences",
        institution: "MIT Media Lab",
        year: 2022
      },
      {
        degree: "MSc in Education",
        institution: "University of Oxford",
        year: 2014
      }
    ],
    social_proof: {
      testimonials: ["Opened our engineering team's eyes to hidden biases in our training datasets."],
      rating: 4.8
    },
    metadata: { status: "active" }
  },
  {
    id: 23,
    name: "Parag Agrawal",
    gender: "Male",
    date_of_birth: "1984-05-21",
    location: "San Francisco, California, United States",
    profile_picture_url: "https://randomuser.me/api/portraits/men/19.jpg",
    contact: {
      email: "parag.a@example.com",
      phone: "+1-415-555-0211",
      linkedin_url: "linkedin.com",
      website: "twitter.com"
    },
    professional_background: {
      current_position: "Former CEO / Tech Investor",
      organization: "Independent Tech Advisory",
      years_of_experience: 15,
      industries: ["Internet & Web Services", "Software Development", "Data Science & Analytics"],
      skills: ["Large-scale Distributed Systems", "Machine Learning Platforms", "Executive Leadership", "Infrastructure Architecture"]
    },
    mentorship_details: {
      areas_of_expertise: ["High-throughput Infra Scaling", "Ad-tech Data Pipelines", "Navigating Hyper-growth Engineering Teams"],
      availability: ["Monday 10-12 AM"],
      preferred_mentorship_mode: "Online",
      languages: ["English", "Hindi"],
      mentorship_style: "Highly Technical & Analytical"
    },
    education: [
      {
        degree: "PhD in Computer Science",
        institution: "Stanford University",
        year: 2012
      },
      {
        degree: "B.Tech in Computer Science and Engineering",
        institution: "IIT Bombay",
        year: 2005
      }
    ],
    social_proof: {
      testimonials: ["Exceptional breakdown of database bottleneck patterns under consumer web scales."],
      rating: 4.9
    },
    metadata: { status: "active" }
  },
  {
    id: 24,
    name: "Katie Moussouris",
    gender: "Female",
    date_of_birth: "1975-02-14",
    location: "Seattle, Washington, United States",
    profile_picture_url: "https://randomuser.me/api/portraits/women/6.jpg",
    contact: {
      email: "katie@example.com",
      phone: "+1-206-555-0159",
      linkedin_url: "linkedin.com",
      website: "lyticssecurity.com"
    },
    professional_background: {
      current_position: "Founder & CEO",
      organization: "Luta Security",
      years_of_experience: 23,
      industries: ["Cybersecurity"],
      skills: ["Vulnerability Disclosure", "Bug Bounty Architecture", "Incident Response", "Penetration Testing", "GovTech Security"]
    },
    mentorship_details: {
      areas_of_expertise: ["Creating Defensible Bug Bounties", "Corporate Vulnerability Management", "Cybersecurity Policy"],
      availability: ["Wednesday 4-6 PM"],
      preferred_mentorship_mode: "Online",
      languages: ["English"],
      mentorship_style: "Pragmatic, Direct & High-Impact"
    },
    education: [
      {
        degree: "BS in Molecular Biology and Mathematics",
        institution: "Boston University",
        year: 1996
      }
    ],
    social_proof: {
      testimonials: ["The ultimate authority on vulnerability coordination. Avoided critical pipeline design traps with her advice."],
      rating: 5.0
    },
    metadata: { status: "active" }
  },
  {
    id: 25,
    name: "Vitalik Buterin",
    gender: "Male",
    date_of_birth: "1994-01-31",
    location: "Zug, Switzerland",
    profile_picture_url: "https://randomuser.me/api/portraits/men/10.jpg",
    contact: {
      email: "vitalik@example.com",
      phone: "+41-41-555-0122",
      linkedin_url: "linkedin.com",
      website: "https://ethereum.org"
    },
    professional_background: {
      current_position: "Co-Founder",
      organization: "Ethereum Foundation",
      years_of_experience: 12,
      industries: ["Blockchain & Cryptocurrency", "Internet & Web Services"],
      skills: ["Cryptographic Protocols", "Smart Contract Architecture", "Distributed Consensus", "Game Theory", "Rust/Go"]
    },
    mentorship_details: {
      areas_of_expertise: ["Layer 2 Scaling Solutions", "Proof of Stake Cryptoeconomics", "Decentralized Application Patterns"],
      availability: ["Sunday 10-11 AM"],
      preferred_mentorship_mode: "Online",
      languages: ["English", "Russian", "Chinese"],
      mentorship_style: "First-principles Abstract Thinking"
    },
    education: [
      {
        degree: "Honorary Doctorate",
        institution: "University of Basel",
        year: 2018
      }
    ],
    social_proof: {
      testimonials: ["Mind-bending clarity on cryptography mechanics and mechanistic design frameworks."],
      rating: 4.9
    },
    metadata: { status: "active" }
  },
  {
    id: 26,
    name: "Timnit Gebru",
    gender: "Female",
    date_of_birth: "1983-05-13",
    location: "Distributed, United States",
    profile_picture_url: "https://randomuser.me/api/portraits/women/7.jpg",
    contact: {
      email: "timnit@example.com",
      phone: "+1-650-555-0347",
      linkedin_url: "linkedin.com",
      website: "https://dairinstitute.org"
    },
    professional_background: {
      current_position: "Founder & Executive Director",
      organization: "Distributed AI Research Institute (DAIR)",
      years_of_experience: 14,
      industries: ["Artificial Intelligence/Machine Learning", "Data Science & Analytics"],
      skills: ["Computer Vision", "Large Language Model Auditing", "Data Curation Strategies", "Tech Equity Evaluation"]
    },
    mentorship_details: {
      areas_of_expertise: ["Ethical LLM Lifecycle Management", "Dataset Auditing Tools", "Independent Research Frameworks"],
      availability: ["Wednesday 1-3 PM"],
      preferred_mentorship_mode: "Online",
      languages: ["English", "Amharic"],
      mentorship_style: "Rigorous & Reformist"
    },
    education: [
      {
        degree: "PhD in Electrical Engineering",
        institution: "Stanford University",
        year: 2017
      },
      {
        degree: "MS in Electrical Engineering",
        institution: "Stanford University",
        year: 2008
      }
    ],
    social_proof: {
      testimonials: ["Invaluable clarity on structural documentation rules for model cards and dataset lineage."],
      rating: 4.8
    },
    metadata: { status: "active" }
  },
  {
    id: 27,
    name: "Marc Benioff",
    gender: "Male",
    date_of_birth: "1964-09-25",
    location: "San Francisco, California, United States",
    profile_picture_url: "https://randomuser.me/api/portraits/men/11.jpg",
    contact: {
      email: "mbenioff@example.com",
      phone: "+1-415-555-9001",
      linkedin_url: "linkedin.com",
      website: "salesforce.com"
    },
    professional_background: {
      current_position: "CEO & Co-Founder",
      organization: "Salesforce",
      years_of_experience: 37,
      industries: ["Cloud Computing", "IT Services", "Software Development"],
      skills: ["SaaS Business Architectures", "Multi-tenant Architecture", "Enterprise CRM Strategy", "Corporate Philanthropy"]
    },
    mentorship_details: {
      areas_of_expertise: ["SaaS GTM Frameworks", "Cloud Multi-tenancy Design Principles", "Scaling Tech for Enterprise Sales"],
      availability: ["Monday 8-9 AM"],
      preferred_mentorship_mode: "Online",
      languages: ["English"],
      mentorship_style: "Highly Strategic & Ecosystem-focused"
    },
    education: [
      {
        degree: "BS in Business Administration",
        institution: "University of Southern California",
        year: 1986
      }
    ],
    social_proof: {
      testimonials: ["Gave us the architectural pattern blueprint to migrate away from siloed on-prem database variants."],
      rating: 4.9
    },
    metadata: { status: "active" }
  },
  {
    id: 28,
    name: "Nergis Mavalvala",
    gender: "Female",
    date_of_birth: "1968-04-15",
    location: "Cambridge, Massachusetts, United States",
    profile_picture_url: "https://randomuser.me/api/portraits/women/5.jpg",
    contact: {
      email: "nergis.m@example.com",
      phone: "+1-617-555-4091",
      linkedin_url: "linkedin.com",
      website: "mit.edu"
    },
    professional_background: {
      current_position: "Dean, School of Science",
      organization: "MIT",
      years_of_experience: 26,
      industries: ["Quantum Computing", "Semiconductor & Electronics"],
      skills: ["Quantum Interferometry", "Laser Physics", "Optomechanics", "Precision Manufacturing Systems"]
    },
    mentorship_details: {
      areas_of_expertise: ["Quantum Error Mitigation in Hardware", "Advanced Laser Sensor Pipelines", "Lab-to-Market DeepTech Scaling"],
      availability: ["Tuesday 4-6 PM"],
      preferred_mentorship_mode: "Online",
      languages: ["English", "Urdu"],
      mentorship_style: "Academic, Precision-oriented & Encouraging"
    },
    education: [
      {
        degree: "PhD in Physics",
        institution: "MIT",
        year: 1997
      },
      {
        degree: "BA in Physics and Astronomy",
        institution: "Wellesley College",
        year: 1990
      }
    ],
    social_proof: {
      testimonials: ["Her mechanical logic validation framework completely fixed our laser hardware stability issues."],
      rating: 5.0
    },
    metadata: { status: "active" }
  },
  {
    id: 29,
    name: "Eugene Kaspersky",
    gender: "Male",
    date_of_birth: "1965-10-04",
    location: "London, United Kingdom",
    profile_picture_url: "https://randomuser.me/api/portraits/men/12.jpg",
    contact: {
      email: "eugene.k@example.com",
      phone: "+44-20-7946-0811",
      linkedin_url: "linkedin.com",
      website: "kaspersky.com"
    },
    professional_background: {
      current_position: "CEO",
      organization: "Kaspersky",
      years_of_experience: 34,
      industries: ["Cybersecurity", "IT Services"],
      skills: ["Malware Reverse Engineering", "Endpoint Detection Protocols", "Threat Intelligence Analysis", "Kernel Security Architecture"]
    },
    mentorship_details: {
      areas_of_expertise: ["Advanced Persistent Threat (APT) Countering", "Kernel-level Driver Hardening", "Global Threat Intel Networking"],
      availability: ["Thursday 2-4 PM"],
      preferred_mentorship_mode: "Online",
      languages: ["English", "Russian"],
      mentorship_style: "Deep Forensic Analysis & Investigative"
    },
    education: [
      {
        degree: "Degree in Mathematical Engineering & Computer Technology",
        institution: "The Institute of Cryptography, Telecommunications and Computer Science",
        year: 1987
      }
    ],
    social_proof: {
      testimonials: ["His insights into firmware-level malicious behavior helped our dev team build bulletproof agent monitors."],
      rating: 4.7
    },
    metadata: { status: "active" }
  },
  {
    id: 30,
    name: "Elizabeth Churchill",
    gender: "Female",
    date_of_birth: "1967-08-11",
    location: "Mountain View, California, United States",
    profile_picture_url: "https://randomuser.me/api/portraits/women/6.jpg",
    contact: {
      email: "echurchill@example.com",
      phone: "+1-650-555-8321",
      linkedin_url: "linkedin.com",
      website: "google.com"
    },
    professional_background: {
      current_position: "Director of User Experience",
      organization: "Google",
      years_of_experience: 25,
      industries: ["Internet & Web Services", "Software Development"],
      skills: ["Human-Computer Interaction (HCI)", "User Research Frameworks", "Design Systems Engineering", "Prototyping Tools"]
    },
    mentorship_details: {
      areas_of_expertise: ["Developer Tooling UI/UX Patterns", "HCI Testing for Frontend Developers", "Cross-platform Framework Usability"],
      availability: ["Monday 3-5 PM"],
      preferred_mentorship_mode: "Online",
      languages: ["English"],
      mentorship_style: "Empathy-driven & Human-centric"
    },
    education: [
      {
        degree: "PhD in Cognitive Science",
        institution: "University of Cambridge",
        year: 1993
      },
      {
        degree: "MSc in Knowledge-Based Systems",
        institution: "University of Sussex",
        year: 1990
      }
    ],
    social_proof: {
      testimonials: ["Transformative session detailing why developers build poor workflows and how to remedy them using robust HCI."],
      rating: 4.9
    },
    metadata: { status: "active" }
  },
  {
    id: 31,
    name: "Palmer Luckey",
    gender: "Male",
    date_of_birth: "1992-09-19",
    location: "Costa Mesa, California, United States",
    profile_picture_url: "https://randomuser.me/api/portraits/men/13.jpg",
    contact: {
      email: "palmer@example.com",
      phone: "+1-949-555-0172",
      linkedin_url: "linkedin.com",
      website: "anduril.com"
    },
    professional_background: {
      current_position: "Founder",
      organization: "Anduril Industries",
      years_of_experience: 14,
      industries: ["Virtual/Augmented Reality", "Robotics", "Semiconductor & Electronics"],
      skills: ["Optoelectronic System Integration", "Embedded Sensor Meshes", "Hardware Prototyping", "Autonomous Drone Swarms"]
    },
    mentorship_details: {
      areas_of_expertise: ["Low-latency Hardware Graphics Rendering", "Real-time Spatial Mapping Sensors", "Hardtech Defense Engineering"],
      availability: ["Saturday 1-3 PM"],
      preferred_mentorship_mode: "Online",
      languages: ["English"],
      mentorship_style: "Disruptive & Ultra Hardware-focused"
    },
    education: [
      {
        degree: "High School Diploma / Dropped out of Journalism",
        institution: "California State University, Long Beach",
        year: 2011
      }
    ],
    social_proof: {
      testimonials: ["Unconventional advice on optical distortion matrices that bypasses modern expensive simulation software issues."],
      rating: 4.8
    },
    metadata: { status: "active" }
  },
  {
    id: 32,
    name: "Fei-Fei Li",
    gender: "Female",
    date_of_birth: "1976-09-13",
    location: "Stanford, California, United States",
    profile_picture_url: "https://randomuser.me/api/portraits/women/8.jpg",
    contact: {
      email: "feifeili@example.com",
      phone: "+1-650-555-0988",
      linkedin_url: "linkedin.com",
      website: "stanford.edu"
    },
    professional_background: {
      current_position: "Co-Director, Human-Centered AI Institute",
      organization: "Stanford University",
      years_of_experience: 21,
      industries: ["Artificial Intelligence/Machine Learning", "Data Science & Analytics"],
      skills: ["Computer Vision Models", "Large Dataset Cleansing", "Ambient Intelligence in Healthcare", "Cognitive Neuroscience Integration"]
    },
    mentorship_details: {
      areas_of_expertise: ["Scale Image Pattern Extraction", "Human-Centered ML Frameworks", "Next-gen Visual Transformers"],
      availability: ["Friday 9-11 AM"],
      preferred_mentorship_mode: "Online",
      languages: ["English", "Mandarin"],
      mentorship_style: "Academic, Rigorous & Structurally Grounded"
    },
    education: [
      {
        degree: "PhD in Electrical Engineering",
        institution: "California Institute of Technology",
        year: 2005
      },
      {
        degree: "AB in Physics",
        institution: "Princeton University",
        year: 1999
      }
    ],
    social_proof: {
      testimonials: ["Her structured approaches on foundational visual models fundamentally redirected our platform layout designs."],
      rating: 5.0
    },
    metadata: { status: "active" }
  },
  {
    id: 33,
    name: "Satya Nadella",
    gender: "Male",
    date_of_birth: "1967-08-19",
    location: "Redmond, Washington, United States",
    profile_picture_url: "https://randomuser.me/api/portraits/men/14.jpg",
    contact: {
      email: "satya.n@example.com",
      phone: "+1-425-555-0100",
      linkedin_url: "linkedin.com",
      website: "microsoft.com"
    },
    professional_background: {
      current_position: "Chairman & CEO",
      organization: "Microsoft",
      years_of_experience: 32,
      industries: ["Cloud Computing", "Software Development", "Artificial Intelligence/Machine Learning"],
      skills: ["Azure Core Infrastructure", "Enterprise Cloud Strategy", "DevOps Pipelines at Global Scale", "AI APIs Integration Models"]
    },
    mentorship_details: {
      areas_of_expertise: ["Hyperscale Data Center Orchestration", "SaaS Platform Monetization", "Enterprise Developer Adoption Ecosystems"],
      availability: ["Sunday 8-9 AM"],
      preferred_mentorship_mode: "Online",
      languages: ["English", "Telugu"],
      mentorship_style: "Empathetic, Growth-minded & Highly Strategic"
    },
    education: [
      {
        degree: "MS in Computer Science",
        institution: "University of Wisconsin–Milwaukee",
        year: 1990
      },
      {
        degree: "B.E. in Electrical Engineering",
        institution: "Manipal Institute of Technology",
        year: 1988
      }
    ],
    social_proof: {
      testimonials: ["Brilliant high-level synthesis on optimizing ecosystem cloud API abstractions to avoid multitenant choke points."],
      rating: 5.0
    },
    metadata: { status: "active" }
  },
  {
    id: 34,
    name: "Gavin Wood",
    gender: "Male",
    date_of_birth: "1980-04-23",
    location: "London, United Kingdom",
    profile_picture_url: "https://randomuser.me/api/portraits/men/15.jpg",
    contact: {
      email: "gavin@example.com",
      phone: "+44-20-7946-0567",
      linkedin_url: "linkedin.com",
      website: "parity.io"
    },
    professional_background: {
      current_position: "Founder",
      organization: "Parity Technologies / Polkadot",
      years_of_experience: 19,
      industries: ["Blockchain & Cryptocurrency", "Software Development"],
      skills: ["Solidity Language Creation", "Substrate Blockchain Framework", "Rust Engineering", "Asynchronous P2P Cryptography"]
    },
    mentorship_details: {
      areas_of_expertise: ["Cross-Chain Messaging (XCM)", "WASM Execution runtimes", "Custom Crypto State Machine Construction in Rust"],
      availability: ["Wednesday 8-10 PM"],
      preferred_mentorship_mode: "Online",
      languages: ["English"],
      mentorship_style: "Lower-level Compiler & Protocol Dense"
    },
    education: [
      {
        degree: "PhD in Computer Science",
        institution: "University of York",
        year: 2005
      }
    ],
    social_proof: {
      testimonials: ["The master of building secure custom runtime layers. Solved our memory leaks on localized dev nodes."],
      rating: 4.9
    },
    metadata: { status: "active" }
  },
  {
    id: 35,
    name: "Javed Karim",
    gender: "Male",
    date_of_birth: "1979-10-28",
    location: "Palo Alto, California, United States",
    profile_picture_url: "https://randomuser.me/api/portraits/men/16.jpg",
    contact: {
      email: "javed@example.com",
      phone: "+1-650-555-0109",
      linkedin_url: "linkedin.com",
      website: "yventures.com"
    },
    professional_background: {
      current_position: "Co-Founder / Venture Investor",
      organization: "Y Ventures",
      years_of_experience: 24,
      industries: ["Internet & Web Services", "Software Development"],
      skills: ["Real-time Video Transcoding Pipelines", "Relational Database Performance Scaling", "Early Product Architecture Tuning"]
    },
    mentorship_details: {
      areas_of_expertise: ["Building High-Load Asynchronous Media Upload Layers", "Early Anti-Fraud Real-time Detection Systems"],
      availability: ["Saturday 4-6 PM"],
      preferred_mentorship_mode: "Online",
      languages: ["English", "German"],
      mentorship_style: "Foundational, Core Architectural Pragmatism"
    },
    education: [
      {
        degree: "MS in Computer Science",
        institution: "Stanford University",
        year: 2007
      },
      {
        degree: "BS in Computer Science",
        institution: "University of Illinois Urbana-Champaign",
        year: 2004
      }
    ],
    social_proof: {
      testimonials: ["Gave invaluable structural tips on separating media ingest pools from analytical application logic bases."],
      rating: 4.8
    },
    metadata: { status: "active" }
  },
  {
    id: 36,
    name: "Chris Lattner",
    gender: "Male",
    date_of_birth: "1978-12-04",
    location: "Bay Area, California, United States",
    profile_picture_url: "https://randomuser.me/api/portraits/men/17.jpg",
    contact: {
      email: "clattner@example.com",
      phone: "+1-408-555-0111",
      linkedin_url: "linkedin.com",
      website: "modular.com"
    },
    professional_background: {
      current_position: "CEO & Co-Founder",
      organization: "Modular",
      years_of_experience: 23,
      industries: ["Software Development", "Artificial Intelligence/Machine Learning", "Semiconductor & Electronics"],
      skills: ["LLVM Compiler Infrastructure", "Swift Language Architecture", "Mojo Programming Design", "MLIR Engine Frameworks"]
    },
    mentorship_details: {
      areas_of_expertise: ["Compiler Tuning for Heterogeneous Hardware Nodes", "Building Custom System Software Libraries", "AI Compute Accelerators Optimization"],
      availability: ["Tuesday 7-9 AM"],
      preferred_mentorship_mode: "Online",
      languages: ["English"],
      mentorship_style: "Deep Compiler Logic & High Execution Rigor"
    },
    education: [
      {
        degree: "PhD in Computer Science",
        institution: "University of Illinois Urbana-Champaign",
        year: 2005
      },
      {
        degree: "BS in Computer Science",
        institution: "University of Portland",
        year: 2000
      }
    ],
    social_proof: {
      testimonials: ["Incredibly deep logic mechanics on tensor compute optimizations over silicon kernels."],
      rating: 5.0
    },
    metadata: { status: "active" }
  },
  {
    id: 37,
    name: "Radia Perlman",
    gender: "Female",
    date_of_birth: "1951-12-18",
    location: "Seattle, Washington, United States",
    profile_picture_url: "https://randomuser.me/api/portraits/women/8.jpg",
    contact: {
      email: "radia@example.com",
      phone: "+1-206-555-3982",
      linkedin_url: "linkedin.com",
      website: "dell.com"
    },
    professional_background: {
      current_position: "Fellow",
      organization: "Dell EMC",
      years_of_experience: 40,
      industries: ["Internet & Web Services", "Cybersecurity", "IT Services"],
      skills: ["Spanning Tree Protocol (STP)", "Network Routing Protocols (IS-IS)", "Link-state Routing Architectures", "Encrypted Data Storage"]
    },
    mentorship_details: {
      areas_of_expertise: ["Robust Layer 2 & Layer 3 Topology Designs", "Cryptographic Network Protocols Implementation Risks"],
      availability: ["Wednesday 10-12 AM"],
      preferred_mentorship_mode: "Online",
      languages: ["English"],
      mentorship_style: "Historical Engineering Grounded & Fundamental"
    },
    education: [
      {
        degree: "PhD in Computer Science",
        institution: "MIT",
        year: 1988
      },
      {
        degree: "SB in Mathematics",
        institution: "MIT",
        year: 1976
      }
    ],
    social_proof: {
      testimonials: ["Pioneer of network protocols. Essential knowledge on routing topology complexities."],
      rating: 5.0
    },
    metadata: { status: "active" }
  }
];
export default mentors;