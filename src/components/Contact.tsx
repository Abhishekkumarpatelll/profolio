// src/components/Contact.tsx

import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Me</h2>
        
        <p className="text-gray-600 mb-10">
          Feel free to reach out for opportunities, collaboration, or just to connect!
        </p>

        <div className="space-y-6 text-left">

          {/* Email */}
          <div className="flex items-center gap-4 justify-center">
            <Mail className="text-blue-500" />
            <a href="mailto:patelabhishekkumar423@gmail.com" className="text-lg text-gray-700 hover:text-blue-500">
              patelabhishekkumar423@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 justify-center">
            <Phone className="text-blue-500" />
            <a href="tel:+919117113423" className="text-lg text-gray-700 hover:text-blue-500">
              +91 9117113423
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4 justify-center">
            <MapPin className="text-blue-500" />
            <span className="text-lg text-gray-700">
              Pachaura, Siwan, Bihar, India - 841436
            </span>
          </div>
          
        </div>
      </div>
    </section>
  )
}
