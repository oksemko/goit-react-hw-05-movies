import { Link } from 'react-router-dom';
import defaultImage from './nothing-to-see-here.png';

import { Container, Image, Span } from './NotFound.styled';


export default function NotFound() {
  const image = defaultImage;

  return (
    <Container>
      <Span>Sorry, there is nothing to see ... 👀</Span>
      <Image img src={image} alt=""></Image>
      <p>
        <Link to="/">Please go back to the home page</Link>
      </p>
    </Container>
  );
}
