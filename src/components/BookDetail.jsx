import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import '../style/BookDetail.css';

function BookDetail() {
    const params = useParams();
    const books = useSelector((state) => state.books);
    const book = books.filter(book => book.id == params.id);

    return (
        <div className='book-detail'>
            <div className='book-img-info'>
                <div className='book-img'>
                    <img src={book[0].cover_image} alt={book[0].title} />
                </div>
                <div className='book-info'>
                    <h4>{book[0].title}</h4>
                    <p> Author: {book[0].author} </p>
                    <p> Genre: {book[0].genre} </p>
                    <p> Published: {book[0].publishedYear} </p>
                    <p> Rating: {book[0].rating} </p>
                    <br />
                    <p> <i> {book[0].description} </i> </p>
                </div> 
            </div>
            <div className="back-button">
                <Link to='/' className='button'> ← Back to Home </Link>
                <Link to='/browse-books' className='button'> ← Back to Browse Books </Link>
            </div>
        </div>
    );
}

export default BookDetail;
