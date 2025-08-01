"use client";

import React, { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockUserProfile } from "@/lib/data/profile";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const profile = mockUserProfile;

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-6 sm:py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6 sm:mb-8">
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="bg-transparent border-b border-gray-800 rounded-none w-full justify-start p-0 h-auto overflow-x-auto">
                  <TabsTrigger
                    value="overview"
                    className="bg-transparent border-b-2 border-transparent data-[state=active]:border-purple-500 data-[state=active]:bg-transparent data-[state=active]:text-white rounded-none px-0 mr-4 sm:mr-8 pb-4 text-gray-400 whitespace-nowrap text-sm sm:text-base"
                  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger
                    value="discussions"
                    className="bg-transparent border-b-2 border-transparent data-[state=active]:border-purple-500 data-[state=active]:bg-transparent data-[state=active]:text-white rounded-none px-0 mr-4 sm:mr-8 pb-4 text-gray-400 whitespace-nowrap text-sm sm:text-base"
                  >
                    My Discussions
                  </TabsTrigger>
                  <TabsTrigger
                    value="replies"
                    className="bg-transparent border-b-2 border-transparent data-[state=active]:border-purple-500 data-[state=active]:bg-transparent data-[state=active]:text-white rounded-none px-0 pb-4 text-gray-400 whitespace-nowrap text-sm sm:text-base"
                  >
                    Replies
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6 sm:mt-8">
                  <Card className="bg-transparent-900 border-gray-800 mb-6 sm:mb-8">
                    <CardContent className="p-4 sm:p-6 md:p-8">
                      <div className="flex flex-col items-center md:items-start md:flex-row space-y-6 md:space-y-0 md:space-x-8 min-h-[200px] sm:min-h-[250px]">
                        <div className="relative">
                          <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 rounded-full overflow-hidden">
                            <img
                              src="/profile-photo.jpg"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>

                        <div className="flex-1 text-center md:text-left">
                          <h1 className="text-xl sm:text-2xl font-bold text-white mb-2">
                            {profile.name}
                          </h1>

                          <p className="text-gray-400 mb-4 sm:mb-6">
                            {profile.username}
                          </p>

                          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
                            <div>
                              <p className="text-gray-400 text-xs sm:text-sm mb-1">
                                Followers
                              </p>
                              <p className="text-white font-semibold text-sm sm:text-base">
                                {profile.followers}
                              </p>
                            </div>
                            <div>
                              <p className="text-gray-400 text-xs sm:text-sm mb-1">
                                Upvotes
                              </p>
                              <p className="text-white font-semibold text-sm sm:text-base">
                                {profile.upvotes}
                              </p>
                            </div>
                            <div>
                              <p className="text-gray-400 text-xs sm:text-sm mb-1">
                                Badges
                              </p>
                              <p className="text-white font-semibold text-sm sm:text-base">
                                {profile.badges}
                              </p>
                            </div>
                            <div>
                              <p className="text-gray-400 text-xs sm:text-sm mb-1">
                                NFT
                              </p>
                              <p className="text-white font-semibold text-sm sm:text-base">
                                {profile.nft}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-transparent-900 border-gray-800">
                    <CardContent className="p-4 sm:p-6 md:p-8">
                      <h2 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">
                        Profile details
                      </h2>

                      <div className="space-y-4 sm:space-y-6">
                        <div className="flex justify-between items-center py-2">
                          <span className="text-gray-300 text-sm sm:text-base">
                            Followers
                          </span>
                          <span className="text-white font-medium text-sm sm:text-base">
                            {profile.followers}
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <span className="text-gray-300 text-sm sm:text-base">
                            Upvotes
                          </span>
                          <span className="text-white font-medium text-sm sm:text-base">
                            {profile.upvotes}
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <span className="text-gray-300 text-sm sm:text-base">
                            Badges
                          </span>
                          <span className="text-white font-medium text-sm sm:text-base">
                            {profile.badges}
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <span className="text-gray-300 text-sm sm:text-base">
                            NFT
                          </span>
                          <span className="text-white font-medium text-sm sm:text-base">
                            {profile.nft}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="discussions">
                  <div className="text-center py-8 sm:py-12">
                    <p className="text-gray-400 text-sm sm:text-base">
                      No discussions yet
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="replies">
                  <div className="text-center py-8 sm:py-12">
                    <p className="text-gray-400 text-sm sm:text-base">
                      No replies yet
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card className="bg-transparent border-gray-800 lg:sticky lg:top-8 min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">
                  Account info
                </h3>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between p-3 bg-transparent-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                    <span className="text-gray-300 text-sm sm:text-base">
                      Streamfi account
                    </span>
                    <ExternalLink className="h-4 w-4 text-gray-400 flex-shrink-0" />
                  </div>

                  <div className="flex items-center justify-between p-3 bg-transparent-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                    <span className="text-gray-300 text-sm sm:text-base">
                      Streamfi account
                    </span>
                    <ExternalLink className="h-4 w-4 text-gray-400 flex-shrink-0" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
