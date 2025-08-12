const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  // Clear existing data
  await prisma.skill.deleteMany()
  await prisma.project.deleteMany()
  await prisma.experience.deleteMany()
  await prisma.personalInfo.deleteMany()

  // Seed Skills
  const skills = [
    // Programming Languages
    { category: 'Programming Languages', name: 'Java 8+', icon: '☕' },
    { category: 'Programming Languages', name: 'Python', icon: '🐍' },
    { category: 'Programming Languages', name: 'JavaScript', icon: '📜' },
    { category: 'Programming Languages', name: 'TypeScript', icon: '📘' },
    { category: 'Programming Languages', name: 'HTML5', icon: '🌐' },
    { category: 'Programming Languages', name: 'CSS3', icon: '🎨' },
    { category: 'Programming Languages', name: 'SQL', icon: '🗄️' },

    // Frontend Frameworks
    { category: 'Frontend Frameworks', name: 'React', icon: '⚛️' },
    { category: 'Frontend Frameworks', name: 'Next.js', icon: '▲' },
    { category: 'Frontend Frameworks', name: 'Tailwind CSS', icon: '🎨' },
    { category: 'Frontend Frameworks', name: 'Liquid (Shopify)', icon: '💧' },
    { category: 'Frontend Frameworks', name: 'Responsive Design', icon: '📱' },

    // Backend Frameworks
    { category: 'Backend Frameworks', name: 'Spring Boot', icon: '🍃' },
    { category: 'Backend Frameworks', name: 'Hibernate', icon: '💤' },
    { category: 'Backend Frameworks', name: 'Node.js', icon: '📗' },
    { category: 'Backend Frameworks', name: 'Express.js', icon: '🚂' },
    { category: 'Backend Frameworks', name: 'RESTful APIs', icon: '🔗' },
    { category: 'Backend Frameworks', name: 'Microservices', icon: '🔧' },

    // Databases
    { category: 'Databases', name: 'PostgreSQL', icon: '🐘' },
    { category: 'Databases', name: 'MySQL', icon: '🐬' },
    { category: 'Databases', name: 'Oracle DB', icon: '🏛️' },
    { category: 'Databases', name: 'ElasticSearch', icon: '🔍' },
    { category: 'Databases', name: 'Database Design', icon: '📊' },

    // Cloud & DevOps
    { category: 'Cloud & DevOps', name: 'AWS Lambda', icon: '☁️' },
    { category: 'Cloud & DevOps', name: 'API Gateway', icon: '🚪' },
    { category: 'Cloud & DevOps', name: 'S3', icon: '📦' },
    { category: 'Cloud & DevOps', name: 'IAM', icon: '🔐' },
    { category: 'Cloud & DevOps', name: 'Docker', icon: '🐳' },
    { category: 'Cloud & DevOps', name: 'Kubernetes', icon: '⚙️' },
    { category: 'Cloud & DevOps', name: 'Git', icon: '📂' },
    { category: 'Cloud & DevOps', name: 'Jenkins', icon: '🔨' },
    { category: 'Cloud & DevOps', name: 'CI/CD', icon: '🔄' },

    // Security & APIs
    { category: 'Security & APIs', name: 'OAuth2', icon: '🔑' },
    { category: 'Security & APIs', name: 'JWT', icon: '🎫' },
    { category: 'Security & APIs', name: 'Tokenisation', icon: '🔒' },
    { category: 'Security & APIs', name: 'API Integration', icon: '🔌' },
    { category: 'Security & APIs', name: 'Third-party APIs', icon: '🌐' },

    // E-commerce & CMS
    { category: 'E-commerce & CMS', name: 'Shopify', icon: '🛒' },
    { category: 'E-commerce & CMS', name: 'Payment Integration', icon: '💳' },
    { category: 'E-commerce & CMS', name: 'Shipping Logic', icon: '📦' },
    { category: 'E-commerce & CMS', name: 'Theme Customization', icon: '🎨' },

    // Development Practices
    { category: 'Development Practices', name: 'Agile (Scrum)', icon: '🏃' },
    { category: 'Development Practices', name: 'TDD', icon: '🧪' },
    { category: 'Development Practices', name: 'JUnit', icon: '✅' },
    { category: 'Development Practices', name: 'Integration Testing', icon: '🔗' },
    { category: 'Development Practices', name: 'Code Reviews', icon: '👀' },
    { category: 'Development Practices', name: 'Clean Architecture', icon: '🏗️' }
  ]

  await prisma.skill.createMany({
    data: skills
  })

  // Seed Projects
  const projects = [
    {
      title: 'gintuanatbp.com',
      description: 'Delivered a complete Shopify e-commerce site with payment/shipping logic, theme customisation, and responsive UI using Liquid, HTML, CSS. Integrated secure third-party APIs and configured back-end workflows.',
      image: '/gintuan-homepage.jpg',
      liveUrl: 'https://gintuanatbp.com',
      githubUrl: null,
      technologies: ['Shopify', 'Liquid', 'HTML5', 'CSS3', 'JavaScript', 'Third-party APIs'],
      featured: true
    },
    {
      title: 'Enterprise API Orchestration (ING)',
      description: 'Built modular Java orchestration engine integrating multi-API workflows; improved throughput by 30%. Applied secure coding, validation, and logging standards.',
      image: '/window.svg',
      liveUrl: null,
      githubUrl: null,
      technologies: ['Java', 'Spring Boot', 'RESTful APIs', 'Microservices', 'OAuth2'],
      featured: true
    },
    {
      title: 'ElasticSearch Migration Tool (IBM)',
      description: 'Developed multithreaded Java migration tool for 16M+ documents. Enhanced traceability and performance with custom validation and logging.',
      image: '/file.svg',
      liveUrl: null,
      githubUrl: null,
      technologies: ['Java', 'ElasticSearch', 'Multithreading', 'Performance Optimization'],
      featured: true
    }
  ]

  await prisma.project.createMany({
    data: projects
  })

  // Seed Experience
  const experiences = [
    {
      jobTitle: 'Freelance Full Stack Developer',
      company: 'Self-Employed',
      location: 'Melbourne, VIC',
      startDate: 'Mar 2025',
      endDate: null,
      current: true,
      achievements: [
        'Delivered a Shopify e-commerce site, implementing payment/shipping logic, theme customisation, and responsive UI using Liquid, HTML, CSS. (gintuanatbp.com)',
        'Integrated secure third-party APIs and configured back-end workflows.',
        'Engaged directly with the client to gather requirements and deliver training documentation.',
        'Provide on-going IT support.'
      ]
    },
    {
      jobTitle: 'Food Service Assistant',
      company: 'Regis Aged Care Pty Ltd.',
      location: 'Melbourne, VIC',
      startDate: 'Mar 2023',
      endDate: null,
      current: true,
      achievements: [
        'Applied compliance-driven processes in aged care operations, mirroring secure engineering discipline.',
        'Demonstrated precision, collaboration, and adaptability in high-stakes environments.'
      ]
    },
    {
      jobTitle: 'Java Engineer',
      company: 'ING Business Shared Services, Philippines',
      location: 'Philippines',
      startDate: 'Nov 2021',
      endDate: 'Oct 2022',
      current: false,
      achievements: [
        'Engineered and optimised Spring Boot APIs, improving customer onboarding throughput by 30%.',
        'Designed secure, reusable API layers implementing validation, exception handling, and encryption.',
        'Collaborated in Agile sprints, led backlog grooming, and mentored junior engineers.'
      ]
    },
    {
      jobTitle: 'Software Engineer',
      company: 'Amdocs Philippines Inc.',
      location: 'Philippines',
      startDate: 'Jan 2019',
      endDate: 'Oct 2021',
      current: false,
      achievements: [
        'Delivered Java-based backend services for high-volume telecom platforms.',
        'Designed relational data models, optimised large-scale MySQL transactions, and built integration APIs.',
        'Reduced release cycles via Jenkins-based CI/CD pipelines and automated deployment scripts.'
      ]
    },
    {
      jobTitle: 'Advanced Programming Specialist',
      company: 'IBM Solutions Delivery Inc.',
      location: 'Philippines',
      startDate: 'Mar 2014',
      endDate: 'Dec 2018',
      current: false,
      achievements: [
        'Developed Java ingestion and transformation tools supporting enterprise platforms.',
        'Built multithreaded migration utility for 16M+ records to ElasticSearch, improving search performance by 40%.',
        'Provided production support and collaborated with global teams to deliver compliant upgrades.'
      ]
    }
  ]

  await prisma.experience.createMany({
    data: experiences
  })

  // Seed Personal Info
  await prisma.personalInfo.create({
    data: {
      name: 'Lewis Perez',
      title: 'Senior Software Engineer',
      summary: 'Senior Software Engineer with 8+ years of experience in backend and full-stack development across healthcare, banking, and telecom domains. Skilled in Java, Python, PostgreSQL, and AWS, with proven success delivering secure, scalable microservices, RESTful APIs, and cloud-native solutions.',
      email: 'lewis.perez999@gmail.com',
      phone: '+61 468 863 883',
      location: 'Melbourne, VIC',
      linkedin: 'https://linkedin.com/in/lewis-perez-dev',
      github: 'https://github.com/lewisperez999'
    }
  })

  console.log('✅ Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
