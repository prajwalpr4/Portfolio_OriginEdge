# Personal Portfolio Website

A modern, responsive personal portfolio website built with HTML5, CSS3, and vanilla JavaScript. Features a clean design with dark/light mode toggle, smooth animations, and a fully functional contact form using local storage.

## 🎨 Features
- **Responsive Design**: Mobile-first approach that looks great on all devices
- **Dark/Light Mode**: Toggle between themes with persistent preference
- **Smooth Animations**: Scroll-triggered fade-in effects and hover animations
- **Modern UI**: Clean, minimalist design with professional aesthetics
- **Contact Form**: Client-side validation with local storage support
- **Fast Loading**: Optimized code for quick page loads
- **Accessible**: Semantic HTML and keyboard navigation support

## 📁 Project Structure
```text
portfolio-website/
│
├── index.html              # Main HTML file
├── css/
│   ├── style.css           # Main stylesheet
│   └── animations.css      # Animation definitions
├── js/
│   ├── main.js             # Main JavaScript logic
│   └── theme.js            # Theme toggle functionality
├── assets/
│   └── images/
│       └── profile-placeholder.jpg  # Profile image (to be replaced)
└── README.md               # This file
```

## 🚀 Getting Started

### 1. Download the Files
Download all files and maintain the folder structure shown above.

### 2. Replace Placeholder Content
Open `index.html` and replace all placeholders with your actual information:
- `[Your Full Name]` - Your name
- `[Your Title/Tagline]` - Your professional title
- `[Your Bio]` - About you paragraph
- **Skills Lists** - Your actual skills
- **Project Information** - Your three projects
- **Social Media Links** - Your GitHub, LinkedIn, Twitter, Email

### 3. Add Your Profile Image
- Prepare a square profile photo (recommended: 300x300px to 500x500px)
- Optimize it for web (use `.jpg` or `.webp` format)
- Name it appropriately (e.g., `profile.jpg`)
- Place it in `assets/images/` folder
- Update the image path in `index.html`:
```html
<img src="assets/images/profile.jpg" alt="Your Name">
```

### 4. Customize Colors (Optional)
To change the color scheme, edit the CSS variables in `css/style.css`:
```css
:root {
    --accent-color: #3b82f6;  /* Change to your preferred color */
    --accent-hover: #2563eb;  /* Hover state of accent color */
}
```

### 5. Deploy Your Website
This project is a static site that uses Local Storage to save contact form messages. You can host it on any static hosting provider like GitHub Pages, Vercel, Netlify, or standard shared hosting.

**Deployment Steps:**
1. Upload all files to your hosting server or connect your GitHub repository to Netlify/Vercel.
2. Test the contact form to ensure it works properly.

## 🎯 Customization Guide

### Adding More Projects
Copy the project card structure in `index.html`:
```html
<div class="project-card fade-in-section">
    <div class="project-header">
        <h3 class="project-title">[Project Name]</h3>
        <p class="project-subtitle">[Short description]</p>
    </div>
    <!-- ... rest of the card -->
</div>
```

### Changing Fonts
Current font: **Inter** (from Google Fonts). To change:
1. Go to Google Fonts
2. Select your preferred font
3. Replace the font link in `index.html`
4. Update the CSS variable in `style.css`:
```css
--font-main: 'YourFont', sans-serif;
```

### Modifying Sections
You can add, remove, or rearrange sections. Just ensure:
- Each section has a unique `id` for navigation
- Update navigation links in the navbar
- Maintain consistent padding and styling

## 🛠️ Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript (ES6+)**: Vanilla JS for interactivity and form storage
- **Font Awesome**: Icon library
- **Google Fonts**: Typography (Inter)

## 📱 Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## ⚡ Performance Tips
- **Optimize Images**: Use tools like TinyPNG or Squoosh
- **Lazy Loading**: Already implemented for images
- **Minify Code**: Use online tools for production
- **Enable Compression**: Configure on your hosting platform

## 🐛 Troubleshooting

### Profile image not showing?
- Check the file path is correct
- Ensure the image file exists in `assets/images/`
- Check browser console for errors

### Animations not working?
- Ensure `animations.css` is properly linked
- Check if JavaScript is enabled
- Clear browser cache

### Contact form not submitting?
- Check browser console for errors
- Ensure JavaScript is enabled

## 📄 License
This project is open source and available for personal use. Feel free to modify and customize it for your own portfolio!

## 🤝 Contributing
This is a personal portfolio template. Feel free to fork and customize for your own use!

## 💡 Tips for Success
- **Keep it Updated**: Regularly update your projects and skills
- **Quality Over Quantity**: Showcase your best 3-5 projects
- **Tell a Story**: Make your bio engaging and personal
- **Test Everywhere**: Check on different devices and browsers
- **SEO Optimize**: Add proper meta tags and descriptions
- **Fast Loading**: Optimize all assets for quick load times
- **Professional Email**: Use a professional email address

Developed by Prajwal P Raikar
