import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const heroImages = [
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=600&fit=crop"
  ];

  const serviceCategories = [
    {
      title: "Digital Marketing",
      icon: "💻",
      description: "Comprehensive digital marketing solutions for modern businesses",
      services: [
        "Social Media Marketing & Management",
        "Search Engine Optimization (SEO)",
        "Pay-Per-Click Advertising (PPC)",
        "Email Marketing Campaigns",
        "Content Marketing Strategy",
        "Influencer Marketing",
        "Digital Analytics & Reporting"
      ],
      details: "Our digital marketing team leverages cutting-edge tools and strategies to maximize your online presence. We create data-driven campaigns that deliver measurable results and ROI."
    },
    {
      title: "Creative Design",
      icon: "🎨",
      description: "Stunning visual communications that capture your brand essence",
      services: [
        "Brand Identity & Logo Design",
        "Print Advertisement Design",
        "Digital Banner & Display Ads",
        "Packaging Design",
        "Brochure & Catalog Design",
        "Exhibition & Event Materials",
        "Motion Graphics & Animation"
      ],
      details: "Our creative team combines artistic vision with strategic thinking to produce compelling designs that communicate your message effectively and beautifully."
    },
    {
      title: "Media Planning & Buying",
      icon: "📺",
      description: "Strategic media placement for maximum reach and impact",
      services: [
        "Television Advertising",
        "Radio Commercial Placement",
        "Print Media Advertising",
        "Outdoor & Billboard Advertising",
        "Digital Media Buying",
        "Programmatic Advertising",
        "Media Analytics & Optimization"
      ],
      details: "We negotiate the best rates and placements across all media channels, ensuring your message reaches the right audience at the right time with optimal budget efficiency."
    },
    {
      title: "Brand Strategy",
      icon: "🎯",
      description: "Comprehensive brand development and positioning strategies",
      services: [
        "Brand Positioning & Strategy",
        "Market Research & Analysis",
        "Competitive Analysis",
        "Brand Guidelines Development",
        "Messaging & Communication Strategy",
        "Brand Audit & Assessment",
        "Rebranding & Brand Evolution"
      ],
      details: "Our strategists work closely with your team to develop powerful brand positioning that differentiates you in the marketplace and resonates with your target audience."
    },
    {
      title: "Production Services",
      icon: "🎬",
      description: "Full-service production for all your multimedia needs",
      services: [
        "Television Commercial Production",
        "Video Content Creation",
        "Photography Services",
        "Audio Production & Recording",
        "Live Event Production",
        "Virtual Event Solutions",
        "Post-Production Services"
      ],
      details: "From concept to completion, our production team handles every aspect of content creation with state-of-the-art equipment and experienced professionals."
    },
    {
      title: "Digital Solutions",
      icon: "⚡",
      description: "Technology-driven solutions for modern marketing challenges",
      services: [
        "Website Design & Development",
        "Mobile App Development",
        "E-commerce Solutions",
        "Marketing Automation",
        "CRM Integration",
        "Data Analytics Platforms",
        "Custom Software Development"
      ],
      details: "We build robust digital platforms and tools that streamline your marketing efforts and provide valuable insights into customer behavior and campaign performance."
    }
  ];

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <div className="pt-16">
      <HeroSection images={heroImages} title="Our Services" />
      
      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Complete Marketing Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer a full spectrum of creative and strategic services to help your brand 
              achieve its goals and connect with audiences across all touchpoints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <Card 
                key={index} 
                className="hover-lift hover-glow cursor-pointer transition-all duration-300"
              >
                <CardHeader>
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <CardTitle className="text-primary">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <Button
                    variant="ghost"
                    className="w-full justify-between"
                    onClick={() => toggleService(index)}
                  >
                    View Details
                    {expandedService === index ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </Button>
                  
                  {expandedService === index && (
                    <div className="mt-4 space-y-4 animate-in slide-in-from-top-5 duration-300">
                      <p className="text-sm text-muted-foreground">
                        {category.details}
                      </p>
                      
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Services Include:</h4>
                        <ul className="space-y-1">
                          {category.services.map((service, serviceIndex) => (
                            <li 
                              key={serviceIndex}
                              className="text-sm text-muted-foreground flex items-center"
                            >
                              <span className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                              {service}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;