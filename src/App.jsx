import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AlbumsPage from "./pages/AlbumsPage";
import AlbumPage from "./pages/AlbumPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AlbumsPage />} />
        <Route path="/album/:albumId" element={<AlbumPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
