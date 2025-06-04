import React from "react";

interface PersonCardProps {
    username: string;
    poe: string;
    badge: string;
    tier: string;
}

const PersonCard: React.FC<PersonCardProps> = ({ username, poe, badge, tier }) => (
    <div className="flex justify-between items-center text-sm text-white py-2">
        <div>
            <div>@{username}</div>
            <div className="text-xs text-zinc-400">PoE: {poe} <span className="text-purple-400">{badge}</span></div>
        </div>
        <span className="text-xs text-zinc-500">{tier}</span>
    </div>
);

const PeopleLikeYou: React.FC = () => {
    const suggestions = [
        { username: "Chidinma Cassandra", poe: "78%", badge: "Early contributor", tier: "TIER 7" },
        { username: "Chidinma Cassandra", poe: "30%", badge: "Verified Streamer", tier: "TIER 4" },
        { username: "Chidinma Cassandra", poe: "15%", badge: "NFT Subscriber", tier: "TIER 1" },
    ];

    return (
        <div className="bg-[#111015] p-4 rounded-xl border border-zinc-800">
            <h2 className="text-white text-sm mb-2">“People Like You” suggestion</h2>
            {suggestions.map((p, i) => (
                <PersonCard key={i} {...p} />
            ))}
            <button className="mt-4 w-full py-2 rounded-lg bg-purple-600 text-white font-semibold">
                See more
            </button>
        </div>
    );
};

export default PeopleLikeYou;