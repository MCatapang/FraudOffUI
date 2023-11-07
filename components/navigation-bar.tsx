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
      title: "Github",
      description: "Explore the source code behind this project.",
      href: "https://github.com/MCatapang/FraudOffUI"
    },
  ]

  return (
    <NavigationMenu>
      <Link href="/">
        <Image
          src="/fraudofflogo.png"
          alt="FraudOff Logo"
          width={40}
          height={24}
          priority
        />
      </Link>

      <NavigationMenuList className="justify-end">
        <NavigationMenuItem>
          <Link href="/authentication/log-in" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Log-In
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/authentication/register" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Register
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuTrigger>Documentation</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/docs"
                    target="_blank"
                    >
                    <Icons.logo className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
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
