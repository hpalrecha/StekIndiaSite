import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS, EXTERNAL_RESOURCES, STEK_GLOBAL_URL } from "@/lib/constants";
import type { NavItem } from "@shared/schema";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  const renderNavItem = (item: NavItem, isMobile = false) => {
    const hasChildren = item.children && item.children.length > 0;
    const active = isActive(item.href);

    if (hasChildren) {
      return (
        <div
          key={item.label}
          className={`relative ${isMobile ? "" : "group"}`}
          onMouseEnter={() => !isMobile && setOpenDropdown(item.label)}
          onMouseLeave={() => !isMobile && setOpenDropdown(null)}
        >
          <button
            onClick={() => isMobile && setOpenDropdown(openDropdown === item.label ? null : item.label)}
            className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${
              active
                ? "text-primary"
                : isMobile
                ? "text-foreground hover:text-primary"
                : "text-white/90 hover:text-white"
            }`}
            data-testid={`nav-${item.label.toLowerCase()}`}
          >
            {item.label}
            <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`} />
          </button>
          
          {(isMobile ? openDropdown === item.label : openDropdown === item.label) && (
            <div
              className={`${
                isMobile
                  ? "pl-4 space-y-1"
                  : "absolute top-full left-0 mt-1 min-w-[200px] bg-white dark:bg-zinc-900 rounded-md shadow-lg border border-border py-2 z-50"
              }`}
            >
              {item.children!.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setOpenDropdown(null);
                  }}
                  className={`block px-4 py-2 text-sm transition-colors ${
                    isMobile
                      ? "text-muted-foreground hover:text-foreground"
                      : "text-foreground hover:bg-muted hover:text-primary"
                  }`}
                  data-testid={`nav-${child.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <Link
        key={item.href}
        href={item.href}
        onClick={() => setMobileMenuOpen(false)}
        className={`px-3 py-2 text-sm font-medium transition-colors ${
          active
            ? "text-primary"
            : isMobile
            ? "text-foreground hover:text-primary"
            : "text-white/90 hover:text-white"
        }`}
        data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-zinc-900 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2" data-testid="link-logo">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white tracking-tight">STEK</span>
              <span className="text-2xl font-light text-primary ml-1">INDIA</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.filter(item => item.label !== "Home").map((item) => renderNavItem(item))}
            
            <div className="relative group">
              <button
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors"
                data-testid="nav-resources"
              >
                Resources
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all absolute top-full left-0 mt-1 min-w-[200px] bg-white dark:bg-zinc-900 rounded-md shadow-lg border border-border py-2 z-50">
                {EXTERNAL_RESOURCES.map((resource) => (
                  <a
                    key={resource.href}
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                    data-testid={`nav-resource-${resource.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {resource.label}
                    <ExternalLink className="h-3 w-3 text-muted-foreground" />
                  </a>
                ))}
              </div>
            </div>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`${STEK_GLOBAL_URL}/become-installer`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button data-testid="button-become-installer">
                Become Installer
              </Button>
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white"
            data-testid="button-mobile-menu"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="flex flex-col py-4 px-4">
            {NAV_ITEMS.map((item) => renderNavItem(item, true))}
            
            <div className="mt-2 pt-2 border-t border-border">
              <p className="px-3 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Resources
              </p>
              {EXTERNAL_RESOURCES.map((resource) => (
                <a
                  key={resource.href}
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {resource.label}
                  <ExternalLink className="h-3 w-3" />
                </a>
              ))}
            </div>

            <div className="mt-4 px-3">
              <a
                href={`${STEK_GLOBAL_URL}/become-installer`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full" data-testid="button-become-installer-mobile">
                  Become Installer
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
