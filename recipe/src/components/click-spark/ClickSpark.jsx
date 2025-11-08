import { useEffect, useRef } from 'react';
import './ClickSpark.css';

const ClickSpark = ({
    sparkColor = '#ff9900ff',
    sparkSize = 12,
    sparkRadius = 20,
    sparkCount = 8,
    duration = 500,
    easing = 'ease-out',
    children
}) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const createSpark = (x, y) => {
            const sparksContainer = document.createElement('div');
            sparksContainer.className = 'sparks-container';
            sparksContainer.style.left = `${x}px`;
            sparksContainer.style.top = `${y}px`;

            for (let i = 0; i < sparkCount; i++) {
                const spark = document.createElement('div');
                spark.className = 'spark';

                const angle = (Math.PI * 2 * i) / sparkCount;
                const velocity = sparkRadius;
                const tx = Math.cos(angle) * velocity;
                const ty = Math.sin(angle) * velocity;

                spark.style.setProperty('--tx', `${tx}px`);
                spark.style.setProperty('--ty', `${ty}px`);
                spark.style.width = `${sparkSize}px`;
                spark.style.height = `${sparkSize}px`;
                spark.style.backgroundColor = sparkColor;
                spark.style.animation = `spark-animation ${duration}ms ${easing} forwards`;

                sparksContainer.appendChild(spark);
            }

            container.appendChild(sparksContainer);

            setTimeout(() => {
                sparksContainer.remove();
            }, duration);
        };

        const handleClick = (e) => {
            createSpark(e.clientX, e.clientY);
        };

        container.addEventListener('click', handleClick);

        return () => {
            container.removeEventListener('click', handleClick);
        };
    }, [sparkColor, sparkSize, sparkRadius, sparkCount, duration, easing]);

    return (
        <div ref={containerRef} style={{ width: '100%', height: '100%', position: 'relative' }}>
            {children}
        </div>
    );
};

export default ClickSpark;
