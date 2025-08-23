// Forum categories mock data
export const forumCategories = [
    "General Discussion",
    "Feature Requests",
    "Bug Reports",
    "Technical Support",
    "Community Events",
    "Announcements",
    "Feedback",
    "Development",
    "UI/UX Design",
    "Performance",
    "Security",
    "Mobile",
    "Desktop",
    "API",
    "Integrations",
    "Gaming",
    "Streaming",
    "Content Creation",
    "Tutorials",
    "Showcase",
    "Off Topic",
    "Marketplace",
    "Jobs & Careers",
    "Beta Testing",
    "Documentation"
  ]
  
  // Optional: Add category metadata for future enhancements
  export interface ForumCategory {
    id: string
    name: string
    description?: string
    color?: string
    icon?: string
  }
  
  export const forumCategoriesWithMetadata: ForumCategory[] = [
    {
      id: "general",
      name: "General Discussion",
      description: "Open discussions about anything and everything",
      color: "#8B5CF6"
    },
    {
      id: "features",
      name: "Feature Requests",
      description: "Suggest new features and improvements",
      color: "#10B981"
    },
    {
      id: "bugs",
      name: "Bug Reports",
      description: "Report issues and bugs you've encountered",
      color: "#EF4444"
    },
    {
      id: "support",
      name: "Technical Support",
      description: "Get help with technical issues",
      color: "#F59E0B"
    },
    {
      id: "events",
      name: "Community Events",
      description: "Community events and meetups",
      color: "#EC4899"
    },
    {
      id: "announcements",
      name: "Announcements",
      description: "Official announcements and updates",
      color: "#3B82F6"
    },
    {
      id: "feedback",
      name: "Feedback",
      description: "Share your feedback and suggestions",
      color: "#6366F1"
    },
    {
      id: "development",
      name: "Development",
      description: "Development discussions and tips",
      color: "#059669"
    },
    {
      id: "design",
      name: "UI/UX Design",
      description: "Design discussions and resources",
      color: "#DC2626"
    },
    {
      id: "performance",
      name: "Performance",
      description: "Performance optimization discussions",
      color: "#7C2D12"
    }
  ]
  
  // Helper functions
  export const getCategoryById = (id: string): ForumCategory | undefined => {
    return forumCategoriesWithMetadata.find(category => category.id === id)
  }
  
  export const getCategoryNames = (): string[] => {
    return forumCategories
  }
  
  export const searchCategories = (query: string): string[] => {
    if (!query) return forumCategories
    return forumCategories.filter(category =>
      category.toLowerCase().includes(query.toLowerCase())
    )
  }