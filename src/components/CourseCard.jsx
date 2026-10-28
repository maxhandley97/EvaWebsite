
import React from 'react'
import { motion } from 'framer-motion'

const CourseCard = ({ course }) => {
    const handleClick = () => {
        const section = document.getElementById(course.id)

        if (section) {
            const yOffset = -80
            const y =
                section.getBoundingClientRect().top +
                window.pageYOffset +
                yOffset

            window.scrollTo({
                top: y,
                behavior: 'smooth'
            })
        }
    }

    return (
        <motion.div
            className={`offer-box ${course.className || ''}`}
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
                type: 'spring',
                stiffness: 70,
                damping: 15
            }}
            onClick={handleClick}
            style={{ cursor: 'pointer' }}
        >
            <h4>{course.intro}</h4>

            <p className="course-title">
                {course.title}
            </p>

            <p className="course-click">
                Hier klicken →
            </p>
        </motion.div>
    )
}

export default CourseCard
