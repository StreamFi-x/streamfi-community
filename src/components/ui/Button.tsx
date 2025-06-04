"use client";

import React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
    fullWidth?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = "primary",
    size = "md",
    fullWidth,
    className,
    ...props
}) => {
    const base = "rounded-xl font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2";
    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
        secondary: "bg-gray-200 text-black hover:bg-gray-300 focus:ring-gray-400",
        ghost: "bg-transparent text-blue-600 hover:bg-blue-50 focus:ring-blue-400",
    };
    const sizes = {
        sm: "text-sm px-3 py-1.5",
        md: "text-base px-4 py-2",
        lg: "text-lg px-6 py-3",
    };

    return (
        <button
            className={clsx(base, variants[variant], sizes[size], fullWidth && "w-full", className)}
            {...props}
        >
            {children}
        </button>
    );
};
