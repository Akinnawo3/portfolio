import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  // Form state
  const initialData = {
    email: "",
    firstName: "",
    lastName: "",
    subject: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Track if form section is in view
  const { ref: formRef, inView: formInView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const { email, firstName, lastName, subject, message } = formData;

  // Clear messages when user starts typing or scrolls away
  useEffect(() => {
    if (!formInView) {
      setSuccess(null);
      setError(null);
    }
  }, [formInView]);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "victorakinnawo@gmail.com",
      href: "mailto:victorakinnawo@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+234 (913) 771 6182",
      href: "tel:+2349137716182",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Lugbe, Federal Capital Territory, Abuja",
      href: "https://www.google.com/maps/place/Lugbe,+Abuja",
    },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Akinnawo3", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/victor-akinnawo", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/akinnawo3", label: "Twitter" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;

    // Clear messages when user starts typing
    if (success || error) {
      setSuccess(null);
      setError(null);
    }

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    // Show loading toast
    const loadingToast = toast({
      title: "Sending your message",
      description: "Please wait while we process your request...",
      variant: "default",
      duration: Infinity,
    });

    const serviceID = "service_y5b65ia";
    const templateID = "template_uz4owk3";
    const publicKey = "NbBXZnYo69RBCBav7";

    const templateParams = {
      from_name: `${firstName} ${lastName}`,
      from_email: email,
      to_name: "Victor Akinnawo",
      subject,
      message,
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      // Dismiss loading toast and show success
      loadingToast.dismiss();
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      // Set success message
      setSuccess("Your message has been sent successfully!");

      // Reset form
      setFormData(initialData);
    } catch (err) {
      console.error("Failed to send message:", err);

      // Dismiss loading toast and show error
      loadingToast.dismiss();
      toast({
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again later.",
        variant: "destructive",
        action: (
          <button onClick={() => handleSubmit(e)} className="text-sm font-medium hover:underline">
            Retry
          </button>
        ),
      });

      // Set error message
      setError("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-muted/20" id="contact" ref={formRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Let's Work Together</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Ready to bring your ideas to life? Let's discuss your project and explore how we can create something amazing together.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-fade-in-left" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-2xl font-bold mb-8 text-foreground">Get in Touch</h3>

              {/* Contact Methods */}
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={info.title} className="flex items-center space-x-4 animate-slide-up" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <info.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{info.title}</h4>
                      <a href={info.href} className="text-muted-foreground hover:text-primary transition-colors duration-300">
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
                      className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 hover:scale-110 transition-all duration-300"
                      style={{ animationDelay: `${0.8 + socialIndex * 0.1}s` }}
                      asChild
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <social.icon className="h-4 w-4" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-background border-primary/20 shadow-lg hover:shadow-primary/20 hover:scale-[1.01] transition-all duration-500 animate-fade-in-right" style={{ animationDelay: "0.4s" }}>
              <CardContent className="p-8">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="animate-slide-up" style={{ animationDelay: "0.6s" }}>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <Input id="firstName" value={firstName} onChange={handleChange} placeholder="John" required className="bg-background border-primary/20 focus:border-primary/50 hover:scale-[1.02] transition-all duration-300" />
                    </div>
                    <div className="animate-slide-up" style={{ animationDelay: "0.7s" }}>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <Input id="lastName" value={lastName} onChange={handleChange} placeholder="Doe" required className="bg-background border-primary/20 focus:border-primary/50 hover:scale-[1.02] transition-all duration-300" />
                    </div>
                  </div>

                  <div className="animate-slide-up" style={{ animationDelay: "0.8s" }}>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input id="email" type="email" value={email} onChange={handleChange} required placeholder="john@example.com" className="bg-background border-primary/20 focus:border-primary/50 hover:scale-[1.02] transition-all duration-300" />
                  </div>

                  <div className="animate-slide-up" style={{ animationDelay: "0.9s" }}>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input id="subject" value={subject} onChange={handleChange} required placeholder="Project Discussion" className="bg-background border-primary/20 focus:border-primary/50 hover:scale-[1.02] transition-all duration-300" />
                  </div>

                  <div className="animate-slide-up" style={{ animationDelay: "1s" }}>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="bg-background border-primary/20 focus:border-primary/50 resize-none hover:scale-[1.02] transition-all duration-300"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300" disabled={loading}>
                    {loading ? (
                      "Sending..."
                    ) : (
                      <>
                        <Mail className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>

                  {/* Status messages with fade animation */}
                  <div className="mt-2 h-8 transition-all duration-300">
                    {success && <p className="text-green-500 text-sm animate-fade-in">{success}</p>}
                    {error && <p className="text-red-500 text-sm animate-fade-in">{error}</p>}
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center animate-scale-in" style={{ animationDelay: "0.6s" }}>
            <Card className="bg-primary p-8 hover:scale-[1.01] transition-transform duration-500">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">Ready to Start Your Project?</h3>
              <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">Whether you need a complete web application, a stunning frontend, or technical consultation, I'm here to help bring your vision to life.</p>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:scale-[1.02] transition-all duration-300">
                <a href="https://wa.me/2349137716182?text=Hi%20Victor!%20I'd%20like%20to%20schedule%20a%20call%20with%20you." target="_blank" rel="noopener noreferrer">
                  Schedule a Call (WhatsApp)
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
