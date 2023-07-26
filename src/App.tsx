import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Header from "./components/Header"

function App() {

  return (
    <div>
      <Header></Header>
      <main className="flex flex-col">
        <About></About>
        <Experience></Experience>
        <Contact></Contact>
      </main>
    </div >
  )
}

export default App
