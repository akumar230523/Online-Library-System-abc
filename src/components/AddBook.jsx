import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../utils/booksSlice';
import '../style/AddBook.css';

function AddBook() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [book, setBook] = useState({
        title: '',
        author: '',
        genre: '',
        publishedYear: '',
        cover_image: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook({ ...book, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        for (const key in book) {
            if (book[key] === '') {
                alert(`Please fill out the ${key} field.`);
                return;
            }
        }
        dispatch(addBook(book));
        navigate('/browse-books');
    };

    return (
        <div className="add-book">
            <h3> Add Book </h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title" onChange={handleChange} value={book.title} />
                <input type="text" name="author" placeholder="Author" onChange={handleChange} value={book.author} />
                <input type="text" name="genre" placeholder="Genre" onChange={handleChange} value={book.genre} />
                <input type="number" name="rating" placeholder="Rating" onChange={handleChange} value={book.rating} />
                <input type="number" name="publishedYear" placeholder="Published Year" onChange={handleChange} value={book.publishedYear} />
                <input type="url" name="cover_image" placeholder="Cover Image URL" onChange={handleChange} value={book.cover_image} />
                <textarea name="description" placeholder="Description" onChange={handleChange} value={book.description} />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddBook;
