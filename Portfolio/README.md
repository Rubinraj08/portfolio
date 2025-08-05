# Rubinraj's Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. This portfolio showcases professional skills, experience, and projects with a beautiful and interactive design.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Hover effects, scroll animations, and smooth transitions
- **Contact Form**: Functional contact form with validation
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Smooth Scrolling**: Seamless navigation between sections
- **Loading Animations**: Engaging animations and transitions

## Sections

1. **Hero Section**: Introduction with call-to-action buttons
2. **About**: Personal information and statistics
3. **Skills**: Technical skills organized by category
4. **Experience**: Work history with timeline layout
5. **Projects**: Featured projects with descriptions
6. **Contact**: Contact information and contact form
7. **Footer**: Social links and additional information

## Customization Guide

### Personal Information
Update the following in `index.html`:

- **Name**: Replace "Rubinraj" with your name throughout the file
- **Title**: Update "Software Developer & Technology Enthusiast"
- **Description**: Modify the hero description
- **Contact Information**: Update email, phone, and location
- **Social Links**: Add your actual social media profiles

### Skills Section
Modify the skills in `index.html`:

```html
<div class="skill-item">
    <i class="fab fa-html5"></i>
    <span>HTML5</span>
</div>
```

Add or remove skills as needed. Available Font Awesome icons can be found at [fontawesome.com](https://fontawesome.com/icons).

### Experience Section
Update the timeline items in `index.html`:

```html
<div class="timeline-item">
    <div class="timeline-content">
        <h3>Your Job Title</h3>
        <h4>Company Name</h4>
        <p class="timeline-date">2022 - Present</p>
        <ul>
            <li>Your responsibility 1</li>
            <li>Your responsibility 2</li>
            <li>Your responsibility 3</li>
        </ul>
    </div>
</div>
```

### Projects Section
Update the project cards with your actual projects:

```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-shopping-cart"></i>
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Project description</p>
        <div class="project-tech">
            <span>Technology 1</span>
            <span>Technology 2</span>
        </div>
        <div class="project-links">
            <a href="your-demo-link" class="btn btn-small">View Demo</a>
            <a href="your-source-link" class="btn btn-small btn-outline">Source Code</a>
        </div>
    </div>
</div>
```

### Colors and Styling
Customize colors in `styles.css`:

- **Primary Color**: `#3498db` (blue)
- **Secondary Color**: `#f39c12` (orange)
- **Gradient**: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- **Background**: `#f8f9fa` (light gray)

### Fonts
The website uses Google Fonts (Poppins). To change fonts:

1. Update the Google Fonts link in `index.html`
2. Change the font-family in `styles.css`

## File Structure

```
Portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── README.md           # This file
└── Rubinraj_resume_word.pdf  # Your resume
```

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Performance Features

- **Optimized Images**: Uses Font Awesome icons instead of images
- **Minimal Dependencies**: Only external dependencies are Google Fonts and Font Awesome
- **Smooth Animations**: Hardware-accelerated CSS transitions
- **Responsive Images**: Scalable vector icons

## Deployment

### GitHub Pages
1. Create a GitHub repository
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select source branch (usually main)
5. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop the folder to [netlify.com](https://netlify.com)
2. Your site will be deployed instantly

### Vercel
1. Connect your GitHub repository to [vercel.com](https://vercel.com)
2. Deploy automatically on every push

## Customization Tips

1. **Add Your Photo**: Replace the Font Awesome user icon with your actual photo
2. **Update Colors**: Match your personal brand colors
3. **Add More Sections**: Include education, certifications, or testimonials
4. **Integrate Analytics**: Add Google Analytics or other tracking
5. **SEO Optimization**: Add meta tags and structured data
6. **Performance**: Optimize images and minify CSS/JS for production

## Contact Form

The contact form is currently set up for demonstration. To make it functional:

1. **EmailJS**: Use EmailJS service
2. **Formspree**: Use Formspree for form handling
3. **Backend**: Create a backend API to handle form submissions

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you need help customizing this portfolio, feel free to:
- Check the code comments for guidance
- Modify the CSS variables for easy color changes
- Add your own sections and features

## Credits

- **Fonts**: Google Fonts (Poppins)
- **Icons**: Font Awesome
- **Design**: Custom design with modern UI principles
- **Animations**: CSS and JavaScript animations

---

**Note**: This portfolio is designed to be professional and modern. Feel free to customize it to match your personal style and brand! 