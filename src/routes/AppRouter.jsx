import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import News from '../pages/News';
import Contact from '../pages/Contact';
import About from '../pages/About';

const NotFound = () => <h1>404: Not Found</h1>;

function AppRouter() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Navigate to="/404" />} />
                <Route path="404" element={<NotFound />} />

                <Route path="home" element={<Home />} />
                <Route path="news" element={<News />} />
                <Route path="contact" element={<Contact />} />
                <Route path="about" element={<About />} />
            </Routes>
        </>
    );
}

export default AppRouter;