import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const heroImages = [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: ""
    });
  };

  const offices = [
    {
      city: "Jakarta",
      country: "Indonesia",
      address: "Jl. Sudirman No. 123, Jakarta Pusat 10110",
      phone: "+62 21 1234 5678",
      email: "jakarta@mediamandiri.com",
      type: "Headquarters"
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "1 Marina Bay Sands, Singapore 018971",
      phone: "+65 6234 5678",
      email: "singapore@mediamandiri.com",
      type: "Regional Office"
    },
    {
      city: "Bangkok",
      country: "Thailand",
      address: "999 Rama IV Road, Bangkok 10500",
      phone: "+66 2 234 5678",
      email: "bangkok@mediamandiri.com",
      type: "Branch Office"
    },
    {
      city: "Manila",
      country: "Philippines",
      address: "Ayala Avenue, Makati City 1226",
      phone: "+63 2 234 5678",
      email: "manila@mediamandiri.com",
      type: "Branch Office"
    }
  ];

  return (
    <div className="pt-16">
      <HeroSection images={heroImages} title="Contact Us" />
      
      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Let's Start Your Next Project
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ready to elevate your brand? Get in touch with our team of experts and 
              let's discuss how we can help you achieve your marketing goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="hover-glow">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name *</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Company</label>
                      <Input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Subject *</label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="Project inquiry"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="hover-glow">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">+62 21 1234 5678</p>
                      <p className="text-sm text-muted-foreground">Mon-Fri 9AM-6PM (GMT+7)</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">hello@mediamandiri.com</p>
                      <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p className="text-muted-foreground">Jl. Sudirman No. 123</p>
                      <p className="text-muted-foreground">Jakarta Pusat 10110, Indonesia</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-muted-foreground">Saturday: 9:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">
            Our Offices Worldwide
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <Card key={index} className="hover-lift hover-glow">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-2">
                      {office.type}
                    </span>
                    <h3 className="font-bold text-lg">{office.city}</h3>
                    <p className="text-sm text-muted-foreground">{office.country}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center text-sm text-muted-foreground mb-1">
                        <MapPin className="h-4 w-4 mr-2" />
                        Address
                      </div>
                      <p className="text-sm">{office.address}</p>
                    </div>
                    
                    <div>
                      <div className="flex items-center text-sm text-muted-foreground mb-1">
                        <Phone className="h-4 w-4 mr-2" />
                        Phone
                      </div>
                      <p className="text-sm">{office.phone}</p>
                    </div>
                    
                    <div>
                      <div className="flex items-center text-sm text-muted-foreground mb-1">
                        <Mail className="h-4 w-4 mr-2" />
                        Email
                      </div>
                      <p className="text-sm">{office.email}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;