import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Layout


// Import Pages

//Redux

import { Provider } from "react-redux";
import Header from "./shares/components/Layout/Header";
import Sidebar from "./shares/components/Layout/Sidebar";
import Customers from "./pages/customer";
import Vehicles from "./pages/vehicle";
import VehiclesCars from "./pages/vehicle/cars";
import VehiclesMotorbikes from "./pages/vehicle/motorbikes";
import VehiclesBikes from "./pages/vehicle/bikes";
import Home from "./pages/home";

import AddCustomer from "./pages/customer/addCustomer";
import EditCustomer from "./pages/customer/editCustomer";

import AddVehicle from "./pages/vehicle/addVehicle";
import AddCars from "./pages/vehicle/cars/addCars";
import AddMotorbikes from "./pages/vehicle/motorbikes/addMotorbikes";
import AddBikes from "./pages/vehicle/bikes/addBikes";

const App = () => {


  return (
      <BrowserRouter>

        <Header />
        <Sidebar />
        <div className="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/customers"> 
                <Route index element= {<Customers/>} />
                <Route path="create" element={<AddCustomer/>} />
                <Route path="edit/:id" element={<EditCustomer/>} />
            </Route>
            <Route path="/vehicles"> 
                <Route index element= {<Vehicles/>} />
                <Route path="create" element={<AddVehicle/>} />
                <Route path="edit/:id" element={<AddVehicle/>} />
            </Route>
            <Route path="/vehicles/cars"> 
                <Route index element= {<VehiclesCars/>} />
                <Route path="create" element={<AddCars/>} />
            </Route>
            <Route path="/vehicles/motorbikes"> 
                <Route index element= {<VehiclesMotorbikes/>} />
                <Route path="create" element={<AddMotorbikes/>} />
            </Route>
            <Route path="/vehicles/bikes"> 
                <Route index element= {<VehiclesBikes/>} />
                <Route path="create" element={<AddBikes/>} />
            </Route>
          </Routes>
        </div>

      </BrowserRouter>




  )
}

export default App;