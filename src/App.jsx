import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoaderScreen from "./components/LoaderScreen";
import LoginScreen from "./pages/LoginScreeen";
import './App.css'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoaderScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
