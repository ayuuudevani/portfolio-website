import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi'

const Hero = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center section-padding pt-24"
    >
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center space-y-8"
        >
          {/* Greeting */}
          <motion.div variants={fadeIn}>
            <p className="text-lg md:text-xl text-primary font-medium">
              Hi, my name is
            </p>
          </motion.div>

          {/* Name */}
          <motion.div variants={fadeIn}>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white">
              Ayu Devani
            </h1>
          </motion.div>

          {/* Title */}
          <motion.div variants={fadeIn}>
            <h2 className="text-3xl md:text-5xl font-bold text-gradient">
              Frontend Developer
            </h2>
          </motion.div>

          {/* Description */}
          <motion.div variants={fadeIn} className="max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
              I build beautiful, responsive web applications using modern technologies
              like React.js, JavaScript, and Tailwind CSS. Passionate about creating
              exceptional user experiences and clean, maintainable code.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeIn}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#contact"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center space-x-2">
                <FiMail />
                <span>Get In Touch</span>
              </span>
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center space-x-2">
                <FiDownload />
                <span>Download Resume</span>
              </span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={fadeIn} className="flex justify-center space-x-6 pt-8">
            <motion.a
              href="https://github.com/ayuuudevani"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-primary/10"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="GitHub"
            >
              <FiGithub className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/ayudevani"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-primary/10"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:ayudevani@example.com"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-primary/10"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Email"
            >
              <FiMail className="w-6 h-6" />
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={fadeIn}
            className="pt-12"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="inline-block"
            >
              <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="w-1.5 h-1.5 bg-primary rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
