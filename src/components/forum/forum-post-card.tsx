"use client";
import { useRouter } from "next/navigation";
import type React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ChevronUp,
  ChevronDown,
  MessageSquare,
  MoreHorizontal,
} from "lucide-react";
import { motion } from "framer-motion";

interface ForumPostCardProps {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
    avatar?: string;
    username: string;
  };
  timestamp: string;
  upvotes: number;
  downvotes: number;
  commentCount: number;
  isUpvoted?: boolean;
  isDownvoted?: boolean;
}

export function ForumPostCard({
  id,
  title,
  content,
  author,
  timestamp,
  upvotes,
  downvotes,
  commentCount,
  isUpvoted = false,
  isDownvoted = false,
}: ForumPostCardProps) {
  const router = useRouter();

  const handleCardClick = (e: React.MouseEvent) => {
    // Don't navigate if clicking on buttons
    if ((e.target as HTMLElement).closest("button")) {
      return;
    }
    router.push(`/forums/${id}`);
  };

  const handleVote = (e: React.MouseEvent, type: "up" | "down") => {
    e.stopPropagation();
    // Handle voting logic here
    console.log(`${type}vote clicked for post ${id}`);
  };

  const handleCommentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push(`/forums/${id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      <Card
        className="bg-gray-900 border-gray-800 p-6 cursor-pointer hover:bg-gray-800/50 transition-colors"
        onClick={handleCardClick}
      >
        <div className="flex items-start space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage
              src={author.avatar || "/placeholder.svg"}
              alt={author.name}
            />
            <AvatarFallback className="bg-purple-600 text-white">
              {author.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-gray-400 text-sm">
                  @{author.username}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-4 w-4 text-gray-400"
                >
                  <MoreHorizontal className="h-3 w-3" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{content}</p>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-400">
              <div className="flex items-center space-x-4">
                <span>{timestamp}</span>
                <span>5 minutes ago</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`text-gray-400 hover:text-white ${
                    isUpvoted ? "text-green-500" : ""
                  }`}
                  onClick={(e) => handleVote(e, "up")}
                >
                  <ChevronUp className="h-4 w-4 mr-1" />
                  Upvote
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  className={`text-gray-400 hover:text-white ${
                    isDownvoted ? "text-red-500" : ""
                  }`}
                  onClick={(e) => handleVote(e, "down")}
                >
                  <ChevronDown className="h-4 w-4 mr-1" />
                  Downvote
                </Button>
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white"
                onClick={handleCommentClick}
              >
                <MessageSquare className="h-4 w-4 mr-1" />
                {commentCount} Comments
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
