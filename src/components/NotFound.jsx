import { Link } from "react-router-dom";
import '../style/NotFound.css'

function NotFound() {
    return (
        <div className='not-found'>
            <p> 404 - Page Not Found </p>
            <Link to='/' className='back-button'> ← Back to Home </Link>
        </div>
    );
}

export default NotFound;
