import { Navigate, Route, Routes } from "react-router-dom";
import Home from './component/homePage/Home';
import Tutos from './component/tutos/Tutos';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tutos" element={<Tutos />} />
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    );
}

export default MainRoutes;