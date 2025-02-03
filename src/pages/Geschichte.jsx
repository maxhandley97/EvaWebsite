import React, { useState } from 'react';
import './Geschichte.css';

const HistoryPage = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const timelineItems = [
    {
      title: 'Tokujiro Namikoshi & Tempeki Tamai',
      content: 'Hier kommt die ausführliche Geschichte zu Tokujiro Namikoshi & Tempeki Tamai.',
    },
    {
      title: 'Shizuto Masunaga',
      content: 'Hier kommt die ausführliche Geschichte zu Shizuto Masunaga.',
    },
    {
      title: 'Wataru Ohashi',
      content: 'Hier kommt die ausführliche Geschichte zu Wataru Ohashi.',
    },
    {
      title: 'Kōichi Tōhei',
      content: 'Hier kommt die ausführliche Geschichte zu Kōichi Tōhei.',
    },
  ];

  return (
    <div className="history-container">
      <header className="history-header">
        <h1>Geschichte der Methoden</h1>
      </header>

      <section className="history-section">
        <h2>Geschichte des Shiatsu</h2>
        <p>
          Die Wurzeln des Shiatsu kommen von Tuina - einer medizinischen Massage-Technik aus China - und von den japanischen Formen des Anma, der traditionellen japanischen Massage. Seit der Einführung des westlichen Gesundheitswesens wurden Anfang des 20. Jahrhunderts verschiedene Formen manueller Behandlungsmethoden unter dem Namen Shiatsu zusammengefasst, um einen Platz im neuen Gesundheitswesen zu erlangen.
        </p>
        <div className="image-placeholder">
          <span>Bild hier einfügen</span>
        </div>

        <p>
          Sowohl Tokujiro Namikoshi als auch Tempeki Tamai bauten die Behandlungsmethoden aus, um diese im Gesundheitssystem zu etablieren und bezogen die Meridianlehre mit ein. Durch Shizuto Masunaga erlebte das Shiatsu einen weiteren Durchbruch mit der Verbreitung auch in den USA und Europa. Er baute das Meridianmodell aus, zu dem auch Diagnosepunkte und -bereiche am ganzen Körper gehören.
        </p>

        <p>
          Zu den weiteren großen Lehrern ist Wataru Ohashi zu nennen, der auch Kurse in Europa und Berlin gab. Seit den 80-er Jahren hat sich das Shiatsu in Europa etabliert, seit den 90-er Jahren wurden in Deutschland mehrere Schulen gegründet und die GSD - Gesellschaft für Shiatsu Deutschland.
        </p>

        <div className="image-placeholder">
          <span>Bild hier einfügen</span>
        </div>

        <p>
          Heutzutage wird Shiatsu sowohl zur Heilung als auch im Wellnessbereich angewandt. In Europa wird es an Privatinstituten gelehrt. Da es zum Wesen des Shiatsu gehört, verschiedene physiologische Behandlungsrichtungen zu integrieren, entwickelt es sich ständig weiter. Es gibt zahlreiche unterschiedliche Richtungen und Schwerpunkte.
        </p>

        <p>
          Ich möchte noch Kōichi Tōhei erwähnen, den Begründer des Ki-Aikidō. Er zeigte eine Verbindung von Ki-Aikido und Shiatsu. Er entwickelte das an Shiatsu angelehnte Kiatsu, bei dem man zur Entspannung verhärteter Muskeln diesen Ki zuführt.
        </p>
      </section>

      <section className="timeline">
        <h3>Wichtige Persönlichkeiten</h3>
        {timelineItems.map((item, index) => (
          <div key={index} className="timeline-item">
            <button
              onClick={() => toggle(index)}
              className="timeline-toggle"
            >
              {item.title}
              <span className={`chevron ${open === index ? 'rotate' : ''}`}>&#9660;</span>
            </button>
            {open === index && (
              <p className="timeline-content">{item.content}</p>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default HistoryPage;
