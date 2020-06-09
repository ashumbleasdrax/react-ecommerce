import React from 'react';
import Header from './components/Header';
import BooksDisplay from './components/BooksDisplay';
import Footer from './components/Footer';
const App = () => (
    <div>
      <Header></Header>
      <BooksDisplay></BooksDisplay>
      <Footer text="The Book Store, Best in Books."></Footer>
    </div>
);
export default App;

