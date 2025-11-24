// REcipe Web - 404 Not Found Page
import { Home, ArrowLeft } from 'lucide-react';
import Button from '../../components/button/button';
import Card from '../../components/card/Card';
import './not-found.css';

const NotFound = () => {
    return (
        <div className="not-found">
            <div className="not-found__background"></div>
            <div className="container">
                <Card className="not-found__content" hover={true} data-aos="zoom-in">
                    <div className="not-found__404">404</div>
                    <h1 className="not-found__title">
                        Page Not Found
                    </h1>
                    <p className="not-found__description">
                        Sorry, the page you're looking for doesn't exist or has been moved.
                    </p>
                    <div className="not-found__actions">
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
                </Card>
            </div>
        </div>
    );
};

export default NotFound;
