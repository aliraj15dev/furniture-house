import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <>
            <Navbar/>
            <Outlet></Outlet>
            <Footer/>
        </>
    );
};

export default MainLayout;