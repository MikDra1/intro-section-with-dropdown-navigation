import Hero from "./components/Hero"
import Navigation from "./components/Navigation"
import { IntroProvider } from "./contexts/IntroProvider"

function App() {
  return (
    <div>
      <IntroProvider >
      <Navigation />
      <Hero />
      </IntroProvider>
    </div>
  )
}

export default App
