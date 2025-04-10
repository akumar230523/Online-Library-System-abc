import { useState } from "react";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../style/BrowseBooks.css';
import Book from "./Book";

function BrowseBooks() {
    const books = useSelector((state) => state.books);
    const [searchQuery, setSearchQuery] = useState("");

    const filteredBooks = books.filter( (book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='browse-books'>
            <h3> Browse Books </h3>
            <input type="text" placeholder="Search by title or author" onChange={(e) => setSearchQuery(e.target.value)} />
            <div className='books'>
                { filteredBooks.map( (data) => (
                    <Link to={`/book-details/${data.id}`} key={data.id}>
                        <Book bookData={data} />
                    </Link>
                )) }
            </div>
        </div>
    );
}

export default BrowseBooks;



