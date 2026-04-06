
import Footer from "./components/Footer"
import GoogleReviews from "./components/GoogleReviews"
import Header from "./components/Header"
import Hero from "./components/Hero"
import LocationMap from "./components/LocationMap"
import Services from "./components/Services"
import Stats from "./components/Stats"

function App() {


  return (
    <>
      <Header/>

      <div id="inicio">
        <Hero/>
      </div>
      
      <Stats/>

      <div id="localizacao">
        <LocationMap/>
      </div>
      
      <div id="planos">
        <Services/>
      </div>
      
      <div id="avaliacoes"> 
        <GoogleReviews/>
      </div>

      <Footer/>

    </>
  )
}

export default App
