// Header code here
"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { Poppins } from "next/font/google";

const poppins=Poppins({
  weight: ['400'],
   subsets: ['latin']
})

export function NavbarDemo() {
  const navItems = [
    {
      name: "Events",
      link: "#features",
    },
    {
      name: "Our Team",
      link: "#pricing",
    },
    {
      name: "Leaderboard",
      link: "#contact",
    },
    {
        name: "Workshop",
        link: "",
    },
    {
        name: "About Us",
        link: ""
    },
    {
        name: "Alumni",
        link: "",
    },
    {
        name:"Contact Us",
        link: ""
    }
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative   w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex  items-center gap-4">
            <NavbarButton variant="secondary">Login</NavbarButton>
            <NavbarButton variant="primary">Sign Up</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`relative text-black ${poppins.className}  dark:text-neutral-300`}>
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full  flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full">
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full">
                Sign Up
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    
      {/* Navbar */}
    </div>
  );
}
