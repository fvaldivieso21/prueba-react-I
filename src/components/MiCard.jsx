import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "../assets/css/MiCard.css"


function MiCard({name,img,level}) {

  return(
  <>
    <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className={level=="Rookie" ? "rookie" : "default"}
        >Nivel: {level}</ListGroup.Item>
      </ListGroup>
    </Card>
   </>
    )
}

export default MiCard;