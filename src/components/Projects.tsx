// src/components/Projects.tsx

export default function Projects() {
  return (
    <section id="projects" className="py-12 md:py-20 bg-gray-100">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Aiwozo DocuBot */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">Aiwozo DocuBot</h3>
            <p className="text-gray-700 mb-4 italic">Role: Angular Developer</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>AI-powered platform for automated document data extraction and classification.</li>
              <li>Built Angular components for upload, previews, and manual correction.</li>
              <li>Integrated APIs for OCR, classification, and image enhancement.</li>
              <li>Enhanced UI/UX for complex document flows with responsive design.</li>
            </ul>
          </div>

          {/* Aiwozo Work Zone */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">Aiwozo Work Zone</h3>
            <p className="text-gray-700 mb-4 italic">Role: Angular Developer</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Dashboard-driven platform for managing RPA workflows and automation tasks.</li>
              <li>Upgraded application from Angular 12 to Angular 16 for performance improvement.</li>
              <li>Developed UI modules for workflow tracking, bot visualization, and task queues.</li>
            </ul>
          </div>

          {/* Integration Project */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">Integration Project - Internal Tool</h3>
            <p className="text-gray-700 mb-4 italic">Role: Angular Developer</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Frontend for internal tool connecting services across Aiwozo ecosystem.</li>
              <li>Built reusable Angular components and handled form-based configurations.</li>
              <li>Implemented dynamic content rendering with seamless API integration.</li>
            </ul>
          </div>

          {/* Tourist Form Project */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">Online Tourist Form</h3>
            <p className="text-gray-700 mb-4 italic">Role: Angular Developer (LTI Mindtree)</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Developed responsive Angular application for managing tourism form submissions.</li>
              <li>Implemented dynamic input fields, validation, and enhanced UI/UX.</li>
              <li>Ensured cross-device compatibility and optimized performance.</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
