import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './Home.css'

const Home = () => {

  return (
    <>
      <Navbar/>
      <div id="home">
          <h1 id="home_text1">Welcome to SMART-Commerce</h1>


  <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>

  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="carouselIMG" src="https://res.cloudinary.com/dc4fx7sbe/image/upload/v1745790350/food_korgga.png" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Explore all foods Available</h5>
        <p>Use the search button above to to check all sort of foods available.</p>
      </div>
    </div>

    <div className="carousel-item">
      <img src="https://res.cloudinary.com/dc4fx7sbe/image/upload/v1745790861/Wears_l516rl.png" class="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Wears</h5>
        <p>Use the search button above to to check all type of wears available.</p>
      </div>
    </div>

    <div className="carousel-item">
      <img src="https://res.cloudinary.com/dc4fx7sbe/image/upload/v1745790841/furniture_knfeln.png" class="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Furniture</h5>
        <p>Use the search button above to to check all sort of furnitures available.</p>
      </div>
    </div>

    <div className="carousel-item">
      <img src="https://res.cloudinary.com/dc4fx7sbe/image/upload/v1745790801/Gadgets_mfwk9o.png" class="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Gadgets</h5>
        <p>Use the search button above to check all sorts of gadgets available.</p>
      </div>
    </div>

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<br/> <br/> <br/>

    <h2 id="home_text2">WE PROVIDE THE BEST OF ALL ITEMS!</h2>
    <h3 id="home_text3">SMART Commerce is where people shop the latest of all sort of items. 
         With us, shopping is ease and faster. Fashion, Gadgets, Books, Furniture, Foods and etc. 
      </h3>
      </div>

      <br/>  <br/>  <br/> <br />
      <hr/>
      <Footer/>
      <hr/>
    </>
  );
}

export default Home;