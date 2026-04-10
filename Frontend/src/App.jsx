import Hero from './components/sections/Hero'
import Problem from './components/sections/Problem'
import Talent from './components/sections/Talent'

function App() {
  return (
    <main className="w-full min-h-screen bg-black">
      <Hero />
      <Problem />
      <Talent />
      {/* Other sections will be added here */}
    </main>
  )
}

export default App
