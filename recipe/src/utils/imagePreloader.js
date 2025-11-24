/**
 * Image Preloader Utility
 * Preloads images and filters out failed loads
 */

/**
 * Preload a single image
 * @param {string} url - Image URL to preload
 * @returns {Promise<string>} - Resolves with URL if successful, rejects if failed
 */
const preloadImage = (url) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        
        img.onload = () => {
            resolve(url);
        };
        
        img.onerror = () => {
            console.warn(`Failed to load image: ${url}`);
            reject(url);
        };
        
        // Set a timeout to prevent hanging
        const timeout = setTimeout(() => {
            reject(url);
        }, 5000); // 5 second timeout
        
        img.onload = () => {
            clearTimeout(timeout);
            resolve(url);
        };
        
        img.src = url;
    });
};

/**
 * Preload multiple images
 * @param {string[]} urls - Array of image URLs to preload
 * @returns {Promise<string[]>} - Resolves with array of successfully loaded URLs
 */
export const preloadImages = async (urls) => {
    const results = await Promise.allSettled(
        urls.map(url => preloadImage(url))
    );
    
    // Filter to only successfully loaded images
    const loadedImages = results
        .filter(result => result.status === 'fulfilled')
        .map(result => result.value);
    
    const failedCount = urls.length - loadedImages.length;
    
    if (failedCount > 0) {
        console.info(`Image preloader: ${loadedImages.length}/${urls.length} images loaded successfully. ${failedCount} failed.`);
    }
    
    return loadedImages;
};

export default preloadImages;
