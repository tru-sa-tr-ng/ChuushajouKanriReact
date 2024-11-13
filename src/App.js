import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Layout


// Import Pages

//Redux

import { Provider } from "react-redux";
import Header from "./shares/components/Layout/Header";
import Sidebar from "./shares/components/Layout/Sidebar";
import Customers from "./pages/customer";
import PageHeader from "./shares/components/Layout/PageHeader";
import Home from "./pages/home";

const App = () => {


  return (
      <BrowserRouter>

        <Header />
        <Sidebar />
        <div className="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
          <PageHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/customers" element={<Customers />} />
          </Routes>
        </div>

      </BrowserRouter>




  )
}

export default App;