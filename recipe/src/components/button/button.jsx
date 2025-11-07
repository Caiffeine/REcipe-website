// REcipe Web - Button Component
import { Link } from 'react-router-dom';
import './button.css';

const Button = ({
    children,
    variant = 'primary',
    size = 'medium',
    to,
    href,
    onClick,
    type = 'button',
    disabled = false,
    icon,
    className = '',
    ...props
}) => {
    const buttonClass = `btn btn-${variant} btn-${size} ${className}`.trim();

    // External link
    if (href) {
        return (
            <a
                href={href}
                className={buttonClass}
                target="_blank"
                rel="noopener noreferrer"
                {...props}
            >
                {icon && <span className="btn__icon">{icon}</span>}
                {children}
            </a>
        );
    }

    // Internal link
    if (to) {
        return (
            <Link to={to} className={buttonClass} {...props}>
                {icon && <span className="btn__icon">{icon}</span>}
                {children}
            </Link>
        );
    }

    // Regular button
    return (
        <button
            type={type}
            className={buttonClass}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {icon && <span className="btn__icon">{icon}</span>}
            {children}
        </button>
    );
};

export default Button;
