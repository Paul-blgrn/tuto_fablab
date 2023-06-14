import { Link  } from "react-router-dom";
import './HomePage.css';

const HomePage = (props) => {
    const { info } = props
    return(
        <div>
            <Link 
                to={info.route} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="Home-button"
            >
                {info.name}
            </Link>
        </div>
    );
};

export default HomePage;