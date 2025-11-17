# Portfolio Website

A modern, responsive portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. This project showcases a clean and professional design with smooth animations and dark mode support.

![Portfolio Preview](https://via.placeholder.com/1200x600?text=Portfolio+Website+Preview)

## 🌟 Features

- ⚡ **Fast Development** - Built with Vite for lightning-fast HMR (Hot Module Replacement)
- ⚛️ **React 18** - Latest React features and best practices
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- 🎬 **Framer Motion** - Smooth and beautiful animations
- 🌓 **Dark/Light Mode** - Toggle between themes with persistent storage
- 📱 **Fully Responsive** - Optimized for all screen sizes
- 🎯 **Modern Design** - Clean and professional UI/UX
- 🚀 **Production Ready** - Optimized build for deployment

## 📋 Sections

1. **Hero** - Eye-catching introduction with call-to-action buttons
2. **About** - Personal introduction and quick stats
3. **Skills** - Interactive skill bars showing proficiency levels
4. **Projects** - Showcase of featured projects with filtering
5. **Contact** - Contact form and information

## 🛠️ Technologies Used

- **Frontend Framework:** React 18.2.0
- **Build Tool:** Vite 5.0.8
- **Styling:** Tailwind CSS 3.4.0
- **Animations:** Framer Motion 10.16.4
- **Icons:** React Icons 4.12.0
- **Code Quality:** ESLint

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/ayuuudevani/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   
   The application will automatically open at `http://localhost:3000`

## 🚀 Build for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

## 📁 Project Structure

```
portfolio-website/
├── public/              # Static assets
├── src/
│   ├── components/
│   │   ├── layout/     # Layout components (Header, Footer)
│   │   └── sections/   # Section components (Hero, About, Skills, etc.)
│   ├── data/           # Data files (projects, skills)
│   ├── App.jsx         # Main App component
│   ├── main.jsx        # Application entry point
│   └── index.css       # Global styles with Tailwind directives
├── index.html          # HTML template
├── package.json        # Project dependencies and scripts
├── tailwind.config.js  # Tailwind CSS configuration
├── vite.config.js      # Vite configuration
└── README.md          # Project documentation
```

## ⚙️ Configuration

### Customization

1. **Personal Information**
   - Update your name, role, and description in `src/components/sections/Hero.jsx`
   - Modify the About section in `src/components/sections/About.jsx`

2. **Skills**
   - Edit your skills in `src/data/skills.js`
   - Add or remove skill categories as needed

3. **Projects**
   - Update your projects in `src/data/projects.js`
   - Replace project images with your own

4. **Contact Information**
   - Update contact details in `src/components/sections/Contact.jsx`
   - Update social media links in `src/components/layout/Header.jsx` and `Footer.jsx`

5. **Theme Colors**
   - Customize colors in `tailwind.config.js`
   - Primary and secondary color schemes can be modified

### Environment Variables

Create a `.env` file in the root directory for any environment-specific configurations:

```env
VITE_APP_TITLE=Ayu Devani Portfolio
VITE_API_URL=https://your-api-url.com
```

## 🎨 Styling

This project uses Tailwind CSS with custom configurations:

- **Dark Mode:** Class-based dark mode switching
- **Custom Colors:** Primary and secondary color palettes
- **Custom Utilities:** Gradient text, cards, buttons, and more
- **Responsive Design:** Mobile-first approach with breakpoints

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Ayu Devani**

- GitHub: [@ayuuudevani](https://github.com/ayuuudevani)
- LinkedIn: [Ayu Devani](https://linkedin.com/in/ayudevani)
- Email: ayudevani@example.com

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Unsplash](https://unsplash.com/) for placeholder images

## 📸 Screenshots

### Desktop View
![Desktop Light Mode](https://via.placeholder.com/1200x600?text=Desktop+Light+Mode)
![Desktop Dark Mode](https://via.placeholder.com/1200x600?text=Desktop+Dark+Mode)

### Mobile View
![Mobile View](https://via.placeholder.com/400x800?text=Mobile+View)

---

⭐️ If you like this project, please give it a star on GitHub! ⭐️
