import { Link } from 'react-router-dom';
import '../style/Header.css';

function Header() {
    return (
        <div className='header'>
            <h1 className='LibraryHub'> <Link to='/'> LibraryHub </Link> </h1>
            <nav>
                <Link to='/' className="nav-link"> Home </Link>
                <Link to='/browse-books' className="nav-link"> Browse Books </Link>
                <Link to='/add-book' className="nav-link"> Add Book </Link>
            </nav>
        </div>
    );
}

export default Header;
