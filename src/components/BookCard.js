import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const Header = ({ bookImgLink,bookTitle,bookDescription }) => {  
  return (
    <Card style={{ width: '12rem', margin:'60px'}}>
    <Card.Img fluid src={require('./../Assets/Images/Prelude_to_Foundation_cover.jpg')} thumbnail />
    <Card.Body>
        <Card.Title>{bookTitle}</Card.Title>
    <Card.Text>
      {bookDescription}
    </Card.Text>
    <Button variant="primary">Buy This Book</Button>
  </Card.Body>
</Card>
  )
};
export default Header;
