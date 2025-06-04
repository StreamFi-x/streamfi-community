import React from "react";

interface ForumPaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const ForumPagination: React.FC<ForumPaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    const pages = Array.from({ length: Math.min(totalPages, 6) }, (_, i) => i + 1);

    return (
        <div className="flex justify-between items-center text-sm text-zinc-400 pt-4">
            <div>
                <strong className="text-white">{(currentPage - 1) * 15 + 1}</strong> –{' '}
                <strong className="text-white">{Math.min(currentPage * 15, 750)}</strong> of 750 active topics
            </div>
            <div className="flex gap-2">
                {pages.map((p) => (
                    <button
                        key={p}
                        onClick={() => onPageChange(p)}
                        className={`px-2 py-1 rounded-md ${p === currentPage ? "bg-purple-600 text-white" : "hover:bg-zinc-800"
                            }`}
                    >
                        {p}
                    </button>
                ))}
                {totalPages > 6 && <span>...</span>}
                <button className="hover:underline" onClick={() => onPageChange(totalPages)}>
                    {totalPages}
                </button>
            </div>
        </div>
    );
};

export default ForumPagination;