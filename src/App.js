import react from "react";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import BlogData from "./Components/BlogData";
import Post from "./Components/Post";
function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
            <Route exact path="/" element={<Hero />} />
            <Route exact path="/blog" element={<BlogData />} />
            <Route exact path="/post/:id" element={<Post />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App;
