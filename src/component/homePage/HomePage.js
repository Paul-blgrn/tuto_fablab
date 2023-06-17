import { Link  } from "react-router-dom";
import parse from 'html-react-parser';

import './HomePage.css';

const HomePage = (props) => {
    const { info } = props
    return(
        <Link 
            to={info.route + info.id} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="Home-button"
        >
            {parse(info.name)}
        </Link>
    );
};

export default HomePage;