// REcipe Web - AOS Initialization Hook
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

/**
 * Custom hook to initialize AOS (Animate On Scroll)
 * @param {Object} options - AOS configuration options
 */
export const useAOSInit = (options = {}) => {
    useEffect(() => {
        const defaultOptions = {
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100,
            delay: 0,
            ...options
        };

        AOS.init(defaultOptions);

        // Refresh AOS on route changes
        const handleRouteChange = () => {
            AOS.refresh();
        };

        window.addEventListener('popstate', handleRouteChange);

        return () => {
            window.removeEventListener('popstate', handleRouteChange);
            AOS.refresh();
        };
    }, []);
};

export default useAOSInit;
