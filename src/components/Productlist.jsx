import React, { useState , useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Productlist() {
const [products, setProducts] = useState([])
console.log(products);

useEffect(()=>{
fetch("http://localhost:3030/products")
.then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
},[])
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
    {
    products.map((products)=>(
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={products.productimage} />
      <Card.Body>
        <Card.Title>{products.title}</Card.Title>
        <Card.Text>
          {products.decsription}
        </Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
    ))
}
</div>
  )
}

export default Productlist