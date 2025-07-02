// src/components/About.tsx

export default function About() {
  return (
    <section id="about" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          I'm <span className="font-semibold">Abhishek Kumar Patel</span>, a Frontend Developer with <span className="font-semibold">3 years</span> of professional experience specializing in building scalable, responsive web applications using <span className="font-semibold">Angular</span>, <span className="font-semibold">TypeScript</span>, and <span className="font-semibold">Next.js</span>.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          I have a strong background in UI/UX design, performance optimization, and integrating REST APIs. I'm passionate about clean code, modern tools, and delivering seamless user experiences. Additionally, I'm familiar with Python for scripting and backend integration tasks.
        </p>
      </div>
    </section>
  )
}
