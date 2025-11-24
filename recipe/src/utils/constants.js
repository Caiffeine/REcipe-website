// REcipe Web - Constants

export const SITE_NAME = 'REcipe';

export const NAVIGATION_LINKS = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/download', label: 'Download' },
    { path: '/contact', label: 'Contact' }
];

export const SOCIAL_LINKS = {
    facebook: '#',
    twitter: '#',
    instagram: '#',
    github: '#'
};

export const CONTACT_INFO = {
    email: 'contact@recipe.ph',
    phone: '+63 123 456 7890',
    address: 'Manila, Philippines'
};

export const APP_DESCRIPTION =
    'AI-powered inventory tracking and recipe discovery.';

export const FEATURES = [
    {
        id: 1,
        title: 'Universal Smart Scanner',
        description: 'Instantly log food using our 4-way scanner: AI Food Recognition, Barcode Scanning, QR Code Reader, and OCR Text Scanning for receipts.',
        icon: 'Camera'
    },
    {
        id: 2,
        title: 'SousChef AI',
        description: 'Meet your new cooking assistant. SousChef AI generates unique, step-by-step recipes based strictly on the ingredients you have at home.',
        icon: 'ChefHat'
    },
    {
        id: 3,
        title: 'Smart Expiry Tracker',
        description: 'Stop guessing. We automatically track shelf life and send alerts 7 days, 3 days, and 1 day before your food spoils.',
        icon: 'Calendar'
    },
    {
        id: 4,
        title: 'Pantry-First Cooking',
        description: 'Save money by prioritizing recipes that use what you already own. Matches your inventory to over 2 million Edamam recipes.',
        icon: 'Heart'
    }
];

export const ANIMATION_DURATION = {
    fast: 300,
    normal: 600,
    slow: 1000
};

export const BREAKPOINTS = {
    mobile: 480,
    tablet: 768,
    desktop: 1024,
    wide: 1280
};
