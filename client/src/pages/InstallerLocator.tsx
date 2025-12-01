import { useState } from "react";
import { Link } from "wouter";
import { Search, MapPin, Phone, Mail, Globe, ChevronRight, Filter, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { STEK_GLOBAL_URL } from "@/lib/constants";

const states = [
  "All States",
  "Maharashtra",
  "Delhi",
  "Karnataka",
  "Tamil Nadu",
  "Gujarat",
  "Rajasthan",
  "West Bengal",
  "Telangana",
  "Kerala",
  "Punjab",
];

const sampleInstallers = [
  {
    id: "1",
    name: "AutoShield Premium",
    address: "42, Linking Road, Bandra West",
    city: "Mumbai",
    state: "Maharashtra",
    phone: "+91 98765 43210",
    email: "info@autoshield.in",
    website: "https://autoshield.in",
    certificationLevel: "Platinum",
  },
  {
    id: "2",
    name: "PPF Masters Delhi",
    address: "A-23, Rajouri Garden",
    city: "New Delhi",
    state: "Delhi",
    phone: "+91 98765 12345",
    email: "contact@ppfmasters.com",
    website: "https://ppfmasters.com",
    certificationLevel: "Gold",
  },
  {
    id: "3",
    name: "Bangalore Auto Care",
    address: "15, Indiranagar 100ft Road",
    city: "Bangalore",
    state: "Karnataka",
    phone: "+91 87654 32109",
    email: "hello@blrautocare.in",
    certificationLevel: "Platinum",
  },
  {
    id: "4",
    name: "Chennai PPF Studio",
    address: "789, Anna Salai",
    city: "Chennai",
    state: "Tamil Nadu",
    phone: "+91 76543 21098",
    email: "studio@chennaippf.com",
    certificationLevel: "Gold",
  },
  {
    id: "5",
    name: "Gujarat Auto Protection",
    address: "Satellite Road, Ahmedabad",
    city: "Ahmedabad",
    state: "Gujarat",
    phone: "+91 65432 10987",
    email: "info@gujaratauto.in",
    certificationLevel: "Silver",
  },
  {
    id: "6",
    name: "Pune Premium Wraps",
    address: "FC Road, Shivajinagar",
    city: "Pune",
    state: "Maharashtra",
    phone: "+91 54321 09876",
    email: "wrap@punepremium.com",
    certificationLevel: "Gold",
  },
];

const certificationColors: Record<string, string> = {
  Platinum: "bg-zinc-800 text-white",
  Gold: "bg-amber-500 text-white",
  Silver: "bg-zinc-400 text-white",
};

export default function InstallerLocator() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedState, setSelectedState] = useState("All States");

  const filteredInstallers = sampleInstallers.filter((installer) => {
    const matchesSearch =
      installer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      installer.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      installer.address.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesState =
      selectedState === "All States" || installer.state === selectedState;

    return matchesSearch && matchesState;
  });

  return (
    <div>
      <section className="relative py-20 bg-zinc-900 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Installer Locator</span>
          </nav>
          
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Find a Certified Installer
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Locate a STEK certified installer near you for professional paint protection film 
              and window tinting installation services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-muted/50 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by name, city, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                data-testid="input-installer-search"
              />
            </div>
            <div className="flex gap-4">
              <Select value={selectedState} onValueChange={setSelectedState}>
                <SelectTrigger className="w-[180px]" data-testid="select-state">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Select State" />
                </SelectTrigger>
                <SelectContent>
                  {states.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-muted-foreground">
              Showing <span className="font-medium text-foreground">{filteredInstallers.length}</span> certified installers
              {selectedState !== "All States" && ` in ${selectedState}`}
            </p>
          </div>

          {filteredInstallers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredInstallers.map((installer) => (
                <Card key={installer.id} className="hover-elevate active-elevate-2 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="text-lg font-semibold text-foreground">
                        {installer.name}
                      </h3>
                      <Badge className={certificationColors[installer.certificationLevel] || ""}>
                        {installer.certificationLevel}
                      </Badge>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-4 w-4 text-primary shrink-0 mt-1" />
                        <div className="text-sm text-muted-foreground">
                          <p>{installer.address}</p>
                          <p>{installer.city}, {installer.state}</p>
                        </div>
                      </div>
                      
                      {installer.phone && (
                        <div className="flex items-center gap-3">
                          <Phone className="h-4 w-4 text-primary shrink-0" />
                          <a
                            href={`tel:${installer.phone}`}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {installer.phone}
                          </a>
                        </div>
                      )}
                      
                      {installer.email && (
                        <div className="flex items-center gap-3">
                          <Mail className="h-4 w-4 text-primary shrink-0" />
                          <a
                            href={`mailto:${installer.email}`}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors truncate"
                          >
                            {installer.email}
                          </a>
                        </div>
                      )}
                      
                      {installer.website && (
                        <div className="flex items-center gap-3">
                          <Globe className="h-4 w-4 text-primary shrink-0" />
                          <a
                            href={installer.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-muted-foreground hover:text-primary transition-colors truncate"
                          >
                            Visit Website
                          </a>
                        </div>
                      )}
                    </div>
                    
                    <Button variant="outline" className="w-full" data-testid={`button-contact-installer-${installer.id}`}>
                      Contact Installer
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                No Installers Found
              </h3>
              <p className="text-muted-foreground mb-6">
                We couldn't find any installers matching your search criteria.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedState("All States");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
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
          </div>
        </div>
      </section>
    </div>
  );
}
