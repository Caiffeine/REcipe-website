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
    'An AI-powered food management system designed to help Filipino households reduce food waste through smart inventory tracking, expiry monitoring, and intelligent recipe generation.';

export const FEATURES = [
    {
        id: 1,
        title: 'Food Recognition',
        description: 'Automatically identify and categorize food items using advanced AI technology.',
        icon: 'Camera'
    },
    {
        id: 2,
        title: 'Expiry Tracking',
        description: 'Monitor expiration dates and receive timely alerts to prevent food waste.',
        icon: 'Calendar'
    },
    {
        id: 3,
        title: 'Recipe Suggestions',
        description: 'Get personalized recipe recommendations based on available ingredients.',
        icon: 'ChefHat'
    },
    {
        id: 4,
        title: 'Nutrition Insights',
        description: 'Access detailed nutritional information for informed dietary choices.',
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
