import '../style/Book.css';

function Book(props) {
    return (
        <div className='book'>
            <div className='book-1'>
                <img src={props.bookData.cover_image} alt="Image" className='book-cover' />
            </div>
            <div className='book-2'>
                <h6 className='title'> {props.bookData.title} </h6>
                <p className='author'> {props.bookData.author} </p>
                <p className='description'> {props.bookData.description} </p>
            </div>
        </div>
    );
}

export default Book;

