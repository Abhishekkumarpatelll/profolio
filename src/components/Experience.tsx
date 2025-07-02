// src/components/Experience.tsx

export default function Experience() {
  return (
    <section id="experience" className="py-12 md:py-20 bg-gray-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Work Experience</h2>

        <div className="space-y-8">
          
          {/* Quale Infotech */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold">Software Developer</h3>
            <p className="text-gray-700">Quale Infotech Pvt. Ltd. | Nov 2022 - Present</p>
            <ul className="list-disc list-inside mt-4 text-gray-600 space-y-2">
              <li>Led frontend development for Aiwozo Work Zone using Angular 12-16.</li>
              <li>Built dynamic UI for document upload, classification, and AI-driven data extraction.</li>
              <li>Integrated REST APIs for OCR and machine learning services.</li>
              <li>Collaborated with RPA and AI teams to enhance performance and user experience.</li>
              <li>Wrote clean, modular, maintainable code improving responsiveness and reducing load times.</li>
            </ul>
          </div>

          {/* LTI Mindtree */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold">Angular Developer</h3>
            <p className="text-gray-700">LTI Mindtree | Apr 2022 - Sep 2022</p>
            <ul className="list-disc list-inside mt-4 text-gray-600 space-y-2">
              <li>Designed and implemented responsive UI pages using Angular and Bootstrap.</li>
              <li>Focused on optimizing performance and ensuring cross-browser compatibility.</li>
              <li>Conducted code reviews and worked in agile sprints to meet project goals.</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
