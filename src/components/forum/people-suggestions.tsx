"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"

const suggestions = [
  {
    id: 1,
    name: "Chidimma Cassandra",
    username: "chidimma",
    poe: 78,
    tier: "TIER 7",
    badge: "Early Contributor",
    badgeColor: "text-yellow-500",
  },
  {
    id: 2,
    name: "Chidimma Cassandra",
    username: "chidimma",
    poe: 30,
    tier: "TIER 4",
    badge: "Verified Streamer",
    badgeColor: "text-blue-500",
  },
  {
    id: 3,
    name: "Chidimma Cassandra",
    username: "chidimma",
    poe: 15,
    tier: "TIER 1",
    badge: "NFT Subscriber",
    badgeColor: "text-purple-500",
  },
]

export function PeopleSuggestions() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <Card className="bg-gray-900 border-gray-800 p-6">
        <h3 className="text-white text-lg font-semibold mb-4">{"People Like You"} suggestion</h3>

        <div className="space-y-4">
          {suggestions.map((user, index) => (
            <motion.div
              key={user.id}
              className="flex items-center justify-between"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/Ellipse 11.png" alt={user.name} />
                  <AvatarFallback className="bg-purple-600 text-white">
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <div>
                  <p className="text-white text-sm font-medium">@{user.username}</p>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-400 text-xs">PoE: {user.poe}%</span>
                    <span className={`text-xs ${user.badgeColor}`}>{user.badge}</span>
                  </div>
                </div>
              </div>

              <span className="text-gray-500 text-xs">{user.tier}</span>
            </motion.div>
          ))}
        </div>

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white">See more</Button>
        </motion.div>
      </Card>
    </motion.div>
  )
}
