"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Bell, MessageSquare, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

/**
 * StreamFi Navbar Component
 *
 * Responsive design with desktop and mobile views
 */
export function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/forums") {
      return pathname.startsWith("/forums");
    }
    return pathname === path;
  };

  return (
    <nav className="bg-[#17191A] px-4 py-3">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <img
              src="/STRM Logo SFW 2.png"
              alt="StreamFi Logo"
              className="h-8 w-auto"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/forums"
            className={`flex items-center space-x-2 ${
              isActive("/forums")
                ? "text-white"
                : "text-gray-400 hover:text-white"
            } relative group`}
          >
            <MessageSquare className="w-5 h-5" />
            <span>Forums</span>
            <div
              className={`absolute -bottom-5 left-0 w-full h-1 bg-purple-600 transform transition-transform duration-200 origin-left ${
                isActive("/forums")
                  ? "scale-x-100"
                  : "scale-x-0 group-hover:scale-x-100"
              }`}
            ></div>
          </Link>
          <Link
            href="/leaderboard"
            className="text-gray-400 hover:text-white relative group"
          >
            Leaderboard
            <div
              className={`absolute -bottom-5 left-0 w-full h-1 bg-purple-600 transform transition-transform duration-200 origin-left ${
                isActive("/leaderboard")
                  ? "scale-x-100"
                  : "scale-x-0 group-hover:scale-x-100"
              }`}
            ></div>
          </Link>
          <Link
            href="/weekly-highlights"
            className="text-gray-400 hover:text-white relative group"
          >
            Weekly Highlights
            <div
              className={`absolute -bottom-5 left-0 w-full h-1 bg-purple-600 transform transition-transform duration-200 origin-left ${
                isActive("/weekly-highlights")
                  ? "scale-x-100"
                  : "scale-x-0 group-hover:scale-x-100"
              }`}
            ></div>
          </Link>
        </div>

        {/* User Profile Section */}
        <div className="flex items-center space-x-4">
          {/* Notification Bell with Modal */}
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-gray-800 relative"
              >
                <Bell className="h-5 w-5" />
                <div className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></div>
                <span className="sr-only">Notifications</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-md">
              <DialogHeader>
                <DialogTitle className="text-white">Notifications</DialogTitle>
              </DialogHeader>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {/* Notification Items */}
                  <div className="flex items-start space-x-3 p-3 hover:bg-gray-800 rounded-lg cursor-pointer">
                    <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">New follower</p>
                      <p className="text-xs text-gray-400">
                        John Doe started following you
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        2 minutes ago
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 hover:bg-gray-800 rounded-lg cursor-pointer">
                    <div className="h-2 w-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">
                        Stream milestone reached
                      </p>
                      <p className="text-xs text-gray-400">
                        You've reached 1,000 viewers!
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        15 minutes ago
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 hover:bg-gray-800 rounded-lg cursor-pointer">
                    <div className="h-2 w-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">
                        New donation received
                      </p>
                      <p className="text-xs text-gray-400">
                        Someone donated $25 to your stream
                      </p>
                      <p className="text-xs text-gray-500 mt-1">1 hour ago</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 hover:bg-gray-800 rounded-lg cursor-pointer">
                    <div className="h-2 w-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">
                        Scheduled stream reminder
                      </p>
                      <p className="text-xs text-gray-400">
                        Your stream "Gaming Night" starts in 30 minutes
                      </p>
                      <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 hover:bg-gray-800 rounded-lg cursor-pointer opacity-60">
                    <div className="h-2 w-2 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">
                        Weekly report available
                      </p>
                      <p className="text-xs text-gray-400">
                        Your streaming analytics for this week are ready
                      </p>
                      <p className="text-xs text-gray-500 mt-1">1 day ago</p>
                    </div>
                  </div>
                </div>
              </ScrollArea>
              <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                <Button
                  variant="ghost"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Mark all as read
                </Button>
                <Button
                  variant="ghost"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  View all
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          {/*  User Profile - Dropdown appears below this section aligned to the right */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-800 rounded-lg px-2 py-1 transition-colors">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/Ellipse 11.png" alt="Chidimma Cassandra" />
                  <AvatarFallback className="bg-purple-600 text-white">
                    CC
                  </AvatarFallback>
                </Avatar>
                <ChevronDown className="w-4 h-4 white" color="#ffffff" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-56 bg-gray-900 border-gray-700"
              align="end"
              forceMount
            >
              <div className="flex items-center justify-start gap-2 p-2">
                <div className="flex flex-col space-y-1 leading-none">
                  <p className="font-medium text-white">Chidimma Cassandra</p>
                  <p className="w-[200px] truncate text-sm text-gray-400">
                    chidimma@streamfi.com
                  </p>
                </div>
              </div>
              <DropdownMenuSeparator className="bg-gray-700" />
              <DropdownMenuItem
                className="text-white hover:bg-gray-800"
                asChild
              >
                <Link href="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="text-white hover:bg-gray-800"
                asChild
              >
                <Link href="/settings">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="text-white hover:bg-gray-800"
                asChild
              >
                <Link href="/billing">Billing</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-gray-700" />
              <DropdownMenuItem className="text-white hover:bg-gray-800">
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
