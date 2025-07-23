"use client"; // Required for Next.js client-side component

import React from "react";
import { Mail, Phone, MapPin, Linkedin, Instagram, Github, Send } from "lucide-react";

export const ContactSection = () => {
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
                    linkedin.com/in/dhanushika-madushani
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
                    instagram.com/dhanu.madushani
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
                    github.com/DhanushikaGit
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Single Mail Button */}
          <div className="bg-card p-8 rounded-lg shadow-xs flex flex-col justify-center items-center">
            <h3 className="text-2xl font-semibold mb-6 text-center">Send a Message</h3>
            <a
              href="mailto:danushikam804@gmail.com?subject=Hello&body=Hi%20there,%20I%20wanted%20to%20contact%20you%20about..."
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors text-lg font-medium"
            >
              Send Email <Send className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
