import React ,{Component} from 'react';
import { Link } from 'react-router-dom';

// export default class {component name} extends Components
export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand" >
            <Link to="/" className="navbar-brand">Exercise Tracker</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto" >
                <li className="nav-item ">
                    <Link to="/" className="nav-link">Exercise</Link>
                </li>
                <li className="nav-item">
                    <Link to="/create" className="nav-link">Create Exercise Logo</Link>
                </li>
                <li className="nav-item">
                    <Link to="/player" className="nav-link">Create Player</Link>
                </li>
                <li className="nav-item">
                    <Link to="/showplayers" className="nav-link">Show Players</Link>
                </li> 
            </ul>
            </div>
            </nav>
        )
    }   
}