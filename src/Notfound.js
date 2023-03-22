import {Link} from 'react-router-dom';


const Notfound = () => {
    return ( 
        <div className="not-found">
            <h2> Oops,Sorry no pages found.</h2>
            <Link to='/'>Go Back to Home Page</Link>
        </div>
     );
}
 
export default Notfound;