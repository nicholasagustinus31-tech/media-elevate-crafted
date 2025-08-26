import { useState } from "react";
import HeroSection from "@/components/HeroSection";

const Markets = () => {
  const [hoveredContinent, setHoveredContinent] = useState<string | null>(null);

  const heroImages = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop"
  ];

  const continentData = [
    {
      name: "Asia",
      countries: ["Indonesia", "Singapore", "Malaysia", "Thailand", "Philippines", "Vietnam", "South Korea", "Japan"],
      clients: 245,
      projects: 1247,
      description: "Our strongest market with deep local expertise and extensive network"
    },
    {
      name: "Europe",
      countries: ["United Kingdom", "Germany", "France", "Netherlands", "Italy", "Spain"],
      clients: 89,
      projects: 456,
      description: "Premium market focus with luxury brands and high-end campaigns"
    },
    {
      name: "North America",
      countries: ["United States", "Canada"],
      clients: 67,
      projects: 298,
      description: "Strategic partnerships with leading global brands and agencies"
    },
    {
      name: "Australia",
      countries: ["Australia", "New Zealand"],
      clients: 34,
      projects: 187,
      description: "Growing presence in the Pacific region with innovative campaigns"
    },
    {
      name: "Middle East",
      countries: ["United Arab Emirates", "Saudi Arabia", "Qatar"],
      clients: 28,
      projects: 145,
      description: "Expanding operations in the dynamic Middle Eastern market"
    }
  ];

  const clientLogos = [
    "https://via.placeholder.com/120x60/f0f0f0/666?text=Client+1",
    "https://via.placeholder.com/120x60/f0f0f0/666?text=Client+2",
    "https://via.placeholder.com/120x60/f0f0f0/666?text=Client+3",
    "https://via.placeholder.com/120x60/f0f0f0/666?text=Client+4",
    "https://via.placeholder.com/120x60/f0f0f0/666?text=Client+5",
    "https://via.placeholder.com/120x60/f0f0f0/666?text=Client+6",
    "https://via.placeholder.com/120x60/f0f0f0/666?text=Client+7",
    "https://via.placeholder.com/120x60/f0f0f0/666?text=Client+8"
  ];

  return (
    <div className="pt-16">
      <HeroSection images={heroImages} title="Our Markets" />
      
      {/* Global Presence */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Global Presence
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our international network spans across five continents, enabling us to deliver 
              localized campaigns with global consistency and expertise.
            </p>
          </div>

          {/* World Map Representation */}
          <div className="bg-muted/30 rounded-lg p-8 mb-16">
            <div className="flex flex-wrap justify-center items-center gap-8">
              {continentData.map((continent, index) => (
                <div
                  key={continent.name}
                  className="relative"
                  onMouseEnter={() => setHoveredContinent(continent.name)}
                  onMouseLeave={() => setHoveredContinent(null)}
                >
                  <div 
                    className={`w-32 h-24 rounded-lg border-2 cursor-pointer transition-all duration-300 flex items-center justify-center ${
                      hoveredContinent === continent.name
                        ? "bg-primary border-primary text-primary-foreground scale-110"
                        : "bg-background border-border hover:border-primary/50"
                    }`}
                  >
                    <span className="font-semibold text-sm">{continent.name}</span>
                  </div>
                  
                  {hoveredContinent === continent.name && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-card border border-border rounded-lg shadow-lg p-4 z-10 w-64">
                      <h3 className="font-bold text-primary mb-2">{continent.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {continent.description}
                      </p>
                      <div className="grid grid-cols-2 gap-2 mb-3">
                        <div className="text-center">
                          <div className="font-bold text-primary">{continent.clients}</div>
                          <div className="text-xs text-muted-foreground">Clients</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-primary">{continent.projects}</div>
                          <div className="text-xs text-muted-foreground">Projects</div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Countries:</h4>
                        <div className="text-xs text-muted-foreground">
                          {continent.countries.join(", ")}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Market Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {continentData.map((continent, index) => (
              <div
                key={continent.name}
                className="bg-card border border-border rounded-lg p-6 hover-lift hover-glow text-center"
              >
                <h3 className="font-bold text-lg text-primary mb-2">
                  {continent.name}
                </h3>
                <div className="space-y-2">
                  <div>
                    <div className="text-2xl font-bold text-secondary">
                      {continent.clients}
                    </div>
                    <div className="text-sm text-muted-foreground">Clients</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">
                      {continent.projects}
                    </div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients & Partners */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">
            Our Clients & Partners
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-lg p-4 hover-lift transition-all duration-300 grayscale hover:grayscale-0"
              >
                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  className="w-full h-12 object-contain"
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground">
              Trusted by leading brands across industries worldwide
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Markets;