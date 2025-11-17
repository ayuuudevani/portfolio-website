import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800/50" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <h2 className="section-title">About Me</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Get to know more about who I am and what I do
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image/Illustration Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl transform rotate-6"></div>
              <div className="relative bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-48 h-48 mx-auto bg-gradient-primary rounded-full flex items-center justify-center text-white text-6xl font-bold">
                    AD
                  </div>
                  <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm">
                    Replace with your photo
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Frontend Developer based in Indonesia
            </h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Hello! I&apos;m Ayu Devani, a passionate Frontend Developer specializing in building
                exceptional digital experiences. With a strong foundation in React.js and modern
                JavaScript, I focus on creating responsive, user-friendly web applications.
              </p>
              
              <p>
                My journey in web development started with a curiosity about how websites work,
                and it has evolved into a passion for creating beautiful, performant applications
                that users love. I&apos;m constantly learning new technologies and best practices to
                stay current in this ever-evolving field.
              </p>
              
              <p>
                When I&apos;m not coding, you can find me exploring new design trends, contributing to
                open-source projects, or sharing knowledge with the developer community. I believe
                in writing clean, maintainable code and creating intuitive user interfaces.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-primary">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Years Exp</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-primary">20+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Projects</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Happy Clients</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
