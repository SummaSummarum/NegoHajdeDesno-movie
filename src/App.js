import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./pages/Details";
import FavsPage from "./pages/FavsPage";
import SignIn from "./pages/SignIn";
import NoPage from "./pages/NoPage";
import Home from "./pages/Home";
import * as React from "react";
import Header from "./components/Header";

const API_URL = "https://dummyapi.online/api/movies";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState([]);

  const handleAddAndDeleteFromFavorites = (item) => {
    if (!favorites.some((favorites) => favorites.id === item.id)) {
      setFavorites((favorites) => [...favorites, item]);
    } else {
      setFavorites((favorites) =>
        favorites.filter((favorites) => favorites.id !== item.id)
      );
    }
  };
  const isItemFavorite = (itemId) => {
    return favorites.some((item) => item.id === itemId);
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const searchMovies = async () => {
    const response = await axios.get(API_URL);
    const data = response.data;

    setMovies(data);
  };

  useEffect(() => {
    searchMovies();
  }, []);
  console.log(favorites);
  return (
    <div className="app">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                searchQuery={searchQuery}
                handleInputChange={handleInputChange}
                searchMovies={searchMovies}
                movies={movies}
                favorites={favorites}
                handleAddAndDeleteFromFavorites={
                  handleAddAndDeleteFromFavorites
                }
              />
            }
          />
          <Route
            path="/FavsPage"
            element={
              <FavsPage
                favorites={favorites}
                handleAddAndDeleteFromFavorites={
                  handleAddAndDeleteFromFavorites
                }
              />
            }
          />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Details/:id" element={<Details movies={movies} />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>

      <footer className="footer">
        <div className="container">
          <p>&copy; Globalsoft 2023. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
