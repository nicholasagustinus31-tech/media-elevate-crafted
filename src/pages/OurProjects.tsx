import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import { Card, CardContent } from "@/components/ui/card";

const OurProjects = () => {
  const [projectsCompleted, setProjectsCompleted] = useState(0);
  const [clientsServed, setClientsServed] = useState(0);
  const [categoriesServed, setCategoriesServed] = useState(0);
  const [yearsExperience, setYearsExperience] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop"
  ];

  // Counter animation
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const counters = [
      { target: 2847, setter: setProjectsCompleted },
      { target: 450, setter: setClientsServed },
      { target: 25, setter: setCategoriesServed },
      { target: 28, setter: setYearsExperience }
    ];

    counters.forEach(({ target, setter }) => {
      let current = 0;
      const increment = target / steps;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(current));
        }
      }, interval);
    });
  }, []);

  const projectCategories = [
    {
      name: "Automotive",
      count: 385,
      image: "https://images.unsplash.com/photo-1494976688153-6b357480eba8?w=400&h=300&fit=crop",
      description: "Car brands, dealerships, and automotive services"
    },
    {
      name: "Technology",
      count: 298,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      description: "Tech companies, software, and digital services"
    },
    {
      name: "Finance & Banking",
      count: 245,
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop",
      description: "Banks, fintech, and financial services"
    },
    {
      name: "Healthcare",
      count: 189,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      description: "Hospitals, pharmaceuticals, and medical devices"
    },
    {
      name: "FMCG",
      count: 467,
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      description: "Consumer goods and retail brands"
    },
    {
      name: "Tourism & Travel",
      count: 156,
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
      description: "Hotels, airlines, and travel services"
    },
    {
      name: "Real Estate",
      count: 134,
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
      description: "Property developers and real estate agencies"
    },
    {
      name: "Education",
      count: 98,
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop",
      description: "Universities, schools, and educational platforms"
    }
  ];

  const featuredProjects = [
    {
      title: "Global Car Launch Campaign",
      client: "Premium Automotive Brand",
      category: "Automotive",
      year: "2024",
      image: "https://images.unsplash.com/photo-1494976688153-6b357480eba8?w=600&h=400&fit=crop",
      description: "Multi-channel campaign for luxury vehicle launch across 15 countries"
    },
    {
      title: "Digital Banking Revolution",
      client: "Leading Indonesian Bank",
      category: "Finance",
      year: "2024",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop",
      description: "Complete digital transformation and brand repositioning campaign"
    },
    {
      title: "Sustainable Energy Initiative",
      client: "Green Tech Corporation",
      category: "Technology",
      year: "2023",
      image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&h=400&fit=crop",
      description: "Award-winning sustainability campaign across Southeast Asia"
    }
  ];

  return (
    <div className="pt-16">
      <HeroSection images={heroImages} title="Our Projects" />
      
      {/* Statistics Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="fade-in">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {projectsCompleted.toLocaleString()}+
              </div>
              <div className="text-sm md:text-base opacity-90">
                Projects Completed
              </div>
            </div>
            <div className="fade-in">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {clientsServed}+
              </div>
              <div className="text-sm md:text-base opacity-90">
                Clients Served
              </div>
            </div>
            <div className="fade-in">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {categoriesServed}+
              </div>
              <div className="text-sm md:text-base opacity-90">
                Industry Categories
              </div>
            </div>
            <div className="fade-in">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {yearsExperience}
              </div>
              <div className="text-sm md:text-base opacity-90">
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">
            Project Categories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectCategories.map((category, index) => (
              <Card key={index} className="hover-lift hover-glow overflow-hidden">
                <div className="relative">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-lg mb-1">{category.name}</h3>
                    <p className="text-sm opacity-90">{category.count} projects</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="hover-lift hover-glow overflow-hidden">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {project.year}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-2">
                    <span className="text-sm text-secondary font-medium bg-secondary/10 px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="font-bold text-xl text-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {project.client}
                  </p>
                  <p className="text-sm">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurProjects;