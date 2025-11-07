import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './GridMotionMobile.css';

const GridMotionMobile = ({ items = [], gradientColor = 'black' }) => {
    const gridRef = useRef(null);
    const rowRefs = useRef([]);
    const mouseXRef = useRef(window.innerWidth / 2);

    const rows = 12; // Increased rows for better coverage
    const itemsPerRow = 6; // Keep 6 items per row for mobile
    const totalItems = rows * itemsPerRow;

    // Repeat items to fill all slots
    const repeatedItems = [];
    if (items.length > 0) {
        for (let i = 0; i < totalItems; i++) {
            repeatedItems.push(items[i % items.length]);
        }
    }
    const combinedItems = repeatedItems.length > 0 ? repeatedItems : Array.from({ length: totalItems }, (_, index) => `Item ${index + 1}`);

    useEffect(() => {
        gsap.ticker.lagSmoothing(0);

        const handleMouseMove = e => {
            mouseXRef.current = e.clientX;
        };

        const updateMotion = () => {
            const maxMoveAmount = 150; // Reduced movement for mobile
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
        window.addEventListener('touchmove', (e) => {
            if (e.touches.length > 0) {
                mouseXRef.current = e.touches[0].clientX;
            }
        });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            removeAnimationLoop();
        };
    }, []);

    return (
        <div className="noscroll-mobile loading" ref={gridRef}>
            <section
                className="intro-mobile"
                style={{
                    background: `radial-gradient(circle, ${gradientColor} 0%, transparent 100%)`
                }}
            >
                <div className="gridMotion-container-mobile">
                    {[...Array(rows)].map((_, rowIndex) => (
                        <div key={rowIndex} className="row-mobile" ref={el => (rowRefs.current[rowIndex] = el)}>
                            {[...Array(itemsPerRow)].map((_, itemIndex) => {
                                const content = combinedItems[rowIndex * itemsPerRow + itemIndex];
                                return (
                                    <div key={itemIndex} className="row__item-mobile">
                                        <div className="row__item-inner-mobile" style={{ backgroundColor: '#111' }}>
                                            {typeof content === 'string' && content.startsWith('http') ? (
                                                <div
                                                    className="row__item-img-mobile"
                                                    style={{
                                                        backgroundImage: `url(${content})`
                                                    }}
                                                ></div>
                                            ) : (
                                                <div className="row__item-content-mobile">{content}</div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
                <div className="fullview-mobile"></div>
            </section>
        </div>
    );
};

export default GridMotionMobile;
