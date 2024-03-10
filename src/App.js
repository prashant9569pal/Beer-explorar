// src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import BeerCard from "./BeerCard";
import BeerModal from "./BeerModal";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedBeer, setSelectedBeer] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.punkapi.com/v2/beers");
        setBeers(response.data);
      } catch (error) {
        console.error("Error fetching beer data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleShowModal = (beer) => {
    setSelectedBeer(beer);
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
  };

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <header className="bg-dark text-white py-3">
        <div className="container">
          <h1 className="fw-bold">Beer Explorer</h1>
          <p className="lead">
            Discover a variety of beers from around the world
          </p>
          <input
            type="text"
            placeholder="Search beers..."
            className="form-control mb-4"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </header>

      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {filteredBeers.map((beer) => (
            <div key={beer.id} className="col">
              <BeerCard beer={beer} onShowModal={() => handleShowModal(beer)} />
            </div>
          ))}
        </div>
        <BeerModal
          show={showModal}
          onHide={handleHideModal}
          beer={selectedBeer}
        />
      </div>
    </div>
  );
};

export default App;
