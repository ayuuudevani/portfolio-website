import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/ayuuudevani',
      icon: FiGithub,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/ayudevani',
      icon: FiLinkedin,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/ayuuudevani',
      icon: FiTwitter,
    },
    {
      name: 'Email',
      url: 'mailto:ayudevani@example.com',
      icon: FiMail,
    },
  ]

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="container-custom">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-primary/10 transition-all"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={link.name}
              >
                <link.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p className="flex items-center justify-center space-x-2">
              <span>© {currentYear} Ayu Devani. Built with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <FiHeart className="inline text-red-500" />
              </motion.span>
              <span>using React & Vite</span>
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex space-x-6 text-sm text-gray-600 dark:text-gray-400">
            <a href="#home" className="hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
