import HeroSection from "@/components/HeroSection";

const AboutUs = () => {
  const heroImages = [
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=600&fit=crop"
  ];

  const timelineData = [
    {
      year: 1997,
      title: "Foundation of Media Mandiri",
      description: "Started as a small creative agency with big dreams and innovative vision.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6b13d?w=400&h=300&fit=crop"
    },
    {
      year: 2000,
      title: "Digital Transformation",
      description: "Embraced digital media and online advertising solutions.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
    },
    {
      year: 2005,
      title: "International Expansion",
      description: "Opened our first international office and expanded to Asian markets.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
    },
    {
      year: 2010,
      title: "Award Recognition",
      description: "Received multiple international awards for creative excellence.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop"
    },
    {
      year: 2015,
      title: "Technology Innovation",
      description: "Launched our proprietary advertising technology platform.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop"
    },
    {
      year: 2020,
      title: "Global Partnership",
      description: "Established partnerships with major global brands and agencies.",
      image: "https://images.unsplash.com/photo-1552664688-cf412ec27db2?w=400&h=300&fit=crop"
    },
    {
      year: 2025,
      title: "Future Vision",
      description: "Leading the next generation of AI-powered creative solutions.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="pt-16">
      <HeroSection images={heroImages} title="About Us" />
      
      {/* Company Overview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
              Our Story
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              PT. Media Mandiri has been at the forefront of creative media advertising since 1997. 
              We combine innovative thinking with cutting-edge technology to deliver exceptional 
              results for our clients across the globe.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our mission is to create compelling brand experiences that resonate with audiences 
              and drive meaningful business growth through the power of creative communication.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">
            Our Journey Through Time
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30"></div>
            
            {timelineData.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:flex-row`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full z-10"></div>
                
                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"} ml-16 md:ml-0`}>
                  <div className="bg-card border border-border rounded-lg p-6 shadow-md hover-lift hover-glow">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full md:w-32 h-32 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-bold rounded-full mb-2">
                          {item.year}
                        </span>
                        <h3 className="text-xl font-bold text-primary mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;