"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";

const Header = () => {
    return (
        <header className="flex items-center justify-between p-4 border-b bg-white dark:bg-gray-900 shadow-md">
            <Link href="/">
                <Image
                    src="/assets/streamfi-logo.svg"
                    alt="StreamFi Logo"
                    width={140}
                    height={32}
                    priority
                    className="h-8 w-auto"
                />
            </Link>

            <nav className="hidden md:flex gap-6 text-sm">
                <a href="#explore" className="hover:underline">Forums</a>
                <a href="#community" className="hover:underline">Leaderboard</a>
                <a href="#about" className="hover:underline">Weekly Highlights</a>
            </nav>

            <Button variant="primary">Connect Wallet</Button>
        </header>
    );
};

export default Header;
