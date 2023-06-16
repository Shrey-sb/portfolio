import React, { useState } from "react";
import Animatedd from "./animatedheading";
function Contentoffirstpage(){


return (
  <div class="row aboutfirst">
  <div class="col-lg-5 col-md-12 col-sm-12">
  <div class="aboutfirst1">
  <i class="fab fa-facebook-f fab1"></i>
  <i class="fab fa-instagram fab1"></i>
  <i class="fab fa-twitter fab1"></i>
  <i  class="fab fa-youtube fab1"></i>
  <h2 class="helloclass">Hello, I'M <span class="namee">Shrey</span></h2>
  <h1 class="changingtext1"> <Animatedd/>  </h1>
  <p class="aboutpara">Knack of building applications with front and back end operations.</p>
  <button class="btn primary-btn btnn bt1"> Hire Me </button>
  <button class="btn primary-btn btnn bt2"> Get Resume </button>

  </div>
  </div>

  <div class=" col-lg-5 col-md-12 col-sm-12">

  <img class="mypfp" src="https://i.ibb.co/n1NR3X0/52-copy-Convert-Image.jpg" alt="hiiiiii"/>


  </div>

  <div class="col-lg-2 col-md-12 col-sm-12">

  <i class="fab fa-youtube temp"></i>

  <br/>
  <i class="fab fa-instagram temp"></i>

  </div>

  </div>
);

}

export default Contentoffirstpage;
