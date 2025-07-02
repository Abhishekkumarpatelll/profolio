// src/components/Certification.tsx

export default function Certification() {
  return (
    <section id="certification" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">
          Certifications
        </h2>

        <div className="space-y-6">
          
          {/* Certification 1 */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">
              Six Week Web Development Course
            </h3>
            <p className="text-gray-700">Internshala - 2023</p>
          </div>

          {/* Certification 2 */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">
              Six Week Angular Training
            </h3>
            <p className="text-gray-700">Coursera - 2023</p>
          </div>

        </div>
      </div>
    </section>
  );
}
