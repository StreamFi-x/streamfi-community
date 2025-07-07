"use client";
import { useState } from "react";
import type React from "react";
import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "PROOF OF WORK",
  "BLOCKCHAIN",
  "STARNET",
  "ETHEREUM",
  "BITCOIN",
  "CARDIO",
  "WEB3 DISCUSSION",
  "WEB 3.0",
  "STREAMFI",
  "ONLY DUST",
];

interface SearchCategoriesProps {
  onSearch?: (query: string) => void;
  onCategorySelect?: (category: string) => void;
}

export function SearchCategories({
  onSearch,
  onCategorySelect,
}: SearchCategoriesProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const filteredCategories = categories.filter((category) =>
    category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch?.(query);
  };

  const handleCategoryClick = (category: string) => {
    const categorySlug = category
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
    router.push(`/forums/category/${categorySlug}`);
    onCategorySelect?.(category);
  };

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <h3 className="text-white text-lg font-semibold mb-4">
          SEARCH FOR CATEGORIES
        </h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
            className="pl-10 bg-gray-900 border-gray-700 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500"
          />
        </div>
      </div>

      <div>
        <h4 className="text-white text-sm font-medium mb-3">Related Search</h4>
        <div className="flex flex-wrap gap-2">
          <AnimatePresence>
            {filteredCategories.map((category) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge
                  variant="outline"
                  className={`cursor-pointer transition-colors bg-purple-600/20 border-purple-600 text-purple-300 hover:bg-purple-600/30`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </Badge>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {filteredCategories.length === 0 && searchQuery && (
          <motion.p
            className="text-gray-400 text-sm mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            No categories found for "{searchQuery}"
          </motion.p>
        )}
      </div>
    </motion.div>
  );
}
