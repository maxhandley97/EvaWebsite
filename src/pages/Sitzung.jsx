import React from 'react';
import './sitzung.css';
import image from '../assets/EvaImages/candels-incense.jpg';
const Sitzung = () => {
  return (
    <div className='sitzung-background'>
      <div className="sitzung">
        <h1>Sitzung und Kosten</h1>
        <div className="top">
          <div>
            <p>
              Zu Beginn der Behandlungen findet ein kurzes Vorgespräch mit Befundung statt, damit bei
              der Shiatsu-Sitzung individuell auf Ihre Bedürfnisse eingegangen werden kann.
            </p>
            <h4>Bitte mitbringen: bequeme Kleidung und warme Socken.</h4>
          </div>
        </div>

        <div className="price-container">
          {/* Table 1: Individual Sessions */}
          <h2>Einzelsitzungen</h2>
          <table className="price-table">
            <thead>
              <tr>
                <th>Dauer</th>
                <th>Preis (€)</th>
                <th>Bemerkungen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>30 Minuten</td>
                <td>35€</td>
                <td>z.B. nur Rückenbehandlung</td>
              </tr>
              <tr>
                <td>60 Minuten</td>
                <td>65€</td>
                <td>Normale Behandlung</td>
              </tr>
            </tbody>
          </table>

          {/* Table 2: Bulk Packages */}
          <h2>Paketangebote</h2>
          <table className="price-table">
            <thead>
              <tr>
                <th>Typ</th>
                <th>Dauer</th>
                <th>Preis (€)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>5-er Karte</td>
                <td>30 Minuten</td>
                <td>160€</td>
              </tr>
              <tr>
                <td>10-er Karte</td>
                <td>30 Minuten</td>
                <td>300€</td>
              </tr>
              <tr>
                <td>5-er Karte</td>
                <td>60 Minuten</td>
                <td>310€</td>
              </tr>
              <tr>
                <td>10-er Karte</td>
                <td>60 Minuten</td>
                <td>550€</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Sitzung;
