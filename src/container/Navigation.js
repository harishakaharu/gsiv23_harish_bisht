import React from "react";
import ProductPage from "../container/ProductPage";
export default function Navigation() {
  return (
    <div className="nav-main">
      <a href="/split-screen" target="_blank" className="nav-contents">
        Split screen
      </a>
      <a href="/productDetails" target="_blank" className="nav-contents">
        Scroll Animation
      </a>
    </div>
  );
}
