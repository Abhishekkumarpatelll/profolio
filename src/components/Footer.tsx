// src/components/Footer.tsx

import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center space-y-4 md:space-y-0">
        
        {/* Copyright */}
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Abhishek Kumar Patel. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex space-x-4 justify-center">
          <a
            href="https://github.com/Abhishekkumarpatelll"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 transition"
          >
            <Github size={20} />
          </a>
          
          <a
            href="https://www.linkedin.com/in/abhishek-kumar-patel-5a8373289/" // Update with your real LinkedIn if needed
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 transition"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
