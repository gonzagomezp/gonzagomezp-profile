/** @format */

export default function Projects() {
  return (
    <div className="text-left">
      <div className="text-[60px] mb-8 text-green-300 text-center">
        {'> FEATURED PROJECTS'}
      </div>
      
      <div className="space-y-8">
        <div className="bg-green-950 border border-green-600 p-6 rounded-lg">
          <div className="text-[45px] text-green-400 mb-2">Cantina UCC - Final University Project</div>
          <div className="text-[35px] text-green-300 mb-4">December 2024 - Present</div>
          <div className="text-[30px] text-green-500 space-y-2 mb-4">
            <div>• Developed a mobile-friendly web app to optimize canteen management at Universidad Católica de Córdoba</div>
            <div>• Built with FastAPI (Python), Firestore, Next.js, Docker, and Firebase Authentication</div>
            <div>• Deployed backend on Google Cloud Run and frontend on Vercel</div>
            <div>• Automated CI/CD with GitHub Actions & Docker Hub</div>
            <div>• Enabled clients to browse products, manage carts, and complete payments via Mercado Pago</div>
            <div>• Implemented admin panel for secure product, promotion, and order management</div>
            <div>• Added payment validation & email notifications system</div>
          </div>
          <div className="text-[25px] text-green-300">
            Tech: FastAPI, Python, Next.js, Firestore, Docker, Firebase Auth, Google Cloud Run, Vercel, Mercado Pago
          </div>
        </div>

        <div className="bg-green-950 border border-green-600 p-6 rounded-lg">
          <div className="text-[45px] text-green-400 mb-2">Portfolio 3D Interactive Website</div>
          <div className="text-[35px] text-green-300 mb-4">Personal Project - 2024</div>
          <div className="text-[30px] text-green-500 space-y-2 mb-4">
            <div>• Created an immersive 3D portfolio using React Three Fiber</div>
            <div>• Implemented retro terminal-style UI with smooth navigation</div>
            <div>• Built with Next.js, Three.js, and Tailwind CSS</div>
            <div>• Optimized for performance and responsive design</div>
            <div>• Features interactive 3D models and animations</div>
          </div>
          <div className="text-[25px] text-green-300">
            Tech: React Three Fiber, Next.js, Three.js, Tailwind CSS
          </div>
        </div>

        <div className="bg-green-950 border border-green-600 p-6 rounded-lg">
          <div className="text-[45px] text-green-400 mb-2">Systems Engineering Academic Projects</div>
          <div className="text-[35px] text-green-300 mb-4">Universidad Católica de Córdoba - 2021-2025</div>
          <div className="text-[30px] text-green-500 space-y-2 mb-4">
            <div>• Developed various applications using C++, Python, and JavaScript</div>
            <div>• Built database management systems with SQL and NoSQL</div>
            <div>• Created REST APIs and web services</div>
            <div>• Implemented algorithms and data structures</div>
            <div>• Collaborated on team projects using Git version control</div>
          </div>
          <div className="text-[25px] text-green-300">
            Tech: C++, Python, JavaScript, SQL, Git, Various frameworks
          </div>
        </div>
      </div>
    </div>
  );
}
