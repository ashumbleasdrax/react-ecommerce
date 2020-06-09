import React from 'react';
import BookCard from './BookCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const BooksDisplay = () => {
    // const books = require('./../services/books.js');
    return (
        <Container fluid="md" expand="md" style={{ overflow: 'hidden'}}>
            <Row>
                {books.map(({ bookImgLink, bookTitle, bookDescription }, i) =>
                    <BookCard key={i} imgLink={bookImgLink} bookTitle={bookTitle} bookDescription={bookDescription} ></BookCard>
                )}
            </Row>
        </Container>
    )
};
const books = [
    {
        imageLink: './../Assets/Images/Prelude_to_Foundation_cover.jpg',
        bookDescription: 'abc',
        bookTitle:'Foundation.'
    },
    {
        imageLink: './../Assets/Images/Prelude_to_Foundation_cover.jpg',
        bookDescription: 'abc',
        bookTitle:'Foundation.'
    },
    {
        imageLink: './../Assets/Images/Prelude_to_Foundation_cover.jpg',
        bookDescription: 'abc',
        bookTitle:'Foundation.'
    },
    {
        imageLink: './../Assets/Images/Prelude_to_Foundation_cover.jpg',
        bookDescription: 'abc',
        bookTitle:'Foundation.'
    },
    {
        imageLink: './../Assets/Images/Prelude_to_Foundation_cover.jpg',
        bookDescription: 'abc',
        bookTitle:'Foundation.'
    },
    {
        imageLink: './../Assets/Images/Prelude_to_Foundation_cover.jpg',
        bookDescription: 'abc',
        bookTitle:'Foundation.'
    },
    {
        imageLink: './../Assets/Images/Prelude_to_Foundation_cover.jpg',
        bookDescription: 'abc',
        bookTitle:'Foundation.'
    },
    {
        imageLink: './../Assets/Images/Prelude_to_Foundation_cover.jpg',
        bookDescription: 'abc',
        bookTitle:'Foundation.'
    },
    {
        imageLink: './../Assets/Images/Prelude_to_Foundation_cover.jpg',
        bookDescription: 'abc',
        bookTitle:'Xyz.'
    },
    {
        imageLink: './../Assets/Images/Prelude_to_Foundation_cover.jpg',
        bookDescription: 'abc',
        bookTitle:'Foundation.'
    },
    {
        imageLink: './../Assets/Images/Prelude_to_Foundation_cover.jpg',
        bookDescription: 'abc',
        bookTitle:'Foundation.'
    },
    {
        imageLink: './../Assets/Images/Prelude_to_Foundation_cover.jpg',
        bookDescription: 'abc',
        bookTitle:'Foundation.'
    },
    {
        imageLink: './../Assets/Images/Prelude_to_Foundation_cover.jpg',
        bookDescription: 'abc',
        bookTitle:'Foundation.'
    }
];
export default BooksDisplay;