"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { ModeToggle } from "./mode-toggle"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image"

export default function NavigationBar() {
  const documentationNavLinks: NavLink[] = [
    {
      title: "Manuals",
      description: "Learn how to use the project's various features.",
      href: "/docs#manuals"
    },
    {
      title: "License",
      description: "Explore the restrictions for the project's distribution and reuse.",
      href: "/docs#is-it-licensed"
    },
    {
      title: "API",
      description: "Programmatically interact with our solution in your own apps.",
      href: "/docs#api"
    },
  ]

  return (
    <NavigationMenu className="z-20 justify-between">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="/">
            <Image
              className="pointer-events-none"
              src="/fraudofflogo.png"
              alt="FraudOff Logo"
              width={40}
              height={40}
              priority
            />
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="flex justify-center items-center font-bold text-lg">
          <NavigationMenuLink href="/">
            <h1 className="select-none text-transparent bg-clip-text bg-gradient-to-l from-pink-500 to-purple-500">FraudOff</h1>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/authentication" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Get Started
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Documentation</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              <li className="group row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/docs"
                    target="_blank"
                    >
                    <Icons.logo className="h-6 w-6" />
                    <div className="transition group-hover:text-accent-foreground mb-2 mt-4 text-lg font-medium">
                      Docs
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Check out our docs on how to detect malicious activity - 
                      so you can tell the perps to Fraud Off!
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              {documentationNavLinks.map((link) => 
                <ListItem key={link.title} title={link.title} href={link.href} target={"_blank"}>
                  {link.description}
                </ListItem>
              )}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <ModeToggle/>
      </NavigationMenuList>
    </NavigationMenu>
  )
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
  )
})
ListItem.displayName = "ListItem"
