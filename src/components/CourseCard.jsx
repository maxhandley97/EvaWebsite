import React from 'react'
import { motion } from "framer-motion"

const CourseCard = ({ course }) => {
  return (
    <motion.div
      className={`offer-box ${course.className || ""}`}
      initial={{ x: 150, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 70,
        damping: 15,
      }}
      onClick={() => {
        

        const section = document.getElementById(course.id)

        console.log(course.className)

        if (section) {
          const yOffset = -80 // -2rem-ish
            const y =
              section.getBoundingClientRect().top +
              window.pageYOffset +
              yOffset

            window.scrollTo({
              top: y,
              behavior: "smooth",
})
        }
      }}
      style={{ cursor: "pointer" }}
    >
      <h4>{course.intro}</h4>

      <p className="course-title">
        {course.title}
      </p>

      <p className="course-schedule">
        {course.schedule}
    </p>
    <p className="course-click">
      Hier klicken →
    </p>
    </motion.div>
  )
}

export default CourseCard