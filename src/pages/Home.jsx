import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './Home.css'


const Home = () => {

  return (
    <>
      <Navbar/>
      <div id="home">
          <h1 id="home_text1">Hello, Olive👋</h1>

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
        <h5>Explore all foods available</h5>
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
        <p>Use the search button above to to check all sort of furniture available.</p>
      </div>
    </div>

    <div className="carousel-item">
      <img id="cardIMG" src="https://res.cloudinary.com/dc4fx7sbe/image/upload/v1745790801/Gadgets_mfwk9o.png" class="d-block w-100" alt="..."/>
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
<br/> 

    <h2 id="home_text2">WE PROVIDE THE BEST OF ALL ITEMS!</h2>
    <h3 id="home_text3">Shop the latest of all sort of items with us with ease. Fashion, Gadgets, Books, Furniture, Foods and etc. 
      </h3>
      </div>
      
  <div className="card-group">
    <div className="card">
    <img src="https://res.cloudinary.com/dc4fx7sbe/image/upload/v1745790801/Gadgets_mfwk9o.png" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">GADGETS</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
     
      <div id="crossSpan">
       <div id="">
       <span className="card-text text-body-secondary">$1,500     </span> 
       <span id="crosstext2" className="card-text text-body-secondary">   </span>
       </div>

       <div id="crossbtn-container">
       <button id="crossbtn">Add to Cart</button>
       </div>
      </div>

    </div>
  </div>

  <div className="card">
    <img src="https://res.cloudinary.com/dc4fx7sbe/image/upload/v1745790350/food_korgga.png" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">MEALS</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content Lorem, ipsum dolor sit amet consectetur adipisicing el.</p>

      <div id="crossSpan">
       <div id="">
       <span className="card-text text-body-secondary">$50     </span> 
       <span id="crosstext2" className="card-text text-body-secondary">  </span>
       </div>

       <div id="crossbtn-container">
       <button id="crossbtn">Add to Cart</button>
       </div>
      </div>

    </div>
  </div>

  <div className="card">
    <img src="https://res.cloudinary.com/dc4fx7sbe/image/upload/v1745790841/furniture_knfeln.png" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">FURNITURE</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
     
      <div id="crossSpan">
       <div id="">
       <span className="card-text text-body-secondary">$900     </span> 
       <span id="crosstext2" className="card-text text-body-secondary">  </span>
       </div>

       <div id="crossbtn-container">
       <button id="crossbtn">Add to Cart</button>
       </div>
      </div>

    </div>
  </div>
</div>

<div className="card-group">
<div className="card card-2">
<img id="cardIMG"  src="https://res.cloudinary.com/dc4fx7sbe/image/upload/v1746439089/jacket_yuyxnb.webp" className="card-img-top" alt="..."/>
<div className="card-body">
<h5 className="card-title">JACKET</h5>
<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>

<div id="crossSpan">
<div id="">
<span className="card-text text-body-secondary">$1,500     </span> 
<span id="crosstext2" className="card-text text-body-secondary">   </span>
</div>

<div id="crossbtn-container">
<button id="crossbtn2">Add to Cart</button>
</div>
</div>

</div>
</div>

<div className="card card-2">
<img id="cardIMG"  src="https://res.cloudinary.com/dc4fx7sbe/image/upload/v1746446441/Richard_Millie_i4yrqd.webp" className="card-img-top" alt="..."/>
<div className="card-body">
<h5 className="card-title">RICHARD MILLIE</h5>
<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>

<div id="crossSpan">
<div id="">
<span className="card-text text-body-secondary">$550,000     </span> 
<span id="crosstext2" className="card-text text-body-secondary">  </span>
</div>

<div id="crossbtn-container">
<button id="crossbtn2">Add to Cart</button>
</div>
</div>

</div>
</div>

<div className="card card-2">
<img id="cardIMG" src="https://res.cloudinary.com/dc4fx7sbe/image/upload/v1746439050/Black-Jacket_ajhhuc.webp" className="card-img-top" alt="..."/>
<div className="card-body">
<h5 className="card-title">BLACK SHIRT</h5>
<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>

<div id="crossSpan">
<div id="">
<span className="card-text text-body-secondary">$900     </span> 
<span id="crosstext2" className="card-text text-body-secondary"> </span>
</div>

<div id="crossbtn-container">
<button id="crossbtn2">Add to Cart</button>
</div>
</div>
</div>
</div>
</div>


{/* <div>
  <div>
    <h2>Meet Our Partners</h2>
  </div>  

  <div>
    <img src="" alt="" />
    <div>
      h1
    </div>
  </div>
</div> */}


<div className="card-group">
<div className="card card-2">
<img id="cardIMG"  src="https://res.cloudinary.com/dc4fx7sbe/image/upload/v1746439060/bag_rcpwwa.webp" className="card-img-top" alt="..."/>
<div className="card-body">
<h5 className="card-title">LEATHER BROWN BAG</h5>
<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>

<div id="crossSpan">
<div id="">
<span className="card-text text-body-secondary">$1,100     </span> 
<span id="crosstext2" className="card-text text-body-secondary">   </span>
</div>

<div id="crossbtn-container">
<button id="crossbtn2">Add to Cart</button>
</div>
</div>

</div>
</div>

<div className="card card-2">
<img id="cardIMG"  src="https://res.cloudinary.com/dc4fx7sbe/image/upload/v1746438951/short_d2qe3m.webp" className="card-img-top" alt="..."/>
<div className="card-body">
<h5 className="card-title">SHORT TROUSER</h5>
<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>

<div id="crossSpan">
<div id="">
<span className="card-text text-body-secondary">$500     </span> 
<span id="crosstext2" className="card-text text-body-secondary">  </span>
</div>

<div id="crossbtn-container">
<button id="crossbtn2">Add to Cart</button>
</div>
</div>

</div>
</div>

<div className="card card-2">
<img id="cardIMG" src="https://res.cloudinary.com/dc4fx7sbe/image/upload/v1746448132/BLUE_SHIRT_virjdv.webp" className="card-img-top" alt="..."/>
<div className="card-body">
<h5 className="card-title">NAVY BLUE T-SHIRT</h5>
<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>

<div id="crossSpan">
<div id="">
<span className="card-text text-body-secondary">$900     </span> 
<span id="crosstext2" className="card-text text-body-secondary"> </span>
</div>

<div id="crossbtn-container">
<button id="crossbtn2">Add to Cart</button>
</div>
</div>
</div>
</div>
</div>




<div className="card-group">
<div className="card card-2">
<img id="cardIMG"  src="https://res.cloudinary.com/dc4fx7sbe/image/upload/v1746446415/fadeShirt_fwbtvv.webp" className="card-img-top" alt="..."/>
<div className="card-body">
<h5 className="card-title">T-SHIRT</h5>
<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>

<div id="crossSpan">
<div id="">
<span className="card-text text-body-secondary">$1,500     </span> 
<span id="crosstext2" className="card-text text-body-secondary">   </span>
</div>

<div id="crossbtn-container">
<button id="crossbtn2">Add to Cart</button>
</div>
</div>

</div>
</div>

<div className="card card-2">
<img id="cardIMG"  src="https://res.cloudinary.com/dc4fx7sbe/image/upload/v1746446429/glasses_bcocxk.webp" className="card-img-top" alt="..."/>
<div className="card-body">
<h5 className="card-title">GLASSES</h5>
<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>

<div id="crossSpan">
<div id="">
<span className="card-text text-body-secondary">$550,000     </span> 
<span id="crosstext2" className="card-text text-body-secondary">  </span>
</div>

<div id="crossbtn-container">
<button id="crossbtn2">Add to Cart</button>
</div>
</div>

</div>
</div>

<div className="card card-2">
<img id="cardIMG" src="https://res.cloudinary.com/dc4fx7sbe/image/upload/v1746446407/Baggy_cyi2mg.webp" className="card-img-top" alt="..."/>
<div className="card-body">
<h5 className="card-title">BLACK BAG</h5>
<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>

<div id="crossSpan">
<div id="">
<span className="card-text text-body-secondary">$900     </span> 
<span id="crosstext2" className="card-text text-body-secondary"> </span>
</div>

<div id="crossbtn-container">
<button id="crossbtn2">Add to Cart</button>
</div>
</div>
</div>
</div>








</div>





      <hr/>
      <Footer/>
      <hr/>
    </>
  );
}

export default Home;