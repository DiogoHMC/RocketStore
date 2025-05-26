# 🚀 RocketStore

A modern e-commerce web application built with React, TypeScript, and Tailwind CSS.

## Features

### 🛍️ Shopping Experience
- Browse through a curated collection of products
- Responsive product grid layout
- Product cards with images, descriptions, and prices
- Dark mode support for comfortable viewing

### 🛒 Cart Management
- Add products to cart with real-time updates
- Adjust product quantities in cart
- Remove items from cart
- Persistent cart state
- Floating cart tab with total amount
- Minimize/maximize cart view

### 💳 Checkout Process
- Clean and intuitive checkout modal
- Order summary with product details
- Total calculation
- Purchase confirmation
- Clear cart functionality

### 🎨 UI/UX Features
- Responsive design for all screen sizes
- Dark/Light mode toggle
- Smooth animations and transitions
- Modern and clean interface
- Consistent color scheme (#6E8890, #B85454)

## Technical Stack

### Frontend
- React
- TypeScript
- Tailwind CSS
- React Router for navigation
- Context API for state management

### Development Tools
- Vite for fast development and building
- ESLint for code quality
- PostCSS for CSS processing

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
1. Clone the repository
```bash
git clone [repository-url]
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

### Building for Production
```bash
npm run build
```

## Project Structure
```
src/
├── assets/         # Images and static assets
├── components/     # React components
│   ├── CartTab.tsx
│   ├── Header.tsx
│   ├── Layout.tsx
│   ├── PurchaseCard.tsx
│   └── ...
├── contexts/      # React contexts
│   └── CartContext.tsx
├── App.tsx        # Main application component
└── main.tsx      # Application entry point
```

## Features in Detail

### Cart System
- Real-time cart updates
- Quantity adjustments
- Total price calculation
- Persistent cart state between sessions

### Product Display
- Grid layout for products
- Product images with hover effects
- Add to cart functionality
- Price display

### Checkout Process
1. Cart review
2. Order summary
3. Purchase confirmation
4. Cart clearing

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimizations
- Adaptive layouts
- Touch-friendly interfaces

## Color Scheme
- Primary: #6E8890 (Blue-gray)
- Secondary: #B85454 (Red)
- Background: White/Gray based on theme
- Text: Contextual based on theme

## Contributing
Feel free to submit issues and enhancement requests.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

