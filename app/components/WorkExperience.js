/** @format */

export default function WorkExperience() {
  return (
    <div className="text-left">
      <div className="text-[60px] mb-8 text-green-300 text-center">
        {'> WORK EXPERIENCE'}
      </div>
      
      <div className="space-y-8">
        <div className="bg-green-950 border border-green-600 p-6 rounded-lg">
          <div className="text-[45px] text-green-400 mb-2">Full Stack Intern</div>
          <div className="text-[35px] text-green-300 mb-2">Bircle AI, Argentina • March 2024 - November 2024</div>
          <div className="text-[30px] text-green-500 space-y-2">
            <div>• Developed backend services using Python (FastAPI) and Express.js</div>
            <div>• Built and optimized React.js frontend components with Next.js, TypeScript, and Tailwind CSS</div>
            <div>• Interacted with AWS services to support infrastructure needs</div>
            <div>• Implemented and consumed REST APIs for seamless frontend-backend integration</div>
            <div>• Worked with MongoDB and SQL databases to manage data efficiently</div>
          </div>
        </div>

        <div className="bg-green-950 border border-green-600 p-6 rounded-lg">
          <div className="text-[45px] text-green-400 mb-2">Ski Equipment Rental and Retail</div>
          <div className="text-[35px] text-green-300 mb-2">Vail Resorts, USA • Winter 2022/23</div>
          <div className="text-[30px] text-green-500 space-y-2">
            <div>• Provided customer service in English and assisted with ski equipment rentals</div>
            <div>• Managed equipment maintenance and inventory control</div>
            <div>• Developed communication skills in international environment</div>
            <div>• Enhanced adaptability and problem-solving abilities</div>
          </div>
        </div>

        <div className="bg-green-950 border border-green-600 p-6 rounded-lg">
          <div className="text-[45px] text-green-400 mb-2">Junior Trader</div>
          <div className="text-[35px] text-green-300 mb-2">Argentina Valores S.A. • December 2020 - July 2021</div>
          <div className="text-[30px] text-green-500 space-y-2">
            <div>• Managed high-pressure financial transactions</div>
            <div>• Maintained proactive communication with clients</div>
            <div>• Developed analytical skills in fast-paced environment</div>
            <div>• Enhanced attention to detail and risk assessment capabilities</div>
          </div>
        </div>
      </div>
    </div>
  );
}
