import ProductPage from "./container/ProductPage";
import ShowDetails from "./container/ShowDetails";

import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/productDetails" element={<ShowDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
