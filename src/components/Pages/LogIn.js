function LogIn() {
  return (
    <div className="App">
      <div id="LOGIN">
        <div className="big-card">
          <form action="POST">
            <h2 className="title-Green">CONNEXION</h2>
            <div className="Form Connect">
              <label htmlFor="Log">IDENTIFIANT (mail)</label>
              <input type="text" name="Log" id="Log" />
              <label htmlFor="password">MOT DE PASSE</label>
              <input type="password" name="password" id="password" />
              <input type="submit" value="CONNEXION" className="submit" />
            </div>
          </form>
        </div>
        <div className="big-card">
          <form action="POST">
            <h2 className="title-Green">PREMIERE INSCRIPTION</h2>
            <div className="Form">
              <div className="column-form column-1-form">
                <label htmlFor="SurName">NOM</label>
                <input type="text" name="SurName" id="SurName" />
                <label htmlFor="Name">PRENOM</label>
                <input type="text" name="Name" id="Name" />
                <label htmlFor="Mail">MAIL</label>
                <input type="text" name="Mail" id="Mail" />
              </div>
              <div className="column-form">
                <label htmlFor="MDP">MOT DE PASSE</label>
                <input type="text" name="Phone" id="Phone" />
                <label htmlFor="Mail">MOT DE PASSE (ressaisi)</label>
                <input type="text" name="Mail" id="Mail" />
                <label htmlFor="option">OPTION</label>
                <select name="option" id="option" />
              </div>
            </div>
            <input type="submit" value="INSCRIPTION" className="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
