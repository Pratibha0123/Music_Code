"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { getPagePath, PageName } from "@/utils/navigation";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <Link href={getPagePath("Home")}>
                    <MenuItem setActive={setActive} active={active} item="Home" />
                </Link>

                <Link href={getPagePath("About")}>
                    <MenuItem setActive={setActive} active={active} item="About" />
                </Link>

                <MenuItem setActive={setActive} active={active} item="Courses">
                    <div className="flex flex-col space-y-4 text-sm">
                        <NamedHoveredLink name="All Courses" />
                        <NamedHoveredLink name="Basic" />
                        <NamedHoveredLink name="Advanced Composition" />
                        <NamedHoveredLink name="Songwriting" />
                        <NamedHoveredLink name="Music Production" />
                    </div>
                </MenuItem>

                <Link href={getPagePath("Contact")}>
                    <MenuItem setActive={setActive} active={active} item="Contact" />
                </Link>
            </Menu>
        </div>
    );
}

// Helper component for named navigation
const NamedHoveredLink = ({ name }: { name: PageName }) => {
    return (
        <HoveredLink href={getPagePath(name)}>
            {name}
        </HoveredLink>
    );
};

export default Navbar;