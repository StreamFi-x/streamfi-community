"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { topStreamers, topTippers, mostEngagedCommenters } from "@/lib/data/community/leaderboard";
import Image from "next/image";

export default function LeaderboardPage() {
  return (
    <section className="px-8 pt-8 bg-black text-white">
      <div className="flex flex-col gap-2">

      <h1 className="font-semibold text-[32px] leading-10">Community Leaderboard</h1>
      <p className="font-normal text-base leading-10 text-[#BFBFBF]">Celebrating top contributors in the StreamFi ecosystem</p>
      </div>

      <main className="pt-8">
        <Tabs defaultValue="Top Streamers" >
          <TabsList className="bg-black gap-3">
            <TabsTrigger value="Top Streamers" className="data-[state=active]:bg-black data-[state=active]:text-white font-medium text-base data-[state=active]:border-b-2 data-[state=active]:border-[#9147FF] p-[10px] rounded-none filter grayscale data-[state=active]:filter-none" >🏅 Top Streamers </TabsTrigger>
            <TabsTrigger value="Top Tippers" className="data-[state=active]:bg-black data-[state=active]:text-white font-medium text-base data-[state=active]:border-b-2 data-[state=active]:border-[#9147FF] p-[10px] rounded-none filter grayscale data-[state=active]:filter-none">💸 Top Tippers</TabsTrigger>
            <TabsTrigger value="Most Engaged Commenters" className="data-[state=active]:bg-black data-[state=active]:text-white font-medium text-base data-[state=active]:border-b-2 data-[state=active]:border-[#9147FF] p-[10px] rounded-none filter grayscale data-[state=active]:filter-none">
              💬 Most Engaged Commenters
            </TabsTrigger>
          </TabsList>

          <TabsContent value="Top Streamers" className="mt-[52px]">
            <div className="border border-[#767676] rounded-[10px] overflow-hidden w-fit">
              <Table className="w-full md:w-[1137px] border-collapse table-fixed">

                <TableHeader className="bg-[#D9D9D9]/30 ">
                  <TableRow>
                    <TableHead className="pl-6 py-4 text-[#D9D9D9] text-base font-medium w-1/4">Rank</TableHead>
                    <TableHead className="py-4 text-[#D9D9D9] text-base font-medium w-1/4">Username</TableHead>
                    <TableHead className="py-4 text-[#D9D9D9] text-base font-medium w-1/4">PoE Score / NFT Tier</TableHead>
                    <TableHead className="pr-6 py-4 text-[#D9D9D9] text-base w-1/4">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topStreamers.map((streamer) => (
                    <TableRow key={streamer.username} className="border-b border-[#767676]">
                      <TableCell className="font-medium px-6 py-4"><span className="text-2xl">{streamer.rank}</span></TableCell>
                      <TableCell className="py-4">
                        <div className="flex items-center gap-[17px]">
                          <div className="rounded-full size-10">
                            <Image width={100} height={100} src={streamer.pdp} alt="pdp"/>
                          </div>
                          <p className="text-base font-normal text-[#D9D9D9]">{streamer.username}</p>
                        </div>
                      </TableCell>
                      <TableCell className="py-4 text-base font-normal text-[#D9D9D9]">{streamer.poeScore}</TableCell>
                      <TableCell className="py-4">
                        <button className="text-[#9147FF] text-base font-normal border-b-2 py-2 border-[#9147FF]">
                          {streamer.action}
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          <TabsContent value="Top Tippers" className="mt-[52px]">
            <div className="border border-[#767676] rounded-[10px] overflow-hidden w-fit">
              <Table className="w-full md:w-[1137px] border-collapse table-fixed">
              
                <TableHeader className="bg-[#D9D9D9]/30 ">
                  <TableRow>
                    <TableHead className="pl-6 py-4 text-[#D9D9D9] text-base font-medium w-1/4">Rank</TableHead>
                    <TableHead className="py-4 text-[#D9D9D9] text-base font-medium w-1/4">Username</TableHead>
                    <TableHead className="py-4 text-[#D9D9D9] text-base font-medium w-1/4">Amount</TableHead>
                    <TableHead className="pr-6 py-4 text-[#D9D9D9] text-base w-1/4">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topTippers.map((tipper) => (
                    <TableRow key={tipper.username} className="border-b border-[#767676]">
                      <TableCell className="font-medium px-6 py-4"><span className="text-2xl">{tipper.rank}</span></TableCell>
                      <TableCell className="py-4">
                        <div className="flex items-center gap-[17px]">
                          <div className="rounded-full size-10">
                            <Image width={100} height={100} src={tipper.pdp} alt="pdp"/>
                          </div>
                          <p className="text-base font-normal text-[#D9D9D9]">{tipper.username}</p>
                        </div>
                      </TableCell>
                      <TableCell className="py-4 text-base font-normal text-[#D9D9D9]">{tipper.amount}</TableCell>
                      <TableCell className="py-4">
                        <button className="text-[#9147FF] text-base font-normal border-b-2 py-2 border-[#9147FF]">
                          {tipper.action}
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          <TabsContent value="Most Engaged Commenters" className="mt-[52px]">
            <div className="border border-[#767676] rounded-[10px] overflow-hidden w-fit">
              <Table className="w-full md:w-[1137px] border-collapse table-fixed">
                
                <TableHeader className="bg-[#D9D9D9]/30 ">
                  <TableRow>
                    <TableHead className="pl-6 py-4 text-[#D9D9D9] text-base font-medium w-1/4">Rank</TableHead>
                    <TableHead className="py-4 text-[#D9D9D9] text-base font-medium w-1/4">Username</TableHead>
                    <TableHead className="py-4 text-[#D9D9D9] text-base font-medium w-1/4">Comments</TableHead>
                    <TableHead className="pr-6 py-4 text-[#D9D9D9] text-base w-1/4">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mostEngagedCommenters.map((commenter) => (
                    <TableRow key={commenter.username} className="border-b border-[#767676]">
                      <TableCell className="font-medium px-6 py-4"><span className="text-2xl">{commenter.rank}</span></TableCell>
                      <TableCell className="py-4">
                        <div className="flex items-center gap-[17px]">
                          <div className="rounded-full size-10">
                            <Image width={100} height={100} src={commenter.pdp} alt="pdp"/>
                          </div>
                          <p className="text-base font-normal text-[#D9D9D9]">{commenter.username}</p>
                        </div>
                      </TableCell>
                      <TableCell className="py-4 text-base font-normal text-[#D9D9D9]">{commenter.comments}</TableCell>
                      <TableCell className="py-4">
                        <button className="text-[#9147FF] text-base font-normal border-b-2 py-2 border-[#9147FF]">
                          {commenter.action}
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </section>
  );
}


