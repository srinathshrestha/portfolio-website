export interface ProjectGalleryImage {
  url: string
  caption?: string
}

export interface RelatedProject {
  slug: string
  title: string
  category: string
  image: string
}

export interface Project {
  id: number
  slug: string
  title: string
  category: string
  shortDescription: string
  description: string[]
  features: string[]
  technologies: string[]
  coverImage: string
  thumbnailImage: string
  gallery?: ProjectGalleryImage[]
  client?: string
  timeline: string
  role: string
  liveUrl?: string
  githubUrl?: string
  relatedProjects?: RelatedProject[]
}

const projects: Project[] = [
  {
    id: 1,
    slug: "bona-collaborative-media",
    title: "Bona - Collaborative Media Platform",
    category: "Full Stack Web Application",
    shortDescription: "A full-stack web application combining real-time chat with cloud-based media storage.",
    description: [
      "Bona is a comprehensive collaborative media platform designed for teams to upload, view, and discuss media files in real-time. The platform combines file management with communication tools to create a seamless collaborative workspace.",
      "Built with modern web technologies, the application features a robust architecture that supports real-time collaboration through WebSocket connections and secure cloud storage using AWS S3 for scalable file management.",
      "The platform includes version tracking capabilities that allow teams to visualize project evolution timelines, making it ideal for creative teams, developers, and content creators who need to manage and collaborate on media-heavy projects.",
    ],
    features: [
      "Real-time collaborative workspace for media file management",
      "Version tracking system for project evolution timeline visualization", 
      "AWS S3 integration for scalable file storage with secure access controls",
      "Real-time chat and discussion features for team collaboration",
      "Responsive design with smooth animations using Framer Motion",
      "Secure user authentication and access management",
    ],
    technologies: ["Next.js", "shadcn/ui", "Framer Motion", "Neon DB", "WebSocket", "AWS S3", "Vercel"],
    coverImage: "/placeholder.jpg",
    thumbnailImage: "/placeholder.jpg",
    gallery: [
      { url: "/placeholder.jpg", caption: "Main Dashboard with Media Gallery" },
      { url: "/placeholder.jpg", caption: "Real-time Chat Interface" },
      { url: "/placeholder.jpg", caption: "Version Tracking Timeline" },
      { url: "/placeholder.jpg", caption: "File Upload and Management" },
    ],
    timeline: "4 months (2024)",
    role: "Full Stack Developer",
    githubUrl: "https://github.com/srinathshrestha9890",
    relatedProjects: [
      {
        slug: "cartmate-shopping-app",
        title: "CartMate - Shopping List App",
        category: "Collaborative Application",
        image: "/placeholder.jpg",
      },
      {
        slug: "entwined-ai-companion",
        title: "Entwined - AI Companion",
        category: "AI Application",
        image: "/placeholder.jpg",
      },
    ],
  },
  {
    id: 2,
    slug: "cartmate-shopping-app",
    title: "CartMate - Collaborative Shopping List App",
    category: "Collaborative Application",
    shortDescription: "Real-time collaborative shopping application with secure multi-user editing.",
    description: [
      "CartMate is a sophisticated real-time collaborative shopping list application that enables multiple users to create, edit, and manage shopping lists together in real-time. The platform addresses the common problem of coordinating shopping tasks among family members, roommates, or team members.",
      "The application features a robust authentication system ensuring data privacy and secure access, while WebSocket technology enables seamless real-time collaboration. Users can see changes instantly as others add or modify items on shared lists.",
      "Beyond basic list management, CartMate includes a contextual chat system that allows users to discuss specific items, ask questions, or provide additional context about shopping requirements, making it a complete collaborative shopping solution.",
    ],
    features: [
      "Secure multi-user platform for real-time list creation and editing",
      "Real-time collaboration using WebSocket technology",
      "Contextual chat system for item discussions and communication",
      "Robust authentication system ensuring data privacy and secure access",
      "Responsive design with intuitive user interface",
      "Real-time notifications for list updates and changes",
    ],
    technologies: ["Next.js", "shadcn/ui", "Framer Motion", "Neon DB", "WebSocket", "Vercel"],
    coverImage: "/placeholder.jpg",
    thumbnailImage: "/placeholder.jpg",
    gallery: [
      { url: "/placeholder.jpg", caption: "Collaborative Shopping Lists" },
      { url: "/placeholder.jpg", caption: "Real-time Item Addition" },
      { url: "/placeholder.jpg", caption: "Contextual Chat Interface" },
      { url: "/placeholder.jpg", caption: "User Authentication Dashboard" },
    ],
    timeline: "3 months (2024)",
    role: "Full Stack Developer",
    githubUrl: "https://github.com/srinathshrestha9890",
    relatedProjects: [
      {
        slug: "bona-collaborative-media",
        title: "Bona - Collaborative Media Platform",
        category: "Full Stack Web Application",
        image: "/placeholder.jpg",
      },
      {
        slug: "entwined-ai-companion",
        title: "Entwined - AI Companion",
        category: "AI Application",
        image: "/placeholder.jpg",
      },
    ],
  },
  {
    id: 3,
    slug: "entwined-ai-companion",
    title: "Entwined - AI Companion Application",
    category: "AI Application",
    shortDescription: "Advanced AI-powered companion app with psychological analysis and persistent memory.",
    description: [
      "Entwined is a cutting-edge AI companion application that goes beyond simple chatbots by incorporating psychological profiling and persistent memory systems. The application analyzes user behavior patterns to create a personalized and evolving interaction experience.",
      "Using the Grok API, the application implements a large-scale memory architecture that maintains context across conversations, allowing for meaningful, long-term relationships between users and their AI companions. This creates a more natural and engaging user experience.",
      "The application features an adaptive personality engine that evolves based on user interactions, complemented by smooth animations and a responsive interface that makes the AI feel more lifelike and engaging.",
    ],
    features: [
      "Psychological profiling system analyzing user behavior patterns",
      "Large-scale memory architecture for contextual conversations using Grok API",
      "Adaptive personality engine evolving based on user interactions",
      "Smooth animations and responsive design using Framer Motion",
      "Persistent conversation history and context maintenance",
      "Advanced natural language processing and understanding",
    ],
    technologies: ["Next.js", "Grok API", "shadcn/ui", "Framer Motion", "Neon DB", "Vercel"],
    coverImage: "/placeholder.jpg",
    thumbnailImage: "/placeholder.jpg",
    gallery: [
      { url: "/placeholder.jpg", caption: "AI Companion Chat Interface" },
      { url: "/placeholder.jpg", caption: "Psychological Profile Dashboard" },
      { url: "/placeholder.jpg", caption: "Memory Timeline Visualization" },
      { url: "/placeholder.jpg", caption: "Adaptive Personality Settings" },
    ],
    timeline: "5 months (2024)",
    role: "AI Application Developer",
    githubUrl: "https://github.com/srinathshrestha9890",
    relatedProjects: [
      {
        slug: "bona-collaborative-media",
        title: "Bona - Collaborative Media Platform",
        category: "Full Stack Web Application",
        image: "/placeholder.jpg",
      },
      {
        slug: "cartmate-shopping-app",
        title: "CartMate - Shopping List App",
        category: "Collaborative Application",
        image: "/placeholder.jpg",
      },
    ],
  },
]

export { projects }

// Add these functions after the projects array export

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getRelatedProjects(currentSlug: string, limit = 2): RelatedProject[] {
  const currentProject = getProjectBySlug(currentSlug)
  if (!currentProject || !currentProject.relatedProjects) {
    // If no related projects defined, return random projects
    return projects
      .filter((project) => project.slug !== currentSlug)
      .slice(0, limit)
      .map((project) => ({
        slug: project.slug,
        title: project.title,
        category: project.category,
        image: project.thumbnailImage,
      }))
  }

  return currentProject.relatedProjects.slice(0, limit)
}
