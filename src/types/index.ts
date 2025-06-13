export interface Project {
    id: number
    title: string
    description: string
    image: string
    technologies: string[]
    liveUrl?: string
    githubUrl?: string
    featured: boolean
  }
  
  export interface Experience {
    id: number
    company: string
    position: string
    duration: string
    description: string[]
    technologies: string[]
  }
  
  export interface Skill {
    name: string
    level: number
    category: 'frontend' | 'backend' | 'tools' | 'design'
  }
  
  export interface NavItem {
    name: string
    href: string
    icon?: React.ReactNode
  }