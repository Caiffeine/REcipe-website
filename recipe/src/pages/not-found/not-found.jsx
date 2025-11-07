// REcipe Web - 404 Not Found Page
import { Home, ArrowLeft } from 'lucide-react';
import Button from '../../components/button/button';
import './not-found.css';

const NotFound = () => {
    return (
        <div className="not-found">
            <div className="container">
                <div className="not-found__content">
                    <div className="not-found__404" data-aos="zoom-in">404</div>
                    <h1 className="not-found__title" data-aos="fade-up" data-aos-delay="100">
                        Page Not Found
                    </h1>
                    <p className="not-found__description" data-aos="fade-up" data-aos-delay="200">
                        Sorry, the page you're looking for doesn't exist or has been moved.
                    </p>
                    <div className="not-found__actions" data-aos="fade-up" data-aos-delay="300">
                        <Button
                            to="/"
                            variant="primary"
                            size="large"
                            icon={<Home size={20} />}
                        >
                            Go Home
                        </Button>
                        <Button
                            onClick={() => window.history.back()}
                            variant="outline"
                            size="large"
                            icon={<ArrowLeft size={20} />}
                        >
                            Go Back
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
