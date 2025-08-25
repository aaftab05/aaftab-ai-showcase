# Aaftab Zohra - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features multiple color themes, smooth animations, and print-friendly layouts.

## 🎨 Features

- **Multiple Color Palettes**: Main (Deep Indigo & Warm Ochre), Cool (Blue & Cyan), Warm (Burgundy & Coral)
- **Grid Paper Texture Background** with toggle for plain background
- **Smooth Animations** with reduced motion accessibility support
- **Print-Friendly** layout with optimized print styles
- **Contact Form** integration with Web3Forms
- **Responsive Design** optimized for all screen sizes
- **SEO Optimized** with meta tags and JSON-LD schema
- **Accessibility Features** including ARIA labels, keyboard navigation, and focus indicators

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Deployment

The easiest way to deploy is through [Lovable](https://lovable.dev):

1. Click the "Publish" button in the Lovable editor
2. Your portfolio will be live instantly

For custom deployment:

1. Run `npm run build`
2. Deploy the `dist` folder to your hosting provider
3. Ensure your server is configured for single-page applications

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── assets/
│   │   ├── images/           # Profile photos and project images
│   │   └── resume/           # Resume PDF file
│   └── robots.txt
├── src/
│   ├── components/           # React components
│   │   ├── ui/              # Reusable UI components
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── AchievementsSection.tsx
│   │   ├── HighlightsSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Navigation.tsx
│   │   └── ThemeControls.tsx
│   ├── pages/
│   │   └── Index.tsx
│   ├── hooks/
│   ├── lib/
│   ├── index.css             # Design system and global styles
│   └── main.tsx
├── tailwind.config.ts        # Tailwind configuration
└── package.json
```

## 🎨 Customization Guide

### 1. Change Color Palettes

Edit the CSS variables in `src/index.css`:

```css
:root {
  /* Main Palette */
  --background: 38 25% 96%;     /* Background color */
  --foreground: 225 38% 19%;    /* Text color */
  --primary: 225 38% 19%;       /* Primary brand color */
  --secondary: 42 81% 58%;      /* Accent color */
  
  /* Gradients */
  --gradient-primary: linear-gradient(135deg, hsl(225, 38%, 19%), hsl(225, 45%, 25%));
  --gradient-secondary: linear-gradient(135deg, hsl(42, 81%, 58%), hsl(42, 85%, 65%));
}
```

**Note**: All colors must be in HSL format without the `hsl()` wrapper.

### 2. Replace Assets

#### Profile Photo
- Add your photo as `public/assets/images/me.jpg`
- Recommended size: 400x400px minimum
- Format: JPG or WebP for best performance

#### Resume
- Replace `public/assets/resume/AaftabZohra_Resume_2025.pdf` with your resume
- Keep the same filename or update the download link in `HeroSection.tsx`

#### Project Images
- Add project screenshots to `public/assets/images/`
- Update image references in `ProjectsSection.tsx`

### 3. Update Content

All content is located in the respective component files:

- **Personal Info**: `HeroSection.tsx`, `AboutSection.tsx`
- **Skills**: `SkillsSection.tsx`
- **Projects**: `ProjectsSection.tsx`
- **Experience**: `ExperienceSection.tsx`
- **Achievements**: `AchievementsSection.tsx`
- **Contact Info**: `ContactSection.tsx`

### 4. Configure Contact Form

The contact form uses Web3Forms. To use your own form:

1. Sign up at [Web3Forms](https://web3forms.com)
2. Get your access key
3. Replace the access key in `ContactSection.tsx`:

```typescript
formData.append('access_key', 'your-access-key-here');
```

Current access key: `cb15c36b-ad15-4523-a1e0-c2de98f2c81d`

### 5. Customize Fonts

To change fonts, update both the Google Fonts link in `index.html` and the font families in `tailwind.config.ts`:

```typescript
fontFamily: {
  'headline': ['Your Headline Font', 'system-ui', 'sans-serif'],
  'body': ['Your Body Font', 'system-ui', 'sans-serif'],
}
```

### 6. Modify Theme Controls

The theme controls panel can be customized in `ThemeControls.tsx`:

- Add/remove color themes
- Modify control options
- Change button styles

## 🔧 Technical Details

### Built With

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Lucide React** - Icons
- **shadcn/ui** - UI components

### Performance Features

- **Lazy Loading**: Images load as needed
- **Font Optimization**: Preload critical fonts
- **Tree Shaking**: Only used code is included
- **CSS Variables**: Efficient theme switching
- **Responsive Images**: Optimized for all screen sizes

### Accessibility Features

- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Indicators**: Clear focus outlines
- **Reduced Motion**: Respects user preferences
- **High Contrast**: Support for high contrast mode
- **Semantic HTML**: Proper document structure

### SEO Features

- **Meta Tags**: Title, description, keywords
- **Open Graph**: Social media sharing
- **JSON-LD Schema**: Structured data for search engines
- **Semantic HTML**: Proper heading hierarchy
- **Alt Text**: All images have descriptive alt text

## 🖨️ Print Features

The portfolio includes print-optimized styles:

- **Print Button**: In theme controls panel
- **Clean Layout**: Removes background textures and animations
- **Optimized Typography**: Adjusted font sizes for print
- **Page Breaks**: Sections avoid breaking across pages
- **Hidden Elements**: Navigation and interactive elements hidden

## 📱 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Mobile**: iOS Safari, Chrome Mobile
- **Features**: CSS Grid, Custom Properties, ES2018+

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using [Lovable](https://lovable.dev)**

For questions or support, contact: aaftabzohra@gmail.com