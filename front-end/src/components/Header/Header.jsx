import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
        <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
        </header>
    );
    };

 export default Header;

