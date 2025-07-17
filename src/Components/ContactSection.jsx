"use client"; // Required for Next.js client-side component

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast"; // Assuming this hook is set up
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, Github } from "lucide-react";
import { cn } from "@/lib/utils"; // Utility for className concatenation

// Initialize EmailJS with your User ID (move to a config file in production)
emailjs.init("IML0lerTNXcGRj7-_"); // Replace with your actual EmailJS User ID

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const formData = {
      user_name: form.user_name.value,
      user_email: form.user_email.value,
      message: form.message.value,
    };

    if (!formData.user_name || !formData.user_email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    emailjs
      .sendForm(
        "service_4slfm2f", // Replace with your actual Service ID
        "template_l1rv17c", // Replace with your actual Template ID
        form,
        "L5osvut6V4nATOK8B" // Replace with your actual Public Key or Client ID
      )
      .then(
        (response) => {
          toast({
            title: "Message Sent!",
            description: "Thank you for your message. I'll get back to you soon.",
          });
          form.reset();
          setIsSubmitting(false);
        },
        (error) => {
          toast({
            title: "Error",
            description: `Failed to send message: ${error.text || "Unknown error"}`,
            variant: "destructive",
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:danushikam804@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    danushikam804@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+94703854172"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +94 70 385 4172
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Anuradhapura, Sri Lanka</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/dhanushika-madushani/"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/your-profile
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Instagram className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Instagram</h4>
                  <a
                    href="https://www.instagram.com/dhanu.madushani/profilecard/?igsh=MTR1ZnZtYTZjajd3MQ=="
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    instagram.com/your-profile
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Github className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">GitHub</h4>
                  <a
                    href="https://github.com/DhanushikaGit"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/your-profile
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={sendEmail}>
              <div>
                <label htmlFor="user_name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Name..."
                />
              </div>
              <div>
                <label htmlFor="user_email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full flex items-center justify-center gap-2 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors",
                  isSubmitting && "opacity-50 cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};