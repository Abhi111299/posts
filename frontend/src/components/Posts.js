import React from "react";
import Post1 from "./AllPosts";
import { Container, Row, Col, Card } from 'react-bootstrap';

const Posts = () => {
	return (
		<Container>
			<Row className="justify-content-between">
				<Col md={12} className="mb-4 mt-4">
					<Post1 />
				</Col>
			</Row>
		</Container>
	);
};

export default Posts;
