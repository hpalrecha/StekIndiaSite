import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";
import { SiFacebook, SiInstagram, SiLinkedin, SiYoutube } from "react-icons/si";
import { COMPANY_INFO, NAV_ITEMS, PRODUCT_CATEGORIES, EXTERNAL_RESOURCES } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 dark:bg-zinc-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div>
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center">
                <span className="text-2xl font-bold tracking-tight">STEK</span>
                <span className="text-2xl font-light text-primary ml-1">INDIA</span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {COMPANY_INFO.tagline}. Leading provider of premium paint protection films and window tinting solutions in India.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={COMPANY_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-white/10 hover:bg-primary transition-colors"
                aria-label="Facebook"
                data-testid="link-facebook"
              >
                <SiFacebook className="h-4 w-4" />
              </a>
              <a
                href={COMPANY_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-white/10 hover:bg-primary transition-colors"
                aria-label="Instagram"
                data-testid="link-instagram"
              >
                <SiInstagram className="h-4 w-4" />
              </a>
              <a
                href={COMPANY_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-white/10 hover:bg-primary transition-colors"
                aria-label="LinkedIn"
                data-testid="link-linkedin"
              >
                <SiLinkedin className="h-4 w-4" />
              </a>
              <a
                href={COMPANY_INFO.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-white/10 hover:bg-primary transition-colors"
                aria-label="YouTube"
                data-testid="link-youtube"
              >
                <SiYoutube className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_ITEMS.filter(item => !item.children).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-primary transition-colors"
                    data-testid={`footer-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {EXTERNAL_RESOURCES.slice(0, 2).map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/70 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">
              Products
            </h3>
            <ul className="space-y-3">
              {PRODUCT_CATEGORIES.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/products/${category.slug}`}
                    className="text-sm text-white/70 hover:text-primary transition-colors"
                    data-testid={`footer-product-${category.slug}`}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-white/70">{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="text-sm text-white/70 hover:text-primary transition-colors"
                  data-testid="footer-phone"
                >
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-sm text-white/70 hover:text-primary transition-colors"
                  data-testid="footer-email"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/50">
              {currentYear} STEK India. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-sm text-white/50 hover:text-white/70 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-white/50 hover:text-white/70 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
