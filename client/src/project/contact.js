import React,{useState} from "react";
import { Link } from "react-router-dom";
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function Contact() {
  const [showModal, setShowModal] = useState(false);
  const [state, setState] = useState([{ name: " ", email: " ", msg: " " }]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/add/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: state.name,
        email: state.email,
        msg: state.msg,
      }),
    });
    const json = await response.json();
    console.log(json);
    setState({ name: " ", email: " ", msg: " " });
    if (json.success){
      setShowModal(true);
    
    setTimeout(() => {
      window.location.reload();
      window.scrollTo(0, 0);
    }, 1000); // Adjust the delay as needed
  }};

  const handleCloseModal = () => {
    setShowModal(false);
    // You can also reset the form data here if needed
    setState({category: " ", name: " ", url: " ", desc: " ", price: " " })
  };

  const changeon = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return (
    <div>
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
            <li className="nav-item">
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
              <Link className="nav-link active" to="/contact">
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

      {/* <!-- Jumbotron --> */}
      <div class="jumbotron text-center text-white">
        <h1>Contact Us</h1>
        <p>Have questions or feedback? Reach out to us.</p>
      </div>

      {/* <!-- Contact Form --> */}
      <div class="container contact-form">
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <form onSubmit={handleSubmit}>
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  onChange={changeon}
                  name="name"
                  value={state.name}
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Your Name"
                />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  onChange={changeon}
                  name="email"
                  value={state.email}
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Your Email"
                />
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea
                  onChange={changeon}
                  name="msg"
                  value={state.msg}
                  class="form-control"
                  id="message"
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-danger">
                Submit
              </button>
            </form><Modal
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
      </div>

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
            <br />
            <h4>Phone:</h4>
            <p>+9221111629111</p>

            <br />
            <h4>Email:</h4>
            <p>
              <a href="mailto:care@mabfastfood.com.pk">
                care@mabfastfood.com.pk
              </a>
            </p>

            <br />
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
            <br />
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
            <br />
            <h4>Our Timings</h4>
            <p>Monday - Sunday: 11:00 AM - 03:00 AM</p>

            <br />
            <h4>Follow Us:</h4>

            <a
              href="https://www.facebook.com"
              target="_blank"
              class="social-icon"
            >
              <img src="https://pizzamax.com.pk/_next/image?url=%2Fimages%2Fsocial%2Ffacebook-48.png&w=32&q=75" />
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              class="social-icon"
            >
              <img src="https://pizzamax.com.pk/_next/image?url=%2Fimages%2Fsocial%2Finstagram-48.png&w=32&q=75" />
            </a>
            <br />
            <br />
            <p>&copy; 2023 MAB's Fast Food. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
