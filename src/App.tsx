import Navbar from './components/Navbar.tsx'
import Banner from './components/Banner.tsx'
import About from './components/About.tsx'
import ParticlesComponent from './components/particles/Particles.tsx'
import Achievements from './components/Achievements.tsx'
import Footer from './components/Footer.tsx'
import Blog from './components/Blog.tsx'

function App() {
  return (
    <div className="App">
      <div className="h-screen bg-black flex justify-center items-center relative overflow-y-auto" id="scroller">
        <img
          src="/leaf.jpg"
          alt="Background"
          className="fixed inset-0 object-cover w-full h-full filter blur-sm pointer-events-none"
          draggable="false"
        />
        <ParticlesComponent />
        <div className="fixed inset-0">
        </div>
        <div className="absolute inset-0">
          <Navbar />
          <Banner />
          <About />
          <Blog />
          <Achievements />
          <Footer />
        </div>
      </div>
    </div>
      
  )
}

export default App
