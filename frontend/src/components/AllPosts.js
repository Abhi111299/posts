import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup"; 

const Posts = ({postData}) => {
	console.log("inside the posts component", postData);
	return (
		<Card>
			<Card.Body>
				<Card.Title>JAVASCRIPT</Card.Title>
				<Card.Text>
					d most popular
					lightweight, interpreted compiled programming
					language. It is also known as scripting
					language for web pages. It is well-known for
					the development of web pages, many non-browser
					environments also use it. JavaScript can be
					used for Client-side developments as well as
					Server-side developments
				</Card.Text>
				<ButtonGroup aria-label="Basic example"> 
                    <Button variant="primary" btn-toolbar> 
                        EDIT 
                    </Button>
                    <Button variant="danger" btn-toolbar> 
                        DELETE 
                    </Button> 
                </ButtonGroup> 
			</Card.Body>
		</Card>
	);
};

export default Posts;
