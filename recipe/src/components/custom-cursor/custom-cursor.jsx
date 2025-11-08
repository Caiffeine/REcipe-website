import { useEffect, useRef } from 'react';
import carrotCursor from './carrot-cursor.svg';
import './custom-cursor.css';

const CustomCursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        const moveCursor = (e) => {
            const x = e.clientX;
            const y = e.clientY;

            cursor.style.left = `${x}px`;
            cursor.style.top = `${y}px`;
        };

        const handleMouseEnter = () => {
            cursor.style.opacity = '1';
        };

        const handleMouseLeave = () => {
            cursor.style.opacity = '0';
        };

        document.addEventListener('mousemove', moveCursor);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            document.removeEventListener('mousemove', moveCursor);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div ref={cursorRef} className="custom-cursor">
            <img src={carrotCursor} alt="cursor" />
        </div>
    );
};

export default CustomCursor;
