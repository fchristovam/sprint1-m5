import React from "react"
import Header from "../src/components/header/header"
import PrimeiraSection from "./components/primeiraSection/primeiraSection"
import SegundaSection from "./components/segundaSection/segundaSection"
import TerceiraSection from "./components/terceiraSection/terceiraSection"
import Footer from "./components/footer/footer"


function App() {
  return (
    <div className="App">
      <Header />
      <PrimeiraSection />
      <SegundaSection />
      <TerceiraSection />
      <Footer />
    </div>
  )
}

export default App
