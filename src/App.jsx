import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Movie } from "./pages/Movie"
import { NavbarComponent } from "./components/NavbarComponent"



function App() {
 

  return (

    <>
      <NavbarComponent />
      <Routes>
        <Route path="/react-app-gh-pages/" element={<Home />} />
        <Route path="/react-app-gh-pages/movies" element={<Movie />} />
        <Route path="/react-app-gh-pages/*" element={<Navigate to='/react-app-gh-pages/' />}/>
      </Routes>
    </>
  )
}

export default App
