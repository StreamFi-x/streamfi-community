"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Pagination } from "@/components/ui/pagination";
import { ForumPostCard } from "@/components/forum/forum-post-card";
import { SearchCategories } from "@/components/forum/search-categories";
import { PeopleSuggestions } from "@/components/forum/people-suggestions";
import { motion, AnimatePresence } from "framer-motion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import {
  forumPosts,
  getTrendingPosts,
  getPinnedPosts,
  getLatestPosts,
  searchPosts,
} from "@/lib/data/forum-posts";
import AddDiscussionModal from "@/app/(pages)/forums/modal/page";

export default function ForumsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState("trending");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const itemsPerPage = 15;

  const getFilteredPosts = () => {
    let posts = forumPosts;

    // Apply tab filter
    switch (activeTab) {
      case "trending":
        posts = getTrendingPosts();
        break;
      case "pinned":
        posts = getPinnedPosts();
        break;
      case "latest":
        posts = getLatestPosts();
        break;
      default:
        posts = forumPosts;
    }

    // Apply search filter
    if (searchQuery) {
      posts = searchPosts(searchQuery);
    }

    // Apply category filter
    if (selectedCategories.length > 0) {
      posts = posts.filter((post) =>
        selectedCategories.some((category) =>
          post.categories.includes(category)
        )
      );
    }

    return posts;
  };

  const filteredPosts = useMemo(
    () => getFilteredPosts(),
    [searchQuery, selectedCategories, activeTab]
  );
  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to first page when searching
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
    setCurrentPage(1); // Reset to first page when filtering
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setCurrentPage(1); // Reset to first page when changing tabs
  };

  // Modal handlers
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDiscussionSubmit = (data: {
    title: string;
    category: string;
    details: string;
  }) => {
    // Here you would typically submit the discussion to your API
    console.log("New discussion submitted:", data);

    // You could add the new discussion to your local state or refetch data
    // For now, we'll just show a success message in console
    console.log("Discussion created successfully!");

    // Optional: Show a toast notification or redirect to the new discussion
  };

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
                <BreadcrumbPage className="text-gray-400">
                  Community Discussions
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <motion.div
          className="flex items-center justify-between mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <h1 className="text-white text-3xl font-bold">Forums</h1>
          <Button
            className="bg-purple-600 hover:bg-purple-700 text-white"
            onClick={openModal}
          >
            Add Discussion
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs
              value={activeTab}
              onValueChange={handleTabChange}
              className="w-full"
            >
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
                    <motion.div
                      className="text-center py-12"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <p className="text-gray-400">
                        {activeTab === "pinned"
                          ? "No pinned discussions yet."
                          : "No discussions found matching your criteria."}
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
                showItemCount={true}
              />
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <SearchCategories
              onSearch={handleSearch}
              onCategorySelect={handleCategorySelect}
            />
            <PeopleSuggestions />
          </div>
        </div>
      </motion.div>

      {/* Add Discussion Modal */}
      <AddDiscussionModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleDiscussionSubmit}
      />
    </div>
  );
}
