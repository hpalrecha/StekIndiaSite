import { useState } from "react";
import { Link } from "wouter";
import { ChevronRight, ArrowRight, ExternalLink, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedHero } from "@/components/ui/animated-card";
import { STEK_GLOBAL_URL } from "@/lib/constants";

import installersImage from "@assets/stock_images/professional_auto_de_0dbcaf65.jpg";

const INSTALLER_LOCATOR_URL = "https://www.stekautomotive.com/find-an-installer";

export default function InstallerLocator() {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div>
      <AnimatedHero
        backgroundImage={installersImage}
        title="Find a Certified Installer"
        description="Locate a STEK certified installer near you for professional paint protection film and window tinting installation services."
      >
        <nav className="flex items-center gap-2 text-sm text-white/60 mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-white">Find Installer</span>
        </nav>
        <div className="flex flex-wrap gap-4">
          <a
            href={INSTALLER_LOCATOR_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 gap-2"
              data-testid="button-open-fullscreen"
            >
              Open in New Tab
              <ExternalLink className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </AnimatedHero>

      <section className="py-8 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-6"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-foreground">
                    STEK Global Installer Network
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Search and find certified installers worldwide
                  </p>
                </div>
              </div>
              <a
                href={INSTALLER_LOCATOR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline flex items-center gap-1"
              >
                Having trouble? Open in new tab
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative w-full rounded-md overflow-hidden border border-border bg-muted"
            style={{ minHeight: "700px" }}
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {!iframeLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary mx-auto mb-4"></div>
                  <p className="text-muted-foreground">Loading installer locator...</p>
                </div>
              </div>
            )}
            <iframe
              src={INSTALLER_LOCATOR_URL}
              title="STEK Installer Locator"
              className="w-full h-full border-0"
              style={{ minHeight: "700px" }}
              onLoad={() => setIframeLoaded(true)}
              allow="geolocation"
              loading="lazy"
              data-testid="iframe-installer-locator"
            />
          </motion.div>

          <motion.p
            className="text-xs text-muted-foreground text-center mt-4"
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Installer data provided by STEK Automotive global network. 
            <a
              href={INSTALLER_LOCATOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline ml-1"
            >
              Visit stekautomotive.com
            </a>
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Want to Become a Certified Installer?
            </h2>
            <p className="text-muted-foreground mb-8">
              Join our network of professional installers and grow your business with STEK India.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`${STEK_GLOBAL_URL}/become-installer`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="gap-2" data-testid="button-become-installer-locator">
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <Link href="/solutions/installers">
                <Button size="lg" variant="outline" data-testid="button-learn-more-installer">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
