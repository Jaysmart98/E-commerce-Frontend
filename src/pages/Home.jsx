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
       <span id="crosstext2" className="card-text text-body-secondary">   $2,000</span>
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
       <span id="crosstext2" className="card-text text-body-secondary">   $120</span>
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
       <span id="crosstext2" className="card-text text-body-secondary">   $1,200</span>
       </div>

       <div id="crossbtn-container">
       <button id="crossbtn">Add to Cart</button>
       </div>
      </div>

    </div>
  </div>
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
<span id="crosstext2" className="card-text text-body-secondary">   $2,000</span>
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
<span id="crosstext2" className="card-text text-body-secondary">   $120</span>
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
<span id="crosstext2" className="card-text text-body-secondary">   $1,200</span>
</div>

<div id="crossbtn-container">
<button id="crossbtn">Add to Cart</button>
</div>
</div>

</div>
</div>

{/* <div id="page3">
<div style="font-size:2em; margin-left: 70px; margin-top: 30px;">Meet the Instructors</div>
                  <div id="object1">
                   <img src="workpiece/ins_justin_cutroni_1x.jpg" alt="">
                   <h2 id="text4" >JUSTIN CUTRONI</h2><hr>
                  <p style="margin-left: 230px; width: 800px;color: rgb(37,37,37);">Justin's mission is to teach everyone how to use digital analytics
                                for their business. With over ten years of industry experience, Justin now leads the Google 
                                Analytics Education team. Justin is an active participant in the digital analytics community.
                                He publishes the blog Analytics Talk and has authored or co-authored three books on Google Analytics.
                                In 2014, he was named the Digital Analytics Industry's
                                Most Influential Contributor by the Digital Analytics Association.</p>
                   </div>

                           <div id="object1">
                               <img src="workpiece/ins_krista_seiden_1x.jpg" alt="">
                               <h2 id="text4">KRISTA SEIDEN</h2><hr>
                               <p style="margin-left: 230px; width: 800px; color: rgb(37,37,37);">Krista is a leader in digital analytics,
                                advocating for best practices, and a frequent speaker at industry events. Krista co-chairs 
                                the San Francisco chapter of the Digital Analytics Association (DAA) and mentors for the Analysis Exchange.
                                She won the 2014 DAA Rising Star Award and the 2015 DAA Practitioner of the Year Award.</p>
                           </div>

                           <div id="object1">
                               <img src="workpiece/ins_ashish_vij_1x.jpg" alt="">
                               <h2 id="text4"> ASHISH VIJ</h2><hr>
                               <p style="margin-left: 230px; width: 800px; color: rgb(37,37,37);">Ashish Vij is a Senior Specialist on Google
                                Analytics 360 at Google. With over 12 years of experience, he works alongside Google’s
                                advertising teams to design and implement measurement strategies for Google’s top tier
                                clients. He was also responsible for developing key platform features along with 
                                deploying commercialization efforts for Google Analytics. Ashish is a measurement evangelist, 
                                and speaks to companies around the importance of implementing measurement as a focus for advertising.</p>
                           </div>

 </div> */}


</div>
      <hr/>
      <Footer/>
      <hr/>
    </>
  );
}

export default Home;