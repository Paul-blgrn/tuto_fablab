import { Navigate, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import InkScape from './component/InkScape/InkScape';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inkscape" element={<InkScape />} />
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    );
}

export default MainRoutes;