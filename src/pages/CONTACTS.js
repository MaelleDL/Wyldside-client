import emailjs from "emailjs-com";

function Contacts() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q2l9uye",
        "template_umzysp9",
        e.target,
        "user_VrBNhmLh0jCoYSugpKaEg"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Merci pour votre mail, nous vous répondrons dans les plus brefs délais.');
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <div className="Contacts">
      <div className="contact-big-div">
      <div className="big-card big-card-form">
        <form onSubmit={sendEmail}>
          <h2 className="title-Green">CONTACTEZ-NOUS</h2>
          <div className="Form contact-form">
            <div className="column-form column-1-form">
              <label htmlFor="SurName">NOM</label>
              <input type="text" name="SurName" id="SurName" />
              <label htmlFor="Name">PRENOM</label>
              <input type="text" name="Name" id="Name" />
              <label htmlFor="Phone">TELEPHONE</label>
              <input type="text" name="Phone" id="Phone" />
            </div>
            <div className="column-form">
              <label htmlFor="Mail">MAIL</label>
              <input type="text" name="Mail" id="Mail" />
              <label htmlFor="Message">UN PETIT MOT?</label>
              <textarea
                name="Message"
                id="Message"
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </div>
          <div className="button-div">
          <input type="submit" value="ENVOYER" className="submit" />
          </div>
        </form>
      </div>
      </div>
      <div className="little-cards">
      <div className="adresse contact-card card">
        <h2 className="title-Green">ADRESSE</h2>
        <p>WYLDSIDE</p>
        <p>## rue de la performance</p>
        <p>##### SPORTVILLE</p>
      </div>
      <div className="phone contact-card card">
        <h2 className="title-Green">TELEPHONE</h2>
        <p>02.33.94.33.82</p>
        <p>06.63.34.38.82</p>
      </div>
      <div className="mail contact-card card">
        <h2 className="title-Green">MAIL</h2>
        <p>wyldside.44@gmail.com</p>
      </div></div>
    </div>
  );
}

export default Contacts;
