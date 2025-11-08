import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar/>
        <main className='min-h-[calc(100vh-200px)] overflow-hidden'>
            <Outlet/>
        </main>
        <Footer/>
        </div>
    );
};

export default RootLayout;