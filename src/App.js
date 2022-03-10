import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import NotFound from "./components/NotFound/NotFound";
import OrderReview from "./components/OrderReview/OrderReview";
import Shop from "./components/Shop/Shop";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/order" element={<OrderReview />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
