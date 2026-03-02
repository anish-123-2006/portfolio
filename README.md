# Video Editing Portfolio

A modern, professional video editing portfolio website built with React and TypeScript. Featuring a sleek black background design with dynamic animations and interactive elements.

## Features

- **Modern Design**: Minimalist black background with red accent colors
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Interactive animations and transitions
- **Portfolio Showcase**: Display your video editing projects with hover effects
- **Services Section**: Highlight your key services
- **About Section**: Tell your story with stats and skills
- **Contact Form**: Functional contact form for client inquiries
- **Fast Performance**: Built with Vite for optimal performance

## Tech Stack

- **React 18.2** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **React Icons** - Icon library
- **CSS Module Styling** - Component scoped styles

## Project Structure

```
src/
├── components/
│   ├── Header.tsx & Header.css
│   ├── Hero.tsx & Hero.css
│   ├── Portfolio.tsx & Portfolio.css
│   ├── Services.tsx & Services.css
│   ├── About.tsx & About.css
│   ├── Contact.tsx & Contact.css
│   └── Footer.tsx & Footer.css
├── App.tsx & App.css
├── index.css
└── main.tsx
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Customization

### Change Colors

Edit `src/index.css` and component CSS files to customize the color scheme. The primary color is currently `#ff0000` (red).

### Update Content

- **Logo**: Update "ANISH AGRAWAL" text in [Header.tsx](src/components/Header.tsx)
- **Projects**: Modify the `projects` array in [Portfolio.tsx](src/components/Portfolio.tsx)
- **Services**: Update the `services` array in [Services.tsx](src/components/Services.tsx)
- **Skills**: Modify the `skills` array in [About.tsx](src/components/About.tsx)
- **Contact Info**: Update contact details in [Contact.tsx](src/components/Contact.tsx)

### Add Your Projects

Replace placeholder project data in Portfolio component with your actual projects and video links.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

Built with Vite for lightning-fast development and production builds. The portfolio includes:

- Code splitting for optimal loading
- Lazy loading capabilities
- CSS optimization
- Tree shaking for unused code

## License

This project is open source and available under the MIT License.

## Author

Created as a professional video editing portfolio template.

---

**Note**: Remember to replace placeholder content (project descriptions, contact information, social links, etc.) with your actual information before deploying.
