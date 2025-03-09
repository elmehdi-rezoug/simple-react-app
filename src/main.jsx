import ReactDOM from 'react-dom/client';
import './main.css';
import books from './books';
import Book from './Book';

const BookList = () => {
  const newBooks = books.map((book, index) => {
    return <Book number={index} key={book.id} {...book}></Book>;
  });

  return (
    <>
      <h1 className='title'>amazon best sellers</h1>
      <section className='booklist'>{newBooks}</section>;
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
