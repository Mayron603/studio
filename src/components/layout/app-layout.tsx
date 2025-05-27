
"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { APP_NAME, NAV_ITEMS } from "@/lib/constants"; // Updated to NAV_ITEMS
import {
  LayoutDashboard,
  ScrollText,
  Gavel,
  Users,
  FileText,
  ClipboardEdit,
  Plane, // Added Plane icon
  // Settings, // Removed
  // LogOut, // Removed
} from "lucide-react";
import type { NavItem } from "@/lib/constants";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // Removed
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"; // Removed

// Import the logo from the project root
import logoImage from '../../../transporte.png';

// Moved navItems to constants.ts, now importing NAV_ITEMS

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const pathname = usePathname();

  return (
    <SidebarProvider defaultOpen>
      <Sidebar className="border-r border-sidebar-border" collapsible="icon">
        <SidebarHeader className="p-4 border-b border-sidebar-border">
          <Link href="/" className="flex items-center gap-2 text-sidebar-foreground hover:text-sidebar-accent-foreground transition-colors">
            <Image
              src={logoImage}
              alt={`${APP_NAME} Logo`}
              width={408}
              height={612}
              className="h-7 w-auto group-data-[collapsible=icon]:h-6 group-data-[collapsible=icon]:w-auto"
              priority
            />
            <span className="text-lg font-semibold group-data-[collapsible=icon]:hidden">{APP_NAME}</span>
          </Link>
        </SidebarHeader>
        <SidebarContent className="p-2">
          <SidebarMenu>
            {NAV_ITEMS.map((item) => ( // Using NAV_ITEMS from constants
              <SidebarMenuItem key={item.href}>
                <Link href={item.href} legacyBehavior passHref>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                    tooltip={{ children: item.label, className: "bg-popover text-popover-foreground" }}
                    className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-primary data-[active=true]:text-sidebar-primary-foreground"
                  >
                    <a>
                      <item.icon />
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <SidebarInset className="flex flex-col">
        <header className="sticky top-0 z-10 flex items-center justify-between h-16 px-4 bg-background/80 backdrop-blur-sm border-b md:px-6">
          <div>
             <SidebarTrigger className="md:flex" /> {/* Ensure trigger is always visible */}
          </div>
          <div className="flex-1 text-center md:text-left">
            {/* Optional: Dynamic Page Title can go here */}
          </div>
          {/* User profile DropdownMenu removed */}
        </header>
        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-auto">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
