import React from "react";

const tabs = ["Trending", "Pinned", "Latest"];

interface ForumTabsProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
}

const ForumTabs: React.FC<ForumTabsProps> = ({ activeTab, onTabChange }) => {
    return (
        <div className="flex gap-6 border-b border-zinc-800 text-white">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => onTabChange(tab)}
                    className={`pb-2 border-b-2 transition-all duration-150 ${activeTab === tab ? "border-purple-500" : "border-transparent text-zinc-400"
                        }`}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
};

export default ForumTabs;
