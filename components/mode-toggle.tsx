"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme, themes, theme } = useTheme();
  const activeThemeIndicator = () => <> &#9679;</>

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((themeName) => 
          <DropdownMenuItem key={themeName} onClick={() => setTheme(themeName)}>
            {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
            {themeName === theme ? activeThemeIndicator() : ""} 
          </DropdownMenuItem >
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
