import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { preloadImages } from '../../utils/imagePreloader';
import './GridMotion.css';

const GridMotion = ({ items = [], gradientColor = 'black' }) => {
    const gridRef = useRef(null);
    const rowRefs = useRef([]);
    const mouseXRef = useRef(window.innerWidth / 2);
    const [loadedItems, setLoadedItems] = useState([]);

    const rows = 6; // Increased from 4
    const itemsPerRow = 10; // Increased from 7
    const totalItems = rows * itemsPerRow;
    const defaultItems = Array.from({ length: totalItems }, (_, index) => `Item ${index + 1}`);

    // Preload images on mount
    useEffect(() => {
        const loadImages = async () => {
            if (items.length > 0) {
                const imageUrls = items.filter(item => typeof item === 'string' && item.startsWith('http'));
                const loaded = await preloadImages(imageUrls);
                setLoadedItems(loaded);
            }
        };
        
        loadImages();
    }, [items]);

    // Repeat items to fill all slots, using only successfully loaded images
    const repeatedItems = [];
    const itemsToUse = loadedItems.length > 0 ? loadedItems : items;
    
    if (itemsToUse.length > 0) {
        for (let i = 0; i < totalItems; i++) {
            repeatedItems.push(itemsToUse[i % itemsToUse.length]);
        }
    }
    const combinedItems = repeatedItems.length > 0 ? repeatedItems : defaultItems;

    useEffect(() => {
        gsap.ticker.lagSmoothing(0);

        const handleMouseMove = e => {
            mouseXRef.current = e.clientX;
        };

        const updateMotion = () => {
            const maxMoveAmount = 300;
            const baseDuration = 0.8;
            const inertiaFactors = [0.6, 0.4, 0.3, 0.2];

            rowRefs.current.forEach((row, index) => {
                if (row) {
                    const direction = index % 2 === 0 ? 1 : -1;
                    const moveAmount = ((mouseXRef.current / window.innerWidth) * maxMoveAmount - maxMoveAmount / 2) * direction;

                    gsap.to(row, {
                        x: moveAmount,
                        duration: baseDuration + inertiaFactors[index % inertiaFactors.length],
                        ease: 'power3.out',
                        overwrite: 'auto'
                    });
                }
            });
        };

        const removeAnimationLoop = gsap.ticker.add(updateMotion);

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            removeAnimationLoop();
        };
    }, []);

    return (
        <div className="noscroll loading" ref={gridRef}>
            <section
                className="intro"
                style={{
                    background: `radial-gradient(circle, ${gradientColor} 0%, transparent 100%)`
                }}
            >
                <div className="gridMotion-container">
                    {[...Array(rows)].map((_, rowIndex) => (
                        <div key={rowIndex} className="row" ref={el => (rowRefs.current[rowIndex] = el)}>
                            {[...Array(itemsPerRow)].map((_, itemIndex) => {
                                const content = combinedItems[rowIndex * itemsPerRow + itemIndex];
                                return (
                                    <div key={itemIndex} className="row__item">
                                        <div className="row__item-inner">
                                            {typeof content === 'string' && content.startsWith('http') ? (
                                                <div
                                                    className="row__item-img"
                                                    style={{
                                                        backgroundImage: `url(${content})`
                                                    }}
                                                ></div>
                                            ) : (
                                                <div className="row__item-content">{content}</div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
                <div className="fullview"></div>
            </section>
        </div>
    );
};

export default GridMotion;
