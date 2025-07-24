/** @format */

export default function WorkExperienceMobile() {
  return (
    <div className="px-4 py-6">
      <div className="text-2xl font-bold mb-6 text-center text-gray-100">
        Work Experience
      </div>
      
      <div className="space-y-4">
        <div className="bg-gray-800 rounded-xl p-4 shadow-lg">
          <div className="text-lg font-semibold text-blue-400 mb-2">Full Stack Intern</div>
          <div className="text-sm text-gray-400 mb-3">Bircle AI, Argentina • March 2024 - November 2024</div>
          <div className="text-sm text-gray-300 space-y-1">
            <div>• Developed backend services using Python (FastAPI) and Express.js</div>
            <div>• Built React.js frontend components with Next.js and TypeScript</div>
            <div>• Worked with AWS services and MongoDB/SQL databases</div>
            <div>• Implemented REST APIs for frontend-backend integration</div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-4 shadow-lg">
          <div className="text-lg font-semibold text-blue-400 mb-2">Ski Equipment Rental</div>
          <div className="text-sm text-gray-400 mb-3">Vail Resorts, USA • Winter 2022/23</div>
          <div className="text-sm text-gray-300 space-y-1">
            <div>• Provided customer service in English</div>
            <div>• Managed equipment maintenance and inventory</div>
            <div>• Developed communication skills in international environment</div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-4 shadow-lg">
          <div className="text-lg font-semibold text-blue-400 mb-2">Junior Trader</div>
          <div className="text-sm text-gray-400 mb-3">Argentina Valores S.A. • Dec 2020 - July 2021</div>
          <div className="text-sm text-gray-300 space-y-1">
            <div>• Managed high-pressure financial transactions</div>
            <div>• Maintained client communication</div>
            <div>• Developed analytical skills in fast-paced environment</div>
          </div>
        </div>
      </div>
    </div>
  );
}
