import React from "react";
import useApi from "../services/useApi";
import { ITINERARIES } from "../config/urls";
import { Link } from "react-router-dom";
import "../css/myitinerary.css";

const MyItinerary = () => {
  const {
    data: itineraries,
    loading,
    error,
  } = useApi({ apiEndpoint: ITINERARIES });

  return (
  
      <div className="content-container">
        <h2 className="title">My Itineraries</h2>
        <div className="create-new-container">
          <Link to="/newItinerary">
            <button className="create-button">+ Create New Itinerary</button>
          </Link>
        </div>
        <div className="itineraries-container">
          {loading && <p>Loading itineraries...</p>}
          {error && <p className="error-text">Error: {error}</p>}
          {!loading && !error && itineraries && itineraries.length === 0 && (
            <p className="no-itineraries-text">
              You have no itineraries created yet.
            </p>
          )}
          {!loading &&
            itineraries &&
            itineraries.map((itinerary) => (
              <div key={itinerary.itin_id} className="itinerary-item">
                <h2 className="itinerary-title">{itinerary.name}</h2>
                <p className="itinerary-description">{itinerary.description}</p>
                <p className="itinerary-duration">
                  Duration: {itinerary.duration}
                </p>
              </div>
            ))}
        </div>
      </div>
    
  );
};

export default MyItinerary;
