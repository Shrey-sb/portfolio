import React, { useState } from "react";
import Education from "./education";
import Workhistory from "./workhistory";
import Programmingskills from "./programmingskills";
import Projects from "./projects";
import Interests from "./interests";
function Bodyofthirdsection() {
  const [contentbelow, toggleitnow] = useState(<Education />);
  const [isMousedOver, setMouseOver] = useState(false);
  const [isMousedOver1, setMouseOver1] = useState(false);
  const [isMousedOver2, setMouseOver2] = useState(false);
  const [isMousedOver3, setMouseOver3] = useState(false);
  const [isMousedOver4, setMouseOver4] = useState(false);

  function haha1(event) {
    toggleitnow(<Workhistory/>);
  }
  function haha2(event) {
    toggleitnow(<Programmingskills/>);
  }
  function haha3(event) {
    toggleitnow(<Projects/>);
  }
  function haha4(event) {
    toggleitnow(<Interests/>);
  }
  function haha(event) {
    toggleitnow(<Education/>);
  }
  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }
  function handleMouseOver1() {
    setMouseOver1(true);
  }

  function handleMouseOut1() {
    setMouseOver1(false);
  }
  function handleMouseOver2() {
    setMouseOver2(true);
  }

  function handleMouseOut2() {
    setMouseOver2(false);
  }
  function handleMouseOver3() {
    setMouseOver3(true);
  }

  function handleMouseOut3() {
    setMouseOver3(false);
  }
  function handleMouseOver4() {
    setMouseOver4(true);
  }

  function handleMouseOut4() {
    setMouseOver4(false);
  }
  const eachbiostyle = {

      backgroundColor: isMousedOver ? "#1f2235" : "white" ,
      color : isMousedOver ? "white" : "black"

};
const eachbio1style = {

    backgroundColor: isMousedOver1 ? "#1f2235" : "white" ,
    color : isMousedOver1 ? "white" : "black"

};
const eachbio2style = {

    backgroundColor: isMousedOver2 ? "#1f2235" : "white" ,
    color : isMousedOver2 ? "white" : "black"

};
const eachbio3style = {

    backgroundColor: isMousedOver3 ? "#1f2235" : "white" ,
    color : isMousedOver3 ? "white" : "black"

};
const eachbio4style = {

    backgroundColor: isMousedOver4 ? "#1f2235" : "white" ,
    color : isMousedOver4 ? "white" : "black"

};

  return (
    <section class="biotempate">
      <div class="row">
        <div class="bioo ">
        <div style={eachbiostyle} onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut} onClick={haha} class="eachbio">
          <i class="fas fa-user-graduate"></i>
          <span class="biospan">Education</span>
          </div>
          <div onMouseOver={handleMouseOver1}
          onMouseOut={handleMouseOut1} style={eachbio1style} onClick={haha1}class="eachbio1">
          <i  class="fas fa-history"></i>
          <span  class="biospan">
            Work History
          </span>
          </div>
          <div onMouseOver={handleMouseOver2}
          onMouseOut={handleMouseOut2} style={eachbio2style}onClick={haha2}class="eachbio2">
          <i  class="fas fa-laptop"></i>
          <span class="biospan">Programming Skills</span>
          </div>
          <div onMouseOver={handleMouseOver3}
          onMouseOut={handleMouseOut3} style={eachbio3style} onClick={haha3}class="eachbio3">
          <i  class="fas fa-tasks"></i>
          <span class="biospan">Projects</span>
          </div>
            <div onMouseOver={handleMouseOver4}
            onMouseOut={handleMouseOut4} style={eachbio4style} onClick={haha4}class="eachbio4">
          <i   class="fab fa-pinterest"></i>
          <span class="biospan">Interests</span>
          </div>
        </div>
        <hr class="bioline" />

        <div class="biokacontent">{contentbelow}</div>
      </div>
    </section>
  );
}

export default Bodyofthirdsection;
