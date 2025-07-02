// src/components/Skills.tsx

export default function Skills() {
  return (
    <section id="skills" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Languages & Frameworks */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Languages & Frameworks</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>AngularJS, Angular (v12, v14, v16, v17)</li>
              <li>JavaScript (ES6+), TypeScript, Python</li>
              <li>HTML5, CSS3, SCSS, Bootstrap, Tailwind CSS</li>
            </ul>
          </div>

          {/* Tools & Technologies */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Tools & Technologies</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Git, GitHub, Webpack, Postman, Swagger</li>
              <li>REST APIs, Browser Dev Tools</li>
            </ul>
          </div>

          {/* Angular Ecosystem */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Angular Ecosystem</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>RxJS, NgRx (State Management)</li>
              <li>Component-Based Architecture</li>
              <li>Manual Testing in Angular</li>
            </ul>
          </div>

          {/* Other Practices */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Practices & Other Skills</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Strong Debugging Skills</li>
              <li>Responsive Web Design & UI/UX Principles</li>
              <li>Cross-Browser Compatibility</li>
              <li>Code Optimization</li>
              <li>Research & Development (R&D)</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
