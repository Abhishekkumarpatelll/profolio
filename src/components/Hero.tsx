// src/components/Hero.tsx

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-50 to-blue-100">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hi, I'm <span className="text-blue-600">Abhishek Kumar Patel</span>
      </h1>
      <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
        Frontend Developer | Angular Specialist | Passionate Coder
      </h2>
      <p className="max-w-xl text-gray-600 mb-8">
        3+ years of experience building scalable and responsive web applications with Angular, JavaScript, and modern frontend tools. I love clean code and seamless user experiences.
      </p>
      <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition">
        Contact Me
      </a>
    </section>
  );
}
