function Contacts() {
  return (
    <div className="Contacts">
      <div className="big-card">
        <form action="POST">
          <h2 className="title-Green">CONTACTEZ-NOUS</h2>
          <div className="Form">
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
          <input type="submit" value="ENVOYER" className="submit" />
        </form>
      </div>
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
      </div>
    </div>
  );
}

export default Contacts;
