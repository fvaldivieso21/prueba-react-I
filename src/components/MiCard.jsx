import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function MiCard({name,img,level}) {
    
    return(
        <>
       
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Nivel: {level}</ListGroup.Item>
        
      </ListGroup>
      
    </Card>
  

   </>
    )
}

export default MiCard;