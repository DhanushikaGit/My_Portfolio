"use client"; // Required for Next.js client-side component

import React from "react";
import { Mail, Phone, MapPin, Linkedin, Instagram, Github, Send, MessageCircle, User, Clock, Globe } from "lucide-react";

export const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "danushikam804@gmail.com",
      href: "mailto:danushikam804@gmail.com",
      description: "Drop me a line anytime",
    
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+94 70 385 4172",
      href: "tel:+94703854172",
      description: "Let's have a conversation",
    
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Anuradhapura, Sri Lanka",
      href: "#",
      description: "Currently based in",
   
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/dhanushika-madushani",
      href: "https://www.linkedin.com/in/dhanushika-madushani/",
      color: "hover:text-blue-500"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "instagram.com/dhanu.madushani",
      href: "https://www.instagram.com/dhanu.madushani/profilecard/?igsh=MTR1ZnZtYTZjajd3MQ==",
      color: "hover:text-pink-500"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/DhanushikaGit",
      href: "https://github.com/DhanushikaGit",
      color: "hover:text-gray-500"
    }
  ];

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border mb-6">
            <MessageCircle size={16} className="text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Let's Connect</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            Get In <span className="text-primary relative">
              Touch
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 rounded-full"></div>
            </span>
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's create something amazing together.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Contact Methods - Cards */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <a
                    key={index}
                    href={method.href}
                    className="group bg-card p-6 rounded-2xl border border-border shadow-lg
                             hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 
                             transition-all duration-300 hover:border-primary/30"
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <IconComponent size={24} className="text-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors duration-300">
                          {method.label}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {method.description}
                        </p>
                        <p className="text-sm font-medium text-foreground break-all">
                          {method.value}
                        </p>
                        <div className="flex items-center justify-center gap-1 mt-2">
                          <Clock size={12} className="text-primary" />
                          <span className="text-xs text-muted-foreground">{method.available}</span>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Media Links */}
            <div className="bg-card rounded-2xl p-6 border border-border shadow-lg">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Globe size={20} className="text-primary" />
                Find Me Online
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 p-4 rounded-xl border border-border
                               hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                    >
                      <div className={`p-2 rounded-lg bg-secondary group-hover:scale-110 transition-transform duration-300 ${social.color}`}>
                        <IconComponent size={16} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm">{social.label}</h4>
                        <p className="text-xs text-muted-foreground truncate">{social.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl p-8 border border-border shadow-lg h-full flex flex-col justify-center">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <User size={32} className="text-primary" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-3">Ready to Start?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    Whether it's a quick question or a detailed project discussion, 
                    I'm just one email away. Let's turn your ideas into reality.
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href="mailto:danushikam804@gmail.com?subject=Hello&body=Hi%20there,%20I%20wanted%20to%20contact%20you%20about..."
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 
                             bg-primary text-white rounded-xl hover:bg-primary/90 
                             transition-all duration-300 text-lg font-semibold
                             hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
                  >
                    <Send size={20} />
                    Send Message
                  </a>
                  
                  <div className="text-center">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats/Info Cards */}
       
      </div>
    </section>
  );
};