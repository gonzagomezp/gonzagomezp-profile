/** @format */

export default function ProjectsMobile() {
  return (
    <div className="px-4 py-6">
      <div className="text-2xl font-bold mb-6 text-center text-gray-800">
        Featured Projects
      </div>
      
      <div className="space-y-4">
        <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-200">
          <div className="text-lg font-semibold text-purple-600 mb-2">Cantina UCC - Final University Project</div>
          <div className="text-sm text-gray-500 mb-3">December 2024 - Present</div>
          <div className="text-sm text-gray-600 space-y-1 mb-3">
            <div>• Mobile-friendly web app for canteen management</div>
            <div>• Built with FastAPI, Firestore, Next.js, Docker</div>
            <div>• Deployed on Google Cloud Run and Vercel</div>
            <div>• Payment integration with Mercado Pago</div>
            <div>• Admin panel for product and order management</div>
          </div>
          <div className="flex flex-wrap gap-1">
            {['FastAPI', 'Next.js', 'Firestore', 'Docker', 'GCP'].map((tech) => (
              <span key={tech} className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-200">
          <div className="text-lg font-semibold text-purple-600 mb-2">Academic Projects</div>
          <div className="text-sm text-gray-500 mb-3">Universidad Católica de Córdoba - 2021-2025</div>
          <div className="text-sm text-gray-600 space-y-1 mb-3">
            <div>• Various applications using C++, GO, Python, JavaScript</div>
            <div>• Database management systems with SQL and NoSQL</div>
            <div>• REST APIs and web services development</div>
            <div>• Algorithm and data structure implementations</div>
          </div>
          <div className="flex flex-wrap gap-1">
            {['C++', 'Python', 'JavaScript', 'SQL', 'Git'].map((tech) => (
              <span key={tech} className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
