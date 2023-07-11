import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import TextPage from "./pages/TextPage"
import Home from "./pages/Home"


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/text" element={<TextPage />} />
      <Route path="*" element={<h1>404- Page Not Found</h1>}/>
    </Routes> 
    </BrowserRouter>
    
  );
}

export default App;
