import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@developer.com",
      href: "mailto:hello@developer.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, CA",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  return (
    <section className="py-20 bg-muted/20" id="contact">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your project 
              and explore how we can create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-fade-in-left" style={{animationDelay: '0.2s'}}>
              <h3 className="text-2xl font-bold mb-8 text-foreground">
                Get in Touch
              </h3>
              
              {/* Contact Methods */}
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={info.title} className="flex items-center space-x-4 animate-slide-up" 
                       style={{animationDelay: `${0.4 + index * 0.1}s`}}>
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 animate-pulse-glow">
                      <info.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{info.title}</h4>
                      <a 
                        href={info.href}
                        className="text-muted-foreground hover:text-primary hover:scale-105 transition-all duration-300"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, socialIndex) => (
                    <Button
                      key={social.label}
                      variant="outline"
                      size="sm"
                      className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 hover:scale-110 transition-all duration-300 animate-bounce-slow"
                      style={{animationDelay: `${0.8 + socialIndex * 0.1}s`}}
                    >
                      <social.icon className="h-4 w-4" />
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card 
              className="bg-gradient-card border-primary/20 shadow-elegant hover:shadow-glow hover:scale-105 transition-all duration-500 animate-fade-in-right"
              style={{animationDelay: '0.4s'}}
            >
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="animate-slide-up" style={{animationDelay: '0.6s'}}>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <Input 
                        id="firstName"
                        placeholder="John"
                        className="bg-background/50 border-primary/20 focus:border-primary/50 hover:scale-105 transition-all duration-300"
                      />
                    </div>
                    <div className="animate-slide-up" style={{animationDelay: '0.7s'}}>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <Input 
                        id="lastName"
                        placeholder="Doe"
                        className="bg-background/50 border-primary/20 focus:border-primary/50 hover:scale-105 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="animate-slide-up" style={{animationDelay: '0.8s'}}>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="bg-background/50 border-primary/20 focus:border-primary/50 hover:scale-105 transition-all duration-300"
                    />
                  </div>

                  <div className="animate-slide-up" style={{animationDelay: '0.9s'}}>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input 
                      id="subject"
                      placeholder="Project Discussion"
                      className="bg-background/50 border-primary/20 focus:border-primary/50 hover:scale-105 transition-all duration-300"
                    />
                  </div>

                  <div className="animate-slide-up" style={{animationDelay: '1s'}}>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea 
                      id="message"
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="bg-background/50 border-primary/20 focus:border-primary/50 resize-none hover:scale-105 transition-all duration-300"
                    />
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 shadow-glow hover:scale-105 transition-all duration-300 animate-pulse-glow">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center animate-scale-in" style={{animationDelay: '0.6s'}}>
            <Card className="bg-gradient-primary p-8 hover:scale-105 transition-transform duration-500 animate-glow">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Whether you need a complete web application, a stunning frontend, 
                or technical consultation, I'm here to help bring your vision to life.
              </p>
              <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:scale-105 transition-all duration-300">
                Schedule a Call
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;