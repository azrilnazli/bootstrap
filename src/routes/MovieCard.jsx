import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



const MovieCard = (props) => {
    
    const navigate = useNavigate();
    
        // var e is event handler
        function handleClick(e) {
            var id = e.target.value;
            navigate('/movie/' + id + '/play');
        
        }

    return ( 
        <Card className="mt-4" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={ props.src } />
        <Card.Body>
          <Card.Title>{ props.title }</Card.Title>
          <Card.Text>
          { props.content }
          </Card.Text>
          <Button 
          variant="primary"
          value={props.id}
          onClick={handleClick} // handleClick executed
          >
              <i class="fa fa-play text-light"></i> Play
          </Button>
        </Card.Body>
      </Card>
      
     );
}
 
export default MovieCard;