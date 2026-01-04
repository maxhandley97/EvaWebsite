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
          <strong>Shiatsu-Kurs – Rückenmassage für Einsteiger</strong><br />
          Rückenmassage für Einsteiger<br />
          <em>Sa 31.1.26 · So 1.2.26Uhr</em><br />
          <strong>75 €</strong>
        </p>
      </motion.div>
    </div>
  )
}

export default ShiatsuSticker
