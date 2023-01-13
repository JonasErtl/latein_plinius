import Navbar from "./components/Navbar"
import Impressum from './components/Impressum'
import Quiz from './components/Quiz'
import Biographie from './components/Biographie'
import Zusammenfassung from './components/Zusammenfassung'
import NoPage from "./components/NoPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    
      <div className="App">
        <Navbar/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Quiz/>}/>
            <Route path="/bio" element={<Biographie/>}/>
            <Route path="/impressum" element={<Impressum/>}/>
            <Route path="/overview" element={<Zusammenfassung/>}/>
            <Route path="/*" element={<NoPage/>}/>
            <Route path="/quiz" element={<Quiz/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
