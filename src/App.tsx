import './App.css';
import { useState } from 'react';
import bookLogo from './assets/book-logo.png';
import { BookList } from './components/BookList';
import { Footer } from './components/Footer';
import { NewBook } from './NewBook/NewBook';
import { Stats } from './Stats/Stats';
import { initialBooks } from './data/book';
import { TasksDemo } from './TasksDemo/Tasks';
import type { Book } from './types/book';
import type { NewBookType } from './types/NewBookType';
import { BookForm } from './BookForm/BookForm';
import { EventFormDemo } from './Form/EventFormDemo';
import { ProfileSettings } from './ProfileSettings/ProfileSettings';

function App() {
  const [books, setBooks] = useState<Book[]>(initialBooks);
  const deleteBook = (id: number) => {
    setBooks((prev) => prev.filter((book) => book.id !== id));
  };

    const addBook = (bookData: Omit<Book, 'id'>) => {
    const newBook: Book = {
      ...bookData,
      id: Date.now(),
    };
    setBooks((prev) => [...prev, newBook]);
  };

  const demoBook: NewBookType = {
    id: 1,
    title: 'Герой Нашего Времени',
    author: '@Лермонтов',
    rating: 4.8,
    oldPrice: 299.99,
    newPrice: 149.99,
    discount: 50,
    cover: '/covers/geroi.jpg',
  };

  return (
    <div className="page">
      <header className="app-header">
        <img className="app-logo" src={bookLogo} alt="BookStore" />
        <h1 className="app-title">Welcome to the BookStore</h1>
        <p className="app-subtitle">Твоя цифровая книжная полка</p>
      </header>
      <main>
        <NewBook book={demoBook} />
      </main>
      <Stats books={books} />
      <main className="app-content">
        <BookList books={books} deleteBook={deleteBook} />
        <BookForm addBook={addBook} />
      </main>
      <TasksDemo />
      <EventFormDemo />
      <ProfileSettings />
      <Footer />
    </div>
  );
}

export default App;
