import '../styling/sitzung.css'

const Sitzung = () => {
  return (
    <div>
        <div className='container'>
                <h1>Sitzung und Kosten</h1>
            
                <p>
                Zu Beginn der Behandlungen findet ein kurzes Vorgespräch mit Befundung statt, damit bei der Shiatsu-Sitzung individuell auf Ihre Bedürfnisse eingegangen werden kann
                </p>  
          <div className='price-container'>
            <div className='price'>
                <h5> 60 Minuten:  65€ </h5>
                <h5>5-er Karte:   310€</h5>
                <h5>10-er Karte: 550€</h5>
                
            </div>
            <div className='price'>
                <h5>30 Minuten:  35€ </h5>
                <h5>5-er Karte:   160€</h5>
                <h5>10-er Karte: 300€</h5>
                <p>(z.B. nur Rückenbehandlung)</p>
            </div>
            </div>
            <h4>bitte mitbringen: bequeme Kleidung und warme Socken.</h4>
        </div>
    </div>
  )
}

export default Sitzung