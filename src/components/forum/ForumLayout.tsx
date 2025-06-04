import React, { useState } from "react";
import ForumPostCard from "./ForumPostCard";
import ForumTabs from "./ForumTabs";
import SearchCategories from "./SearchCategories";
import PeopleLikeYou from "./PeopleLikeYou";
import ForumPagination from "./ForumPagination";

const ForumLayout: React.FC = () => {
    const [activeTab, setActiveTab] = useState("Trending");
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-6 py-6 bg-black min-h-screen">
            <div className="lg:col-span-2 space-y-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-white text-2xl font-bold">Forums</h1>
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">Add Discussion</button>
                </div>
                <ForumTabs activeTab={activeTab} onTabChange={setActiveTab} />
                {[...Array(3)].map((_, i) => (
                    <ForumPostCard
                        key={i}
                        username="Chidinma Cassandra"
                        title="What are some of the tool streamfi should have?"
                        description="Lorem ipsum dolor sit amet consectetur. Viverra placerat amet diam quam. Fringilla quam nisi commodo vel. Enim mauris maecenas..."
                        date="25 May, 2025 • 5 minutes ago"
                        comments={105}
                    />
                ))}
                <ForumPagination currentPage={currentPage} totalPages={150} onPageChange={setCurrentPage} />
            </div>
            <div className="space-y-6">
                <SearchCategories />
                <PeopleLikeYou />
            </div>
        </div>
    );
};

export default ForumLayout;
