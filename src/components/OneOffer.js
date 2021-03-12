import React, { useState, useEffect } from "react";
import axios from 'axios';
import "../App.css";

function OneOffer({ match }) {
  useEffect(() => {
    fetchCourse();
    // eslint-disable-next-line
  }, []);

  const [course, setCourse] = useState([]);
  const [sections, setSections] = useState([]);
  const [forfaits, setForfaits] = useState([]);
  const [selectedSection, setSelectedSection]=useState([]);
  const [offer, setOffer]=useState([]);
  const URL=process.env.REACT_APP_URL
  const fetchCourse = async () => {
    
    axios.get(`${URL}/course/${match.params.id}`)
    .then(res => {
      const response = res.data.data;
      setCourse(response);
      setSections(response.Sections);
      setForfaits(response.Forfaits);
      fetchOffer(response.id);
    })
  };

  const fetchOffer=async(id)=>{
    axios.get(`${URL}/offer?CourseId=${id}`)
    .then(res=>{const response=res.data
      console.log(response)}
      )
  }


  // CART
  const [cartstorage, setCartstorage]=useState([]);
  const addToCart = (offer) => {
    getLocalCart()
    setCartstorage([...cartstorage, offer]);
    console.log(cartstorage);
    localStorage.setItem("cart", JSON.stringify(cartstorage));
  };
  const getLocalCart = () => {
    if (localStorage.getItem("cart") === null) {
      localStorage.setItem("cart", JSON.stringify([]));
    } else {
      let cartLocal = JSON.parse(localStorage.getItem("cart"));
      setCartstorage(cartLocal);
    }
  };
  return (
      <div className="One-offer-card big-card">
        <h2 className="title-Green">{course.name}</h2>
        <img src={course.image_path} alt="img" width="100%" />
        <div className="selects">
          <div id="sections">
            <label htmlFor="Sections">Section:</label>
            <select name="Sections" className="offer-select">
              {sections.map((sections) => (
                <option value={sections.name} key={sections.id}>
                  {sections.name}, {sections.age_range}
                </option>
              ))}
            </select>
          </div>
          <div id="forfaits">
            <label htmlFor="Forfait">Forfait:</label>
            <select name="Forfait" className="offer-select">
              {forfaits.map((forfait) => (
                <option value={forfait.duration} key={forfait.id}>
                  {forfait.duration}
                </option>
              ))}
            </select>
          </div>
        </div>
        <p>{course.description}</p>
        <div>
          <button onClick={() => addToCart(offer)}>
            Souscrire à cette offre
          </button>
        </div>
      </div>
  );
}

export default OneOffer;
