import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Companies from './components/Companies'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Companies />
      <Projects />
      <Contact />
    </main>
  )
}
