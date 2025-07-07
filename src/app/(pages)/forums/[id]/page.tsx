"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { CommentSection } from "@/components/forum/comment-section"
import { PopularCategories } from "@/components/forum/popular-categories"
import { ChevronUp, ChevronDown, MessageSquare, MoreHorizontal } from 'lucide-react'
import { motion } from "framer-motion"

export default function DiscussionDetailPage() {
  return (
    <div className="min-h-screen bg-black">
      <motion.div
        className="max-w-7xl mx-auto px-4 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Fixed Breadcrumb Container */}
        <div className="h-6 mb-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <Link href="/pages/forums" className="text-gray-400 hover:text-white transition-colors">
                  Community Discussions
                </Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <Link href="/pages/forums/category/web3" className="text-gray-400 hover:text-white transition-colors">
                  WEB 3
                </Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white">Details</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Main Post */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Card className="bg-gray-900 border-gray-800 p-6 mb-8">
                <div className="flex items-start space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/Ellipse 11.png" alt="Chidimma Cassandra" />
                    <AvatarFallback className="bg-purple-600 text-white">CC</AvatarFallback>
                  </Avatar>

                  <div className="flex-1 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-400 text-sm">@ Chidimma Cassandra</span>
                        <Button variant="ghost" size="icon" className="h-4 w-4 text-gray-400">
                          <MoreHorizontal className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>

                    <div>
                      <h1 className="text-white text-xl font-semibold mb-4">
                        What are some of the tool streamfi should have?
                      </h1>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur. Egestas congue eras fringilla penatibus. Risus dui eu
                        elementum eras. Pulvinar ridiculus nulla nulla quis habitant mauris aliquam. Sed mauris sed
                        elementum dolor. Est augue ac sed magna pellentesque congue egestas velit. Sit eget sit convallis
                        amet lobortis fermentum amet tempor maecenas. Non elementum tempor elit dis quisque velit dis
                        ligula. Vulputate odio maecenas turpis accumsan morbi id dignissim molestie. Feugiat ultricies
                        suscipit accumsan ac lorem lacus curabitur. Quam ut arcu fusce tellus viverra neque velit purus.
                        Nunc egestas massa donec ac.
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center space-x-4">
                        <span>25 May, 2025</span>
                        <span>5 minutes ago</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                          <ChevronUp className="h-4 w-4 mr-1" />
                          Upvote
                        </Button>

                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                          <ChevronDown className="h-4 w-4 mr-1" />
                          Downvote
                        </Button>
                      </div>

                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        105 Comments
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Comments */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <CommentSection />
            </motion.div>
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <PopularCategories />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
