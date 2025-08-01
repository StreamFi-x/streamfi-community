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
      
      <div className="container mx-auto px-24 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2">
           
            <div className="mb-8">
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="bg-transparent border-b border-gray-800 rounded-none w-full justify-start p-0 h-auto">
                  <TabsTrigger
                    value="overview"
                    className="bg-transparent border-b-2 border-transparent data-[state=active]:border-purple-500 data-[state=active]:bg-transparent data-[state=active]:text-white rounded-none px-0 mr-8 pb-4 text-gray-400"
                  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger
                    value="discussions"
                    className="bg-transparent border-b-2 border-transparent data-[state=active]:border-purple-500 data-[state=active]:bg-transparent data-[state=active]:text-white rounded-none px-0 mr-8 pb-4 text-gray-400"
                  >
                    My Discussions
                  </TabsTrigger>
                  <TabsTrigger
                    value="replies"
                    className="bg-transparent border-b-2 border-transparent data-[state=active]:border-purple-500 data-[state=active]:bg-transparent data-[state=active]:text-white rounded-none px-0 pb-4 text-gray-400"
                  >
                    Replies
                  </TabsTrigger>
                </TabsList>

               
                <TabsContent value="overview" className="mt-8">
                  
                  <Card className="bg-transparent-900 border-gray-800 mb-8">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8 min-h-[250px]">
                        
                        <div className="relative">
                          <div className="w-60 h-60 rounded-full overflow-hidden">
                            <img
                              src="/profile-photo.jpg"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>

                        
                        <div className="flex-1">
                         
                          <h1 className="text-2xl font-bold text-white mb-2">
                            {profile.name}
                          </h1>
                         
                          <p className="text-gray-400 mb-6">
                            {profile.username}
                          </p>

                          
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div>
                              <p className="text-gray-400 text-sm mb-1">
                                Followers
                              </p>
                              <p className="text-white font-semibold">
                                {profile.followers}
                              </p>
                            </div>
                            <div>
                              <p className="text-gray-400 text-sm mb-1">
                                Upvotes
                              </p>
                              <p className="text-white font-semibold">
                                {profile.upvotes}
                              </p>
                            </div>
                            <div>
                              <p className="text-gray-400 text-sm mb-1">
                                Badges
                              </p>
                              <p className="text-white font-semibold">
                                {profile.badges}
                              </p>
                            </div>
                            <div>
                              <p className="text-gray-400 text-sm mb-1">NFT</p>
                              <p className="text-white font-semibold">
                                {profile.nft}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                
                  <Card className="bg-transparent-900 border-gray-800">
                    <CardContent className="p-8">
                      <h2 className="text-xl font-semibold text-white mb-6">
                        Profile details
                      </h2>

                      <div className="space-y-6">
                        
                        <div className="flex justify-between items-center py-2">
                          <span className="text-gray-300">Followers</span>
                          <span className="text-white font-medium">
                            {profile.followers}
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <span className="text-gray-300">Upvotes</span>
                          <span className="text-white font-medium">
                            {profile.upvotes}
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <span className="text-gray-300">Badges</span>
                          <span className="text-white font-medium">
                            {profile.badges}
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <span className="text-gray-300">NFT</span>
                          <span className="text-white font-medium">
                            {profile.nft}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

               
                <TabsContent value="discussions">
                  <div className="text-center py-12">
                    <p className="text-gray-400">No discussions yet</p>
                  </div>
                </TabsContent>

                <TabsContent value="replies">
                  <div className="text-center py-12">
                    <p className="text-gray-400">No replies yet</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

         
          <div className="lg:col-span-1">
            <Card className="bg-transparent border-gray-800 sticky top-8 min-h-[600px]">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-6">
                  Account info
                </h3>

               
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-transparent-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                    <span className="text-gray-300">Streamfi account</span>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </div>

                  <div className="flex items-center justify-between p-3 bg-transparent-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                    <span className="text-gray-300">Streamfi account</span>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
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
