import React from 'react'
import { motion } from "framer-motion"
import './ShiatsuSticker.css'

const ShiatsuSticker = () => {
  return (
    <div className='new-offer shiatsu-offer'>
      <motion.div
        className="offer-box shiatsu-box-sticker"
        initial={{ x: 150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 70, damping: 15, delay: 1 }}
        onClick={() => {
          const section = document.getElementById("shiatsu")
          if (section) {
            section.scrollIntoView({ behavior: "smooth" })
          }
        }}
        style={{ cursor: "pointer" }}
      >
        <h4>Neuer Kurs:</h4>
        <p>
          <strong>Shiatsu-Kurs:</strong><br />
          Rückenmassage für Einsteiger<br />
          <em>Fr. 7.11. & 14.11.25 <br />· 17.30–19.30 Uhr</em><br />
          <strong>60 €</strong>
        </p>
      </motion.div>
    </div>
  )
}

export default ShiatsuSticker
