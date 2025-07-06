"use client"

import { useState, useMemo } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Pagination } from "@/components/ui/pagination"
import { ForumPostCard } from "@/components/forum/forum-post-card"
import { SearchCategories } from "@/components/forum/search-categories"
import { PeopleSuggestions } from "@/components/forum/people-suggestions"
import { motion, AnimatePresence } from "framer-motion"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  getPostsByCategory,
  getTrendingPosts,
  getPinnedPosts,
  getLatestPosts,
  searchPosts,
} from "@/lib/data/forum-posts"

const categoryMap: Record<string, string> = {
  web3: "WEB 3",
  "web-30": "WEB 3.0",
  blockchain: "BLOCKCHAIN",
  ethereum: "ETHEREUM",
  bitcoin: "BITCOIN",
  streamfi: "STREAMFI",
  starnet: "STARNET",
  "proof-of-work": "PROOF OF WORK",
  cardio: "CARDIO",
  "web3-discussion": "WEB3 DISCUSSION",
  "only-dust": "ONLY DUST",
}

export default function CategoryPage() {
  const params = useParams()
  const categorySlug = params.slug as string
  const categoryName = categoryMap[categorySlug] || categorySlug.toUpperCase()

  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("trending")
  const itemsPerPage = 15

  const getFilteredPosts = () => {
    let posts = getPostsByCategory(categoryName)

    // Apply tab filter
    switch (activeTab) {
      case "trending":
        posts = getTrendingPosts().filter((post) =>
          post.categories.some(
            (cat) =>
              cat.toLowerCase().includes(categoryName.toLowerCase()) ||
              categoryName.toLowerCase().includes(cat.toLowerCase()),
          ),
        )
        break
      case "pinned":
        posts = getPinnedPosts().filter((post) =>
          post.categories.some(
            (cat) =>
              cat.toLowerCase().includes(categoryName.toLowerCase()) ||
              categoryName.toLowerCase().includes(cat.toLowerCase()),
          ),
        )
        break
      case "latest":
        posts = getLatestPosts().filter((post) =>
          post.categories.some(
            (cat) =>
              cat.toLowerCase().includes(categoryName.toLowerCase()) ||
              categoryName.toLowerCase().includes(cat.toLowerCase()),
          ),
        )
        break
    }

    // Apply search filter
    if (searchQuery) {
      posts = searchPosts(searchQuery).filter((post) =>
        post.categories.some(
          (cat) =>
            cat.toLowerCase().includes(categoryName.toLowerCase()) ||
            categoryName.toLowerCase().includes(cat.toLowerCase()),
        ),
      )
    }

    return posts
  }

  const filteredPosts = useMemo(() => getFilteredPosts(), [categoryName, searchQuery, activeTab])
  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage)
  const paginatedPosts = filteredPosts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setCurrentPage(1)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    setCurrentPage(1)
  }

  return (
    <div className="min-h-screen bg-black">
      <motion.div
        className="max-w-7xl mx-auto px-4 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Fixed Breadcrumb Container */}
        <div className="h-6 mb-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <Link href="/pages/forums" className="text-gray-400 hover:text-white transition-colors">
                  Community Discussions
                </Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white">{categoryName}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <motion.div
          className="flex items-center justify-between mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <h1 className="text-white text-3xl font-bold">Forums</h1>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">Add Discussion</Button>
        </motion.div>

        {/* Search result indicator */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15 }}
        >
          <p className="text-gray-400 text-sm">Search result for "{categoryName.toLowerCase()} discussion"...</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
              <TabsList className="bg-transparent border-b border-gray-800 rounded-none h-auto p-0 mb-6">
                <TabsTrigger
                  value="trending"
                  className="bg-transparent border-b-2 border-transparent data-[state=active]:text-white data-[state=active]:border-purple-600 data-[state=active]:bg-transparent rounded-none px-4 py-2 text-white"
                >
                  Trending
                </TabsTrigger>
                <TabsTrigger
                  value="pinned"
                  className="bg-transparent border-b-2 border-transparent data-[state=active]:text-white data-[state=active]:border-purple-600 data-[state=active]:bg-transparent rounded-none px-4 py-2 text-gray-400"
                >
                  Pinned
                </TabsTrigger>
                <TabsTrigger
                  value="latest"
                  className="bg-transparent border-b-2 border-transparent data-[state=active]:text-white data-[state=active]:border-purple-600 data-[state=active]:bg-transparent rounded-none px-4 py-2 text-gray-400"
                >
                  Latest
                </TabsTrigger>
              </TabsList>

              <TabsContent value={activeTab} className="space-y-6">
                <AnimatePresence mode="wait">
                  {paginatedPosts.length > 0 ? (
                    <motion.div
                      className="space-y-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {paginatedPosts.map((post, index) => (
                        <motion.div
                          key={post.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                        >
                          <ForumPostCard {...post} />
                        </motion.div>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div className="text-center py-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      <p className="text-gray-400">
                        {activeTab === "pinned"
                          ? `No pinned discussions in ${categoryName}.`
                          : `No discussions found in ${categoryName} category.`}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </TabsContent>
            </Tabs>

            {/* Pagination */}
            {paginatedPosts.length > 0 && totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                totalItems={filteredPosts.length}
                itemsPerPage={itemsPerPage}
                onPageChange={handlePageChange}
                showItemCount={false}
              />
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <SearchCategories onSearch={handleSearch} />
            <PeopleSuggestions />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
