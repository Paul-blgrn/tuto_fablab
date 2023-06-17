import { Navigate, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Aide from './pages/Aide';
import Tutorial from './pages/Tuto';

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