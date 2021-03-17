import React, { useState, useEffect } from "react";
import axios from 'axios';

function OneOffer({ match }) {

  const [course, setCourse] = useState([]);
  const [sections, setSections] = useState([]);
  const [forfaits, setForfaits] = useState([]);
  const [selectedSection, setSelectedSection]=useState('');
  const [selectedForfait, setSelectedForfait]=useState('');
  const [offers, setOffers]=useState([]);
  const [offer, setOffer]=useState([]);
  const URL=process.env.REACT_APP_URL

  useEffect(() => {
    fetchCourse();
    fetchOffers();
    getLocalCart();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    filterOffer(selectedForfait,selectedSection)
  },[selectedSection, selectedForfait]);

 

  const fetchCourse = async () => {
    
    axios.get(`${URL}/course/${match.params.id}`)
    .then(res => {
      const response = res.data.data;
      setCourse(response);
      setSections(response.Sections);
      setForfaits(response.Forfaits);
    })
  };

  const fetchOffers=async()=>{
    axios.get(`${URL}/offer?CourseId=${match.params.id}`)
    .then(res=>{const response=res.data.data
    setOffers(response);
    })
  }

  const handleSectionChange=(e)=>{  
     setSelectedSection(e.target.value)};
  
  const handleForfaitChange=(e)=>{  
      setSelectedForfait(e.target.value)};

  const filterOffer=(SForfait,SSection)=>{
    const filteredOffer=offers.filter((el)=>el.ForfaitId==SForfait && el.SectionId==SSection);
    console.log(filteredOffer)
    setOffer(filteredOffer);

  };

  // CART
  const [cartstorage, setCartstorage]=useState([]);
  const addToCart = (offer) => {
    console.log(offer)
    getLocalCart()
    setCartstorage([...cartstorage, offer]);
    localStorage.setItem("cart", JSON.stringify(cartstorage));
  };
  const getLocalCart = () => {
    if (localStorage.getItem("cart") === null) {
      localStorage.setItem("cart", JSON.parse([]));
    } else {
      let cartLocal = JSON.parse(localStorage.getItem("cart"));
      setCartstorage(cartLocal);
    }
  };
  return (
      <div className="One-offer-card big-card">
        <h2 className="title-Green">{course.name}</h2>
        {/* <img src={require(`../Img/NB/JPG/YOGA2-SQUARE-NB.jpg`).default} alt="discipline" width="100%" /> */}
        <div className="top-info">
        <div className="selects">
          <div id="sections">
            <label htmlFor="Sections">Section:</label>
            <select name="Sections" onChange={handleSectionChange} className="offer-select">
              <option disabled selected value>Choisissez votre section</option>
              {sections.map((sections) => (
                <option value={sections.id} key={sections.id}>
                  {sections.name}, {sections.age_range}
                </option>
              ))}
            </select>
          </div>
          <div id="forfaits">
            <label htmlFor="Forfait">Forfait:</label>
            <select name="Forfait" onChange={handleForfaitChange} className="offer-select">
            <option disabled selected value>Choisissez votre forfait</option>
              {forfaits.map((forfait) => (
                <option value={forfait.id} key={forfait.id}>
                  {forfait.duration}
                </option>
              ))}
            </select>
          </div>
          </div>
          <div className="price">
          {offer.map((offer)=>(
            <span key={offer.id} className="title">{offer.price}€</span>
          ))}
        </div>
        </div>
        
        <p>{course.description}</p>
        <div>
          <button onClick={() => addToCart(offer[0])}>
            Souscrire à cette offre
          </button>
        </div>
      </div>
  );
}

export default OneOffer;