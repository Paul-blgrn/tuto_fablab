import { Navigate, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Tutorial from './pages/Tuto';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tuto/:id" element={<Tutorial />} />
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    );
}

export default MainRoutes;