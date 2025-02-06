import React, { useState, useEffect } from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { Typography } from '@mui/material';
import { useInView } from 'react-intersection-observer';

const TimelineComponent = () => {
  const [activeStates, setActiveStates] = useState([false, false, false]); // Track the active state of each dot
  const [dates, setDates] = useState(["", "", ""]); // Array for date popups
  const [info, setInfo] = useState(["", "", ""]); // Array for information popups

  // Timeline events with date and info
  const events = [
    {date: "Frühe Jahre", info: "Aus einer Arztfamilie stammend war Gesundheit seit meiner Kindheit immer ein wichtiges Thema. Mein Vater war klassischer Hausarzt, meine Mutter dagegen der Naturheilkunde zugetan und achtete auf gesunde Ernährung. Alle Ferien und Wochenenden wurden sportlich verbracht."},
    {date: "Beruflicher Einstieg", info: "Im ersten Beruf wurde ich Grundschulehrerin mit den Schwerpunkten Geschichte und Theaterpädagogik, auch hier war die Verbindung von Bewegung und Lernen mein Ziel. Im zweiten Beruf wurde ich Heilpraktikerin und widmete mich der naturheilkundlichen und asiatischen Gesundheitslehre."},
    { date: "Shiatsu seit 1979", info: " Ausbildung in der Methode von Namikoshi bei Lili Reiser, bei Wataru Ohashi und seinen Kursen in Berlin, bei Yoshi Myashita und seinen Kursen in Utrecht, Niederlande, bei der Schule für Zen-Shiatsu in Berlin bei Ulrike Schmidt und Cornelia Elbel." },
    { date: "Ki-Aikido seit 1988", info: " Hier steht für mich die Wahrnehmung der eigenen Bewegungsmöglichkeiten, die Kunst des harmonischen Bewegens, der Kontakt mit dem Partner, das Finden einer gemeinsamen Bewegung auch bei Konflikten im Vordergrund." },
    { date: "Jin Shin Jyutsu seit 2003", info: "Ausbildung bei Frau Gunne von Richthofen in Hamburg." }
  ];

  // Intersection observer to detect scroll into view
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // Trigger when the timeline is halfway visible
  });

  useEffect(() => {
    if (inView) {
      // Sequentially animate the timeline
      events.forEach((event, index) => {
        setTimeout(() => {
          // Mark the dot as active
          setActiveStates((prevStates) => {
            const updatedStates = [...prevStates];
            updatedStates[index] = true; // Keep the dot colored
            return updatedStates;
          });

          // Set date and info for each event
          setDates((prevDates) => {
            const updatedDates = [...prevDates];
            updatedDates[index] = event.date;
            return updatedDates;
          });

          setTimeout(() => {
            setInfo((prevInfo) => {
              const updatedInfo = [...prevInfo];
              updatedInfo[index] = event.info;
              return updatedInfo;
            });
          }, 1000); // Delay information display
        }, index * 2500); // Delay each dot animation by 2.5s
      });
    }
  }, [inView, events]);

  return (
    <div ref={ref}>
      <Timeline position="alternate">
        {events.map((event, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot
                color={activeStates[index] ? 'primary' : 'grey'} // Use the activeStates array for dot color
                variant="filled"
              />
              {index < events.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6">{dates[index]}</Typography>
              <Typography variant="body2">{info[index]}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default TimelineComponent;
