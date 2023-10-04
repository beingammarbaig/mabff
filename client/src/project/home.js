import homeCSS from "./home.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function Home() {



  return (
    <>
    <div style={{homeCSS}}>
      
      <nav className="navbar navbar-expand-lg navbar-dark">
        <Link className="navbar-brand" to="/">
          <h2 className="text-warning">MAB's Fast Food</h2>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/menu">
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/reservation">
                Reservations
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                Admin
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* <!-- Carousel --> */}
      <div id="demo" class="carousel slide" data-bs-ride="carousel">
        {/* <!-- Indicators/dots --> */}
        {/* <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="0"
            class="active"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="2"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="3"
          ></button> 
        </div>*/}

        {/* <!-- The slideshow/carousel --> */}
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://burgerlab.blinkco.io/_next/image?url=https%3A%2F%2Fem-cdn.eatmubarak.pk%2F55018%2Fweb_splash%2F1695714564.jpg&w=1080&q=90"
              alt="Los Angeles"
              class="d-block w-100"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://pizzamax.com.pk/_next/image?url=https%3A%2F%2Fem-cdn.eatmubarak.pk%2F55083%2Fweb_splash%2F1693820067.jpg&w=1200&q=90"
              alt="New York"
              class="d-block w-100"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://burgerlab.blinkco.io/_next/image?url=https%3A%2F%2Fem-cdn.eatmubarak.pk%2F55018%2Fweb_splash%2F1695634595.jpg&w=1080&q=90"
              alt="New York"
              class="d-block w-100"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://pizzamax.com.pk/_next/image?url=https%3A%2F%2Fem-cdn.eatmubarak.pk%2F55083%2Fweb_splash%2F1694073782.png&w=1200&q=90"
              alt="New York"
              class="d-block w-100"
            />
          </div>
        </div>

        {/* <!-- Left and right controls/icons --> */}
        {/* <a
          class="carousel-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a
          class="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </a>*/}
      </div> 

      {/* <!-- Jumbotron --> */}
      <div
        className="jumbotron text-center mt-4 position-relative"
        style={{
          backgroundImage:
            'url("https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1693522527-Slider.jpg&w=1200&q=75")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div
            className="jumbotron-content"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h1 className="mb-4">Welcome to MAB's Fast Food</h1>
            <p><strong>Enjoy the finest dining experience with our delicious dishes</strong></p>
            <Link className="btn btn-dark btn-lg" to="/menu" role="button">
              View Menu
            </Link>
          </div>
        </div>
      </div>

      {/* <!-- Menu Section --> */}
      <section className="homemenu">
        <div className="container">
          <div className="row">
            <div className="col-md-4 homemenu-item">
              <div className="homecard my-4">
                <img
                  src="https://www.pizzapoint.com.pk/_next/image?url=https%3A%2F%2Fadmin.indolj.io%2Fupload%2F1675750216-Mexican%20Sandwich.jpg&w=256&q=75"
                  className="card-img-top"
                  alt="Dish 1"
                />
                <div className="card-body">
                  <h2>Appetizers</h2>
                  <p>Delightful Flavorful starters to what your appetite.</p>
                  <Link className="btn btn-danger" to="/menu" role="button">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 homemenu-item">
              <div className="homecard my-4">
                <img
                  src="https://burgerlab.com.pk/wp-content/uploads/2020/12/3.jpg?c062ef&c062ef"
                  className="card-img-top"
                  alt="Dish 1"
                />
                <div className="card-body">
                  <h2>Main Courses</h2>
                  <p>Hearty and flavorful main courses for every palate.</p>
                  <Link className="btn btn-danger" to="/menu" role="button">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 homemenu-item">
              <div className="homecard my-4">
                <img
                  src="https://delizia.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1672381139-Nutella%20Cake.webp&w=384&q=75"
                  className="card-img-top"
                  alt="Dish 1"
                />
                <div className="card-body">
                  <h2>Desserts</h2>
                  <p>Sweet treats to end your meal on a high note.</p>
                  <Link className="btn btn-danger" to="/menu" role="button">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Footer --> */}
      <footer className="footer p-3 mt-5">
        <div className="row">
          <div className="col-md-2">
            <img
              src="data:image/png;base64,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"
              className="logo"
            />
          </div>
          <div className="col-md-4 text-align-left">
            <br/>
            <h4>Phone:</h4>
            <p>+9221111629111</p>

            <br/>
            <h4>Email:</h4>
            <p>
              <a href="mailto:care@mabfastfood.com.pk">care@mabfastfood.com.pk</a>
            </p>

            <br/>
            <h4>Address:</h4>
            <p>
              MAB's Fast Food- Maskan Branch, Shop K3 Plot# FL#5 Block 4 Regency
              Apartment, Gulshan E Iqbal Maskan (Old Bhayani), Karachi
            </p>
            <a href="privacy-policy.html" className="px-2">
              Privacy Policy
            </a>
            <a href="terms-of-use.html" className="px-2">
              Terms of Use
            </a>
            <a href="faqs.html" className="px-2">
              FAQs
            </a>
          </div>
          <div className="col-md-3">
            <br/>
            <h4>Download Our App</h4>

            <a href="your_google_play_link" class="download-button text-center">
              <img src="https://www.nicepng.com/png/detail/435-4350523_get-it-on-google-play-google-play.png" />
            </a>

            <a href="your_apple_store_link" class="download-button">
              <img
                src="https://1000logos.net/wp-content/uploads/2020/08/apple-app-store-logo.jpg"
                style={{ height: "60px" }}
              />
            </a>
          </div>
          <div className="col-md-3">
            <br/>
            <h4>Our Timings</h4>
            <p>Monday - Sunday: 11:00 AM - 03:00 AM</p>

            <br/>
            <h4>Follow Us:</h4>

            <a
              href="https://www.facebook.com"
              target="_blank"
              class="social-icon"
            >
              <img src="https://pizzamax.com.pk/_next/image?url=%2Fimages%2Fsocial%2Ffacebook-48.png&w=32&q=75"/>
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              class="social-icon"
            >
              <img src="https://pizzamax.com.pk/_next/image?url=%2Fimages%2Fsocial%2Finstagram-48.png&w=32&q=75"/>
            </a>
            <br />
            <br />
            <p>&copy; 2023 MAB's Fast Food. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  </>);
}
