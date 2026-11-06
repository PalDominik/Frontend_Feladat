import Alvasok from "./components/AlvasKartya"
import AdatKiiras from "./components/AlvasLista"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <div style={{ backgroundColor: "beige", color: "red" }}>
        <AdatKiiras></AdatKiiras>
      </div>
      <div style={{ backgroundColor: "lightgray", color: "gold" }}>
        <Alvasok></Alvasok>
      </div>
    </>
  )
}

export default App
