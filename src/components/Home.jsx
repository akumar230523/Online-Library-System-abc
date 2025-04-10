import { DummyData } from '../utils/DummyData';
import { Link } from 'react-router-dom';
import '../style/Home.css'
import Book from './Book';
import BrowseBooks from './BrowseBooks';
import AddBook from './AddBook';
import Footer from './Footer';

function Home() {
    return (
        <div className='home'>
            <h2> Hello, Reader! Welcome to <span> LibraryHub </span> <br /> Explore The World of Books </h2>    
            <div className='genre'>
                { [...new Set(DummyData.map((data) => data.genre)) ].map((genre) => (
                    <button key={genre}> {genre} </button>
                )) }
            </div>
            <div className='top-rating'>
                <h4> Top Rating </h4>
                { DummyData.filter((data) => data.rating >= 4.5).map((data) => (
                    <Link to={`/book-details/${data.id}`} key={data.id}>
                        <Book bookData={data} />
                    </Link>
                )) }
            </div>
            <BrowseBooks />
            <AddBook />
            <Footer />
        </div>
    );
}

export default Home;