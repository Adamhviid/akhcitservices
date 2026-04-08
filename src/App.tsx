import "./App.css";

function App() {
  return (
    <div id="page">
      <header>
        <div className="container">
          <span className="logo">
            AKHC <span className="logo-sub">IT Services</span>
          </span>
          <span className="cvr">CVR: 46 34 61 73</span>
        </div>
      </header>

      <main>
        <section id="intro">
          <div className="container">
            <h1>
              Webudvikling og
              <br />
              IT-rådgivning til virksomheder
            </h1>
            <p>
              Jeg bygger og vedligeholder webløsninger til B2B-virksomheder —
              fra skræddersyede PHP-applikationer til sikker,
              vedligeholdelsesvenlig kode. Du arbejder direkte med mig, ikke med
              et bureau.
            </p>
            <div className="tags">
              <span className="tag">PHP</span>
              <span className="tag">JavaScript</span>
              <span className="tag">C#</span>
              <span className="tag">MongoDB</span>
              <span className="tag">MySQL</span>
              <span className="tag">Webshops</span>
              <span className="tag">B2B</span>
              <span className="tag">Sikkerhed</span>
            </div>
          </div>
        </section>

        <section id="ydelser">
          <div className="container">
            <h2>Hvad kan jeg hjælpe med?</h2>
            <ul className="services">
              <li>
                <h3>Webudvikling og vedligeholdelse</h3>
                <p>
                  Skræddersyede webapplikationer og hjemmesider i PHP og MySQL.
                  Jeg overtager gerne eksisterende projekter og sørger for, at
                  de er stabile, sikre og nemme at arbejde med fremadrettet.
                </p>
              </li>
              <li>
                <h3>B2B-webløsninger</h3>
                <p>
                  Kontrolpaneler, produktkataloger, prislogik og kundeportaler
                  til virksomheder der har brug for mere end en standard
                  hjemmeside. Løsninger der passer til jeres
                  forretningsprocesser.
                </p>
              </li>
              <li>
                <h3>Websikkerhed</h3>
                <p>
                  Gennemgang og sikring af eksisterende kode — herunder
                  beskyttelse mod SQL-injection, korrekt håndtering af
                  adgangskoder og opdatering af forældet kode til moderne
                  standarder.
                </p>
              </li>
              <li>
                <h3>IT-rådgivning</h3>
                <p>
                  Usikker på hvilken løsning der passer til jeres behov? Jeg
                  giver ærlig rådgivning baseret på praktisk erfaring fra både
                  privat webudvikling og IT-arbejde i det offentlige.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section id="kontakt">
          <div className="container">
            <h2>Lad os tage en snak</h2>
            <p>
              Fortæl mig hvad du har brug for, så vender jeg tilbage inden for
              et par dage.
            </p>
            <div className="contact-info">
              <a href="mailto:hviidadam@gmail.com">hviidadam@gmail.com</a>
              <a href="tel:+4531319100">+45 31 31 91 00</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>
            © {new Date().getFullYear()} AKHC IT Services — Adam Kanstrup Hviid
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
