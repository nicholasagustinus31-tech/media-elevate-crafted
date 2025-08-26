import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Peoples = () => {
  const [selectedDivision, setSelectedDivision] = useState<"creative" | "digital">("creative");

  const heroImages = [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=600&fit=crop"
  ];

  const creativeTeam = [
    {
      name: "Sarah Johnson",
      position: "Creative Director",
      experience: "12 years",
      specialty: "Brand Strategy & Creative Leadership",
      image: "https://images.unsplash.com/photo-1494790108755-2616c6dc0c02?w=400&h=400&fit=crop"
    },
    {
      name: "Michael Chen",
      position: "Art Director",
      experience: "8 years",
      specialty: "Visual Identity & Print Design",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    },
    {
      name: "Elena Rodriguez",
      position: "Senior Copywriter",
      experience: "10 years",
      specialty: "Brand Messaging & Content Strategy",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    },
    {
      name: "David Kim",
      position: "Motion Graphics Designer",
      experience: "6 years",
      specialty: "Animation & Video Production",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      name: "Lisa Thompson",
      position: "Brand Strategist",
      experience: "9 years",
      specialty: "Market Research & Brand Positioning",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop"
    },
    {
      name: "Carlos Mendez",
      position: "Creative Producer",
      experience: "11 years",
      specialty: "Campaign Production & Project Management",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    }
  ];

  const digitalTeam = [
    {
      name: "Alex Turner",
      position: "Digital Strategy Director",
      experience: "10 years",
      specialty: "Digital Transformation & Technology Strategy",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop"
    },
    {
      name: "Maya Patel",
      position: "UX/UI Designer",
      experience: "7 years",
      specialty: "User Experience & Interface Design",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop"
    },
    {
      name: "James Wilson",
      position: "Digital Marketing Manager",
      experience: "8 years",
      specialty: "SEM, SEO & Social Media Marketing",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f87?w=400&h=400&fit=crop"
    },
    {
      name: "Sophie Martin",
      position: "Data Analyst",
      experience: "5 years",
      specialty: "Marketing Analytics & Performance Optimization",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop"
    },
    {
      name: "Ryan O'Connor",
      position: "Frontend Developer",
      experience: "6 years",
      specialty: "Web Development & Mobile Applications",
      image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop"
    },
    {
      name: "Emma Zhang",
      position: "Digital Content Manager",
      experience: "4 years",
      specialty: "Content Strategy & Social Media Management",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
    }
  ];

  const currentTeam = selectedDivision === "creative" ? creativeTeam : digitalTeam;
  const currentBrandColor = selectedDivision === "creative" ? "primary" : "accent";

  return (
    <div className="pt-16">
      <HeroSection images={heroImages} title="Our People" />
      
      {/* Division Selection */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Meet Our Expert Teams
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Our talented professionals are divided into specialized divisions, each bringing 
              unique expertise and passion to deliver exceptional results for our clients.
            </p>
            
            <div className="flex justify-center gap-4">
              <Button
                variant={selectedDivision === "creative" ? "default" : "outline"}
                onClick={() => setSelectedDivision("creative")}
                className={`px-8 py-3 ${
                  selectedDivision === "creative" 
                    ? "bg-primary hover:bg-primary/90" 
                    : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                Creative Division
              </Button>
              <Button
                variant={selectedDivision === "digital" ? "default" : "outline"}
                onClick={() => setSelectedDivision("digital")}
                className={`px-8 py-3 ${
                  selectedDivision === "digital" 
                    ? "bg-accent hover:bg-accent/90" 
                    : "border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                Digital Division
              </Button>
            </div>
          </div>

          {/* Division Description */}
          <div className="text-center mb-16">
            {selectedDivision === "creative" ? (
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Creative Division
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our Creative Division is the heart of innovative thinking and artistic excellence. 
                  This team combines strategic insight with creative vision to develop compelling 
                  campaigns that resonate with audiences and drive brand success. From concept 
                  development to final execution, they craft memorable experiences that tell your 
                  brand's story in the most impactful way.
                </p>
              </div>
            ) : (
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-accent mb-4">
                  Digital Division
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our Digital Division represents the cutting edge of technology and digital marketing. 
                  This specialized team leverages the latest digital tools, platforms, and analytics 
                  to maximize your online presence and engagement. They focus on data-driven strategies, 
                  user experience optimization, and innovative digital solutions that deliver measurable 
                  results in the digital landscape.
                </p>
              </div>
            )}
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentTeam.map((member, index) => (
              <Card 
                key={`${selectedDivision}-${index}`} 
                className="hover-lift hover-glow overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-${currentBrandColor}/80 to-transparent`} />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                    <p className="text-sm opacity-90">{member.position}</p>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">Experience:</span>
                      <p className="text-sm">{member.experience}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">Specialty:</span>
                      <p className="text-sm">{member.specialty}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Team Statistics */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className={`text-3xl font-bold ${selectedDivision === "creative" ? "text-primary" : "text-accent"} mb-2`}>
                25+
              </div>
              <div className="text-sm text-muted-foreground">
                Team Members
              </div>
            </div>
            <div>
              <div className={`text-3xl font-bold ${selectedDivision === "creative" ? "text-primary" : "text-accent"} mb-2`}>
                150+
              </div>
              <div className="text-sm text-muted-foreground">
                Awards Won
              </div>
            </div>
            <div>
              <div className={`text-3xl font-bold ${selectedDivision === "creative" ? "text-primary" : "text-accent"} mb-2`}>
                98%
              </div>
              <div className="text-sm text-muted-foreground">
                Client Satisfaction
              </div>
            </div>
            <div>
              <div className={`text-3xl font-bold ${selectedDivision === "creative" ? "text-primary" : "text-accent"} mb-2`}>
                15+
              </div>
              <div className="text-sm text-muted-foreground">
                Years Average Experience
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Peoples;