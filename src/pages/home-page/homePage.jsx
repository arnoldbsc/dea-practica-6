import './homePage.css'
import logo from '../../logo.svg';
import { Outlet, Link } from "react-router-dom";
const HomePage = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Link to='/listLinks'>List</Link>
            </header>
        </div>
    )
}

export default HomePage