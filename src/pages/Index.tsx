import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Users, Globe, Award, TrendingUp } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const [currentBrandIndex, setCurrentBrandIndex] = useState(0);
  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    countries: 0,
    awards: 0
  });

  const heroImages = [
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=600&fit=crop"
  ];

  const premiumBrands = [
    {
      name: "MediaMax Pro",
      category: "Premium Advertising Network",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      description: "Reach premium audiences across Southeast Asia with our flagship advertising network."
    },
    {
      name: "CreativeHub Asia",
      category: "Design & Production Studio",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop",
      description: "Award-winning creative studio specializing in brand identity and campaign development."
    },
    {
      name: "DigitalEdge Solutions",
      category: "Digital Marketing Platform",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      description: "Cutting-edge digital marketing tools and analytics for modern businesses."
    },
    {
      name: "MediaTech Innovations",
      category: "Technology & Analytics",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      description: "Advanced media technology solutions powered by AI and machine learning."
    },
    {
      name: "GlobalReach Network",
      category: "International Media Buying",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      description: "Comprehensive media buying services across 25+ countries worldwide."
    }
  ];

  const services = [
    {
      icon: "🎨",
      title: "Creative Design",
      description: "Brand identity, visual communications, and award-winning creative campaigns"
    },
    {
      icon: "💻",
      title: "Digital Marketing",
      description: "SEO, SEM, social media, and comprehensive digital marketing strategies"
    },
    {
      icon: "📺",
      title: "Media Planning",
      description: "Strategic media placement across TV, radio, print, and digital platforms"
    },
    {
      icon: "🎯",
      title: "Brand Strategy",
      description: "Market research, brand positioning, and strategic communication planning"
    }
  ];

  const markets = [
    { region: "Southeast Asia", countries: 8, color: "bg-primary" },
    { region: "East Asia", countries: 4, color: "bg-secondary" },
    { region: "Europe", countries: 6, color: "bg-accent" },
    { region: "North America", countries: 2, color: "bg-primary" },
    { region: "Middle East", countries: 3, color: "bg-secondary" }
  ];

  // Auto-slide for premium brands
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBrandIndex((prev) => (prev + 1) % premiumBrands.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Counter animation for stats
  useEffect(() => {
    const targets = { projects: 2847, clients: 450, countries: 23, awards: 156 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    Object.entries(targets).forEach(([key, target]) => {
      let current = 0;
      const increment = target / steps;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setStats(prev => ({ ...prev, [key]: target }));
          clearInterval(timer);
        } else {
          setStats(prev => ({ ...prev, [key]: Math.floor(current) }));
        }
      }, interval);
    });
  }, []);

  return (
    <div className="pt-16">
      <HeroSection images={heroImages} />
      
      {/* Hero Content */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
            <span className="text-primary">Creative Media</span>
            <br />
            <span className="text-secondary">Advertising</span>
            <br />
            <span className="text-foreground">Excellence</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Transforming brands through innovative creative solutions and strategic media excellence 
            across global markets since 1997.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 px-8 py-4" asChild>
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4">
              <Play className="mr-2 h-5 w-5" />
              Watch Our Story
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="fade-in">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stats.projects.toLocaleString()}+
              </div>
              <div className="text-sm md:text-base opacity-90">Projects Delivered</div>
            </div>
            <div className="fade-in">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stats.clients}+
              </div>
              <div className="text-sm md:text-base opacity-90">Happy Clients</div>
            </div>
            <div className="fade-in">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stats.countries}+
              </div>
              <div className="text-sm md:text-base opacity-90">Countries Served</div>
            </div>
            <div className="fade-in">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stats.awards}+
              </div>
              <div className="text-sm md:text-base opacity-90">Awards Won</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Leading Creative Excellence Since 1997
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                PT. Media Mandiri has been at the forefront of creative media advertising, 
                combining innovative thinking with cutting-edge technology to deliver 
                exceptional results for our clients across the globe.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our international team of experts brings together diverse perspectives 
                and deep market knowledge to create campaigns that resonate with audiences 
                and drive meaningful business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link to="/about">Learn Our Story</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/peoples">Meet Our Team</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=400&fit=crop"
                  alt="Creative Team"
                  className="w-full h-64 object-cover rounded-lg hover-lift"
                />
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=300&fit=crop"
                  alt="Creative Work"
                  className="w-full h-48 object-cover rounded-lg hover-lift"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=300&fit=crop"
                  alt="Office"
                  className="w-full h-48 object-cover rounded-lg hover-lift"
                />
                <img
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&h=400&fit=crop"
                  alt="Strategy Session"
                  className="w-full h-64 object-cover rounded-lg hover-lift"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive creative and strategic solutions to elevate your brand 
              and connect with audiences across all touchpoints.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift hover-glow text-center">
                <CardContent className="p-8">
                  <div className="text-4xl mb-6">{service.icon}</div>
                  <h3 className="text-xl font-bold text-primary mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/services">
                Explore All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Markets Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Global Market Presence
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our international network spans across multiple continents, enabling us to deliver 
              localized campaigns with global consistency and expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {markets.map((market, index) => (
              <Card key={index} className="hover-lift hover-glow text-center">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${market.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-primary mb-2">
                    {market.region}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {market.countries} Countries
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/markets">
                View All Markets
                <Globe className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Premium Media Brands */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Premium Media Brands
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover our portfolio of premium media brands, each designed to deliver 
              exceptional value and innovative solutions for specific market needs.
            </p>
          </div>
          
          {/* Brand Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentBrandIndex * 100}%)` }}
              >
                {premiumBrands.map((brand, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <Card className="hover-glow mx-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                        <div className="relative h-64 md:h-80">
                          <img
                            src={brand.image}
                            alt={brand.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
                        </div>
                        <CardContent className="p-8 flex flex-col justify-center">
                          <span className="text-sm text-secondary font-medium bg-secondary/10 px-3 py-1 rounded-full mb-4 w-fit">
                            {brand.category}
                          </span>
                          <h3 className="text-2xl font-bold text-primary mb-4">
                            {brand.name}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {brand.description}
                          </p>
                        </CardContent>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Brand Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {premiumBrands.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentBrandIndex
                      ? "bg-primary scale-125"
                      : "bg-primary/30 hover:bg-primary/50"
                  }`}
                  onClick={() => setCurrentBrandIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-xl opacity-90 mb-12 max-w-3xl mx-auto">
            Let's discuss your next campaign and discover how we can help you 
            achieve extraordinary results in the marketplace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground" asChild>
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/projects">
                View Our Work
                <Award className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;