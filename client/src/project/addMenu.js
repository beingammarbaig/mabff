import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function AddMenu() {
  const [showModal, setShowModal] = useState(false);
  const [menu, setmenu] = useState([
    {category: " ", name: " ", url: " ", desc: " ", price: " " },
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/add/food", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category: menu.category,
        name: menu.name,
        url: menu.url,
        desc: menu.desc,
        price: menu.price,
      }),
    });
    const json = await response.json();
    console.log(json);
    setmenu({category: " ", name: " ", url: " ", desc: " ", price: " " })
    if (json.success){
      setShowModal(true);
    
    setTimeout(() => {
      window.location.reload();
      window.scrollTo(0, 0);
    }, 1000); // Adjust the delay as needed
  }};

  const changeon = (e) => {
    setmenu({ ...menu, [e.target.name]: e.target.value });
  };

   

  const handleCloseModal = () => {
    setShowModal(false);
    // You can also reset the form data here if needed
    setmenu({category: " ", name: " ", url: " ", desc: " ", price: " " })
  };

  return (
    <div>
      <div className="container content-align-center mt-3 mb-5">
        <h2 className="text-warning">Dish Information</h2>
        <form onSubmit={handleSubmit}>

        <div className="form-group mt-5">
        <label htmlfor="category">Select Category:</label>
        <select onChange={changeon}
              name="category"
              value={menu.category}
              className="form-control" id="category">
                <option>Select</option>
            <option value="Appetizer">Appetizer</option>
            <option value="Main Course">Main Course</option>
            <option value="Dessert">Dessert</option>
        </select>
          </div>

          {/* <!-- Dish Name Input --> */}
          <div className="form-group">
            <label htmlFor="dishName">Dish Name:</label>
            <input
              onChange={changeon}
              name="name"
              value={menu.name}
              type="text"
              className="form-control"
              id="dishName"
              placeholder="Enter the name of the dish"
            />
          </div>

          {/* <!-- Image URL Input --> */}
          <div className="form-group">
            <label htmlFor="imageUrl">Image URL:</label>
            <input
              onChange={changeon}
              name="url"
              value={menu.url}
              type="text"
              className="form-control"
              id="imageUrl"
              placeholder="Enter the image URL"
            />
          </div>

          {/* <!-- Description Input --> */}
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input
              onChange={changeon}
              name="desc"
              value={menu.desc}
              className="form-control"
              id="description"
              rows="4"
              placeholder="Enter a description"
            />
          </div>

          {/* <!-- Price Input --> */}
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input
              onChange={changeon}
              name="price"
              value={menu.price}
              type="number"
              className="form-control"
              id="price"
              placeholder="Enter the price"
            />
          </div>

          {/* <!-- Submit Button --> */}
          <button type="submit" className="btn btn-primary">
                  Submit
          </button>
        </form>
        <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        contentLabel="Form Submission Modal"
      >
        <h2 className="text-dark ">Form Submitted!</h2>
        {/* You can display a message or any content here */}
        <button onClick={handleCloseModal}>Close</button>
      </Modal>
      </div>
    </div>
  );
}
