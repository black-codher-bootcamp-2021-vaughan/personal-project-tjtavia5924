import react, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand" >Address Book</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item active">
                                <Link to="/search" className="nav-link" href="#">Find Address</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link to="/edit" className="nav-link" href="#">Change Address</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link to="/add" className="nav-link" href="#">Add Address</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link to="/delete" className="nav-link" href="#">Remove address</Link>
                            </li> */}
                            <li className="nav-item active">
                                <Link to="/contacts" className="nav-link" href="#">Contacts</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
            
        )
    }
};

