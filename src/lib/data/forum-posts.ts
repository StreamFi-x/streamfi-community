export interface ForumPost {
    id: string
    title: string
    content: string
    author: {
      name: string
      username: string
      avatar?: string
    }
    timestamp: string
    upvotes: number
    downvotes: number
    commentCount: number
    categories: string[]
    isPinned?: boolean
    createdAt?: Date
  }
  
  export const forumPosts: ForumPost[] = [
    {
      id: "1",
      title: "What are some of the tool streamfi should have?",
      content:
        "Lorem ipsum dolor sit amet consectetur. Viverra placerat amet diam quam. Fringilla quam nisl commodo vel. Enim mauris maecenas....",
      author: {
        name: "Chidimma Cassandra",
        username: "chidimma",
        avatar: "/Ellipse 11.png",
      },
      timestamp: "25 May, 2025",
      upvotes: 12,
      downvotes: 2,
      commentCount: 105,
      categories: ["STREAMFI", "WEB3 DISCUSSION"],
      isPinned: false,
      createdAt: new Date("2025-05-25"),
    },
    {
      id: "2",
      title: "Best practices for blockchain streaming",
      content:
        "Lorem ipsum dolor sit amet consectetur. Viverra placerat amet diam quam. Fringilla quam nisl commodo vel. Enim mauris maecenas....",
      author: {
        name: "Chidimma Cassandra",
        username: "chidimma",
        avatar: "/Ellipse 11.png",
      },
      timestamp: "25 May, 2025",
      upvotes: 8,
      downvotes: 1,
      commentCount: 67,
      categories: ["BLOCKCHAIN", "ETHEREUM"],
      isPinned: true,
      createdAt: new Date("2025-05-25"),
    },
    {
      id: "3",
      title: "How to integrate Web3 with streaming platforms",
      content:
        "Lorem ipsum dolor sit amet consectetur. Viverra placerat amet diam quam. Fringilla quam nisl commodo vel. Enim mauris maecenas....",
      author: {
        name: "Alex Thompson",
        username: "alexthompson",
        avatar: "/Ellipse 11.png",
      },
      timestamp: "24 May, 2025",
      upvotes: 15,
      downvotes: 0,
      commentCount: 89,
      categories: ["WEB 3.0", "STARNET"],
      isPinned: false,
      createdAt: new Date("2025-05-24"),
    },
    {
      id: "4",
      title: "Setting up OBS Studio for Web3 streaming",
      content:
        "Lorem ipsum dolor sit amet consectetur. Viverra placerat amet diam quam. Fringilla quam nisl commodo vel. Enim mauris maecenas....",
      author: {
        name: "Sarah Johnson",
        username: "sarahj",
        avatar: "/Ellipse 11.png",
      },
      timestamp: "24 May, 2025",
      upvotes: 22,
      downvotes: 3,
      commentCount: 134,
      categories: ["STREAMFI", "PROOF OF WORK"],
      isPinned: true,
      createdAt: new Date("2025-05-24"),
    },
    {
      id: "5",
      title: "Understanding Bitcoin integration in streaming",
      content:
        "Lorem ipsum dolor sit amet consectetur. Viverra placerat amet diam quam. Fringilla quam nisl commodo vel. Enim mauris maecenas....",
      author: {
        name: "Mike Chen",
        username: "mikechen",
        avatar: "/Ellipse 11.png",
      },
      timestamp: "23 May, 2025",
      upvotes: 18,
      downvotes: 2,
      commentCount: 76,
      categories: ["BITCOIN", "WEB3 DISCUSSION"],
      isPinned: false,
      createdAt: new Date("2025-05-23"),
    },
    {
      id: "6",
      title: "Ethereum smart contracts for streamers",
      content:
        "Lorem ipsum dolor sit amet consectetur. Viverra placerat amet diam quam. Fringilla quam nisl commodo vel. Enim mauris maecenas....",
      author: {
        name: "Emily Davis",
        username: "emilyd",
        avatar: "/Ellipse 11.png",
      },
      timestamp: "23 May, 2025",
      upvotes: 31,
      downvotes: 4,
      commentCount: 156,
      categories: ["ETHEREUM", "BLOCKCHAIN"],
      isPinned: false,
      createdAt: new Date("2025-05-23"),
    },
    {
      id: "7",
      title: "Community guidelines for Web3 discussions",
      content:
        "Lorem ipsum dolor sit amet consectetur. Viverra placerat amet diam quam. Fringilla quam nisl commodo vel. Enim mauris maecenas....",
      author: {
        name: "David Wilson",
        username: "davidw",
        avatar: "/Ellipse 11.png",
      },
      timestamp: "22 May, 2025",
      upvotes: 9,
      downvotes: 1,
      commentCount: 43,
      categories: ["WEB 3.0", "STREAMFI"],
      isPinned: true,
      createdAt: new Date("2025-05-22"),
    },
    {
      id: "8",
      title: "Cardano ecosystem for content creators",
      content:
        "Lorem ipsum dolor sit amet consectetur. Viverra placerat amet diam quam. Fringilla quam nisl commodo vel. Enim mauris maecenas....",
      author: {
        name: "Lisa Rodriguez",
        username: "lisar",
        avatar: "/Ellipse 11.png",
      },
      timestamp: "22 May, 2025",
      upvotes: 14,
      downvotes: 2,
      commentCount: 67,
      categories: ["CARDIO", "BLOCKCHAIN"],
      isPinned: false,
      createdAt: new Date("2025-05-22"),
    },
    {
      id: "9",
      title: "OnlyDust contributions and streaming rewards",
      content:
        "Lorem ipsum dolor sit amet consectetur. Viverra placerat amet diam quam. Fringilla quam nisl commodo vel. Enim mauris maecenas....",
      author: {
        name: "James Park",
        username: "jamespark",
        avatar: "/Ellipse 11.png",
      },
      timestamp: "21 May, 2025",
      upvotes: 7,
      downvotes: 0,
      commentCount: 29,
      categories: ["ONLY DUST", "WEB3 DISCUSSION"],
      isPinned: false,
      createdAt: new Date("2025-05-21"),
    },
    {
      id: "10",
      title: "Starnet protocol implementation guide",
      content:
        "Lorem ipsum dolor sit amet consectetur. Viverra placerat amet diam quam. Fringilla quam nisl commodo vel. Enim mauris maecenas....",
      author: {
        name: "Anna Kim",
        username: "annak",
        avatar: "/Ellipse 11.png",
      },
      timestamp: "21 May, 2025",
      upvotes: 25,
      downvotes: 3,
      commentCount: 98,
      categories: ["STARNET", "PROOF OF WORK"],
      isPinned: false,
      createdAt: new Date("2025-05-21"),
    },
  ]
  
  // Helper functions for filtering and sorting posts
  export const getPostsByCategory = (category: string): ForumPost[] => {
    return forumPosts.filter((post) =>
      post.categories.some(
        (cat) => cat.toLowerCase().includes(category.toLowerCase()) || category.toLowerCase().includes(cat.toLowerCase()),
      ),
    )
  }
  
  export const getPinnedPosts = (): ForumPost[] => {
    return forumPosts.filter((post) => post.isPinned)
  }
  
  export const getTrendingPosts = (): ForumPost[] => {
    return [...forumPosts].sort((a, b) => b.upvotes + b.commentCount - (a.upvotes + a.commentCount))
  }
  
  export const getLatestPosts = (): ForumPost[] => {
    return [...forumPosts].sort((a, b) => {
      if (!a.createdAt || !b.createdAt) return 0
      return b.createdAt.getTime() - a.createdAt.getTime()
    })
  }
  
  export const searchPosts = (query: string): ForumPost[] => {
    if (!query.trim()) return forumPosts
  
    const lowercaseQuery = query.toLowerCase()
    return forumPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(lowercaseQuery) ||
        post.content.toLowerCase().includes(lowercaseQuery) ||
        post.author.name.toLowerCase().includes(lowercaseQuery) ||
        post.categories.some((cat) => cat.toLowerCase().includes(lowercaseQuery)),
    )
  }
  