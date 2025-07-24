/** @format */

export default function Projects() {
  return (
    <div className="text-left">
      <div className="text-[60px] mb-8 text-green-300 text-center">
        {'> FEATURED PROJECTS <'}
      </div>
      
      <div className="space-y-8">
        <div className="bg-green-950 border border-green-600 p-6 rounded-lg">
          <div className="text-[60px] text-green-400 mb-2">Cantina UCC - Final University Project</div>
          <div className="text-[50px] text-green-300 mb-4">December 2024 - Present</div>
          <div className="text-[50px] text-green-500 space-y-2 mb-4">
            <div>• Developed a mobile-friendly web app to optimize canteen management at Universidad Católica de Córdoba</div>
            <div>• Built with FastAPI (Python), Firestore, Next.js, Docker, and Firebase Authentication</div>
            <div>• Deployed backend on Google Cloud Run and frontend on Vercel</div>
            <div>• Automated CI/CD with GitHub Actions & Docker Hub</div>
            <div>• Enabled clients to browse products, manage carts, and complete payments via Mercado Pago</div>
            <div>• Implemented admin panel for secure product, promotion, and order management</div>
            <div>• Added payment validation & email notifications system</div>
          </div>
          <div className="text-[50px] text-green-300">
            Tech: FastAPI, Python, Next.js, Firestore, Docker, Firebase Auth, GCP, Vercel, Mercado Pago
          </div>
        </div>

        <div className="bg-green-950 border border-green-600 p-6 rounded-lg">
          <div className="text-[45px] text-green-400 mb-2">Systems Engineering Academic Projects</div>
          <div className="text-[50px] text-green-300 mb-4">Universidad Católica de Córdoba - 2021-2025</div>
          <div className="text-[50px] text-green-500 space-y-2 mb-4">
            <div>• Developed various applications using C++, GO ,Python, and JavaScript</div>
            <div>• Built database management systems with SQL and NoSQL</div>
            <div>• Created REST APIs and web services</div>
            <div>• Implemented algorithms and data structures</div>
            <div>• Collaborated on team projects using Git version control</div>
          </div>
          <div className="text-[50px] text-green-300">
            Tech: C++, GO ,Python, JavaScript, SQL, Git, Various frameworks
          </div>
        </div>
      </div>
    </div>
  );
}
