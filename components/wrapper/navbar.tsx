"use client"
import Link from 'next/link';
import * as React from "react";
import { DollarSign } from "lucide-react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "../ui/button";
import { SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { UserProfile } from "../user-profile";
import ModeToggle from "../mode-toggle";
import { BlocksIcon } from "lucide-react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import config from "@/config";
import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/nextjs";
import { Dialog, DialogClose } from "@radix-ui/react-dialog";

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Marketing Page",
        href: "/marketing-page",
        description: "Write some wavy here to get them to click.",
    },
    {
        title: "Marketing Page",
        href: "/marketing-page",
        description: "Write some wavy here to get them to click.",
    },
    {
        title: "Marketing Page",
        href: "/marketing-page",
        description: "Write some wavy here to get them to click.",
    },
];

export default function NavBar() {
    let userId = null;
    if (config?.auth?.enabled) {
        const user = useAuth();
        userId = user?.userId;
    }

    return (
        <header className="px-4 lg:px-6 h-14 flex items-center fixed w-full justify-between border-b z-10 dark:bg-black dark:bg-opacity-50 bg-white">
            <Link className="flex items-center justify-center" href="/">
                <DollarSign className="h-6 w-6" />
                <span className="text-lg font-bold">Expense Wise</span>
            </Link>
            <nav className="flex gap-4 sm:gap-6 items-center">
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
                    Features
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
                    How It Works
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
                    Pricing
                </Link>
                {userId && <UserProfile />}
                <ModeToggle />
            </nav>
        </header>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";
