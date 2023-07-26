import { Navigate, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Aide from './pages/Aide';
import Tutorial from './pages/Tuto';

import { library, config } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

// Library Creation
library.add(fab, fas, far);
config.autoAddCss = true;

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aide/:id" element={<Aide />} />
            <Route path="/tuto/:id1/:id2" element={<Tutorial />} />
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    );
}

export default MainRoutes;