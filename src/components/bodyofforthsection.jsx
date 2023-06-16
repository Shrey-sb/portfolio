import React from "react";
import Animated2 from "./animatedheading2";
function bodyofforthsection(){

  return (
    <section class="temmpate">
      <div class="row">
        <div class="col-lg-6 leftside">
        <h2>
        <Animated2/>
        </h2>
        <div class ="icoons">
        <i class="fab fa-facebook-f fab1"></i>
        <i class="fab fa-instagram fab1"></i>
        <i class="fab fa-twitter fab1"></i>
        <i class="fab fa-youtube fab1"></i>
        </div>
        <br/>
        <p class='veryspecific'>Send your message</p>
        </div>

        <div class="col-lg-6 ">
        <div class="formclass">
        <form>

  <div class="form-outline mb-4">
  <label class="form-label" for="form4Example1">Name</label>
    <input type="text" id="form4Example1" class="form-control" />

  </div>


  <div class="form-outline mb-4">
    <label class="form-label" for="form4Example2">Email address</label>
    <input type="email" id="form4Example2" class="form-control" />

  </div>


  <div class="form-outline mb-4">
  <label class="form-label" for="form4Example3">Message</label>
    <textarea class="form-control" id="form4Example3" rows="4"></textarea>

  </div>

  <div class="sendbutton">

  <button type="submit" class="btn btn-primary btn-block mb-4">Send</button>
  </div>
</form>
        </div>

        </div>

      </div>


    </section>

  );
}


export default bodyofforthsection;
