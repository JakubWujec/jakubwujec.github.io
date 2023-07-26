import About from "./components/About"
import Footer from "./components/Footer"
import Experience from "./components/Experience"
import Header from "./components/Header"

function App() {

  return (
    <div>
      <Header></Header>
      <main className="flex flex-col">
        <About></About>
        <Experience></Experience>
      </main>
      <Footer></Footer>
    </div >
  )
}

export default App
