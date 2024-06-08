
import './App.css';
import Name from './components/Name';
import Price from './components/Price';
import Desc from './components/Desc';
import Product from './Product';


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function App() {
  const firstname = 'Jordan';
  return (
  <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`${firstname ? Product.image : ''}`}/>
      <Card.Body>
        <Card.Title>{<Name/>}</Card.Title>
        <Card.Text>
          {<Desc/>}
        </Card.Text>
        <Button variant="primary">{<Price/>}</Button>
      </Card.Body>
    </Card>
    <section>
      <h1>Hello {firstname}</h1>
    </section>
    </div>
  );
}



export default App;