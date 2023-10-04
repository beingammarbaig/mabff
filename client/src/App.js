import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./project/home.js";
import Contact from "./project/contact.js";
import Reservation from "./project/reservation.js";
import Menu from "./project/menu";
import AddMenu from "./project/addMenu";

function App() {


  let [menu,setmenu] = useState([])

  const loaddata = async () => {
    try {
      const response = await fetch("/menu/food", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const data = await response.json();
      console.log(data);
      setmenu(data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(()=>{
    loaddata()
  },[])


  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/contact" element={<Contact/>} />
            <Route exact path="/reservation" element={<Reservation/>} />
            <Route exact path="/menu" element={<Menu menu={menu}/>} />
            <Route exact path="/admin" element={<AddMenu/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
