import React from "react";

interface ForumPostCardProps {
    username: string;
    title: string;
    description: string;
    date: string;
    comments: number;
    avatarUrl?: string;
}

const ForumPostCard: React.FC<ForumPostCardProps> = ({
    username,
    title,
    description,
    date,
    comments,
    avatarUrl = "/images/avatar-placeholder.png",
}) => {
    return (
        <div className="bg-[#111015] border border-zinc-800 rounded-xl p-4 text-white">
            <div className="flex items-center gap-3 mb-3">
                <img
                    src={avatarUrl}
                    alt="Avatar"
                    className="w-10 h-10 rounded-full"
                />
                <div className="text-sm font-semibold">@{username}</div>
                <span className="text-xs text-zinc-400 ml-auto">{date}</span>
            </div>
            <div className="text-lg font-semibold mb-1">{title}</div>
            <div className="text-sm text-zinc-400 mb-4">{description}</div>
            <div className="flex justify-between items-center text-sm">
                <div className="flex gap-2">
                    <button className="px-4 py-1 border border-zinc-700 rounded-lg hover:bg-zinc-800">
                        👍 Upvote
                    </button>
                    <button className="px-4 py-1 border border-zinc-700 rounded-lg hover:bg-zinc-800">
                        👎 Downvote
                    </button>
                </div>
                <div className="text-zinc-400">💬 {comments} Comments</div>
            </div>
        </div>
    );
};

export default ForumPostCard;
