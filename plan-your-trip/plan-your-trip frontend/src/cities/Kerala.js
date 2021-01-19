import React, { useEffect, useState } from "react";
import "./Kerala.css";
import Description from "../Components/Description";
import NavBar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import {
  religiousImages,
  touristImages,
  beachImages,
} from "../CityImages/KeralaImg";
import BookingForm from "../BookingForm/BookingForm";

<<<<<<< HEAD
function Navbars() {
  return (
    <div>
      <img
        className="kerala"
        alt="bgimage"
        src="https://images.thrillophilia.com/image/upload/s--UU1d3-Sv--/c_fill,dpr_1.0,f_auto,fl_strip_profile,g_center,h_450,q_auto,w_753/v1/images/photos/000/098/848/original/1552472870_houseboat8.png.jpg"
      ></img>
      <h2 className="keralaname">Kerala</h2>
    </div>
  );
=======
function IntroImage(){
    return(
        <div>
            <img className="kerala" alt="bgimage" src="https://images.thrillophilia.com/image/upload/s--UU1d3-Sv--/c_fill,dpr_1.0,f_auto,fl_strip_profile,g_center,h_450,q_auto,w_753/v1/images/photos/000/098/848/original/1552472870_houseboat8.png.jpg"></img>
            <h2 className="keralaname">Kerala</h2>
        </div>
    );
>>>>>>> 73612e9d5b7dbee060fcba734b64fa2b4373adc0
}

function Body(props) {
  return (
    <div className="infokerala">
      <button className="booknow" value="Hyderabad" onClick={props.handler}>
        Book now
      </button>
      <h1>About Kerala</h1>
      <p>
        India’s millennia-old natural medicine, Ayurveda, is the guiding force
        in southern state Kerala’s famed health resorts. To rejuvenate in
        luxurious surrounds, try 50-acre oasis Kairali Ayurvedic Health Resort’s
        authentic ayurvedic healing with aromatherapy, massage, essential oils
        and yoga.
      </p>
    </div>
  );
}

<<<<<<< HEAD
export default function Kerala(props) {
  const [showform, setshowForm] = useState(false);
  const updateState = () => {
    setshowForm(true);
  };
  return (
    <div>
      {showform ? (
        <BookingForm city="Kerala" />
      ) : (
        <>
          <div>
            <NavBar />
            <Navbars />
            <Body />
            <Description
              religiousImages={religiousImages}
              touristImages={touristImages}
              beachImages={beachImages}
            />
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}
=======
export default function Kerala(){
    let firsttab="Kerala Religious";
    let secondtab="Kerala Visitor places";
    let thirdtab="Kerala Famous places";
    return(
        <div>
            <NavBar/>
            <IntroImage/>
            <Body/>
            <Description firsttab={firsttab} secondtab={secondtab} thirdtab={thirdtab} religiousImages={religiousImages} touristImages={touristImages} beachImages={beachImages}/>
            <Footer/>
        </div>            
    );
}
>>>>>>> 73612e9d5b7dbee060fcba734b64fa2b4373adc0
