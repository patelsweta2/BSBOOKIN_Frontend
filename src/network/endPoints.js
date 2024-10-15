const baseUrl = "http://localhost:8000";

const Endpoints = {
  searchCities: `${baseUrl}/city/cities`,
  tripsList: `${baseUrl}/api/trips/details`,
  seatLayout: `${baseUrl}/api/seat/layout`,
};

export default Endpoints;
