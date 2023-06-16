import React from "react";

function navBar(){
  return (
    <nav class="navbar navbar-dark navbar-expand-lg ">
  <a class="navbar-brand" href="#">WELCOME</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link"  href="#firsttt">Home </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#seconddd">About Me</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#thirdd">Resume</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#forthh">Contact Me</a>
      </li>
    </ul>

  </div>
</nav>
);
}


export default navBar;
