import { Link } from 'react-router-dom';


export default function NotFound() {
  return (
    <div>
      <h2>Sorry, there is nothing to see ... 👀</h2>
      <p>
        <Link to="/">Please go back to the home page</Link>
      </p>
    </div>
  );
}
