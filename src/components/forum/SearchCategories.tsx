import React from "react";

const SearchCategories: React.FC = () => {
    return (
        <div className="bg-[#111015] p-4 rounded-xl border border-zinc-800">
            <h2 className="text-white text-sm mb-2">SEARCH FOR CATEGORIES</h2>
            <input
                type="text"
                placeholder="Search..."
                className="w-full px-3 py-2 rounded-md bg-zinc-900 text-white focus:outline-none"
            />
        </div>
    );
};

export default SearchCategories;