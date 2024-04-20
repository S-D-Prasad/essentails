import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import New from './pages/New';
import Sale from './pages/Sale';
import Shop from './pages/Shop';
import Navbar from './components/Navbar';
import Home from './Home';

function App() {
    return (
        <div style={{margin:'10px',padding:'5px'}}>
        <Router>
            <Routes>
                {/* Routes with Navbar */}
                <Route
                    path="/about/*"
                    element={
                        <>
                            <Navbar />
                            <About />
                        </>
                    }
                />
                <Route
                    path="/contact/*"
                    element={
                        <>
                            <Navbar />
                            <Contact />
                        </>
                    }
                />
                <Route
                    path="/new/*"
                    element={
                        <>
                            <Navbar />
                            <New />
                        </>
                    }
                />
                <Route
                    path="/sale/*"
                    element={
                        <>
                            <Navbar />
                            <Sale />
                        </>
                    }
                />
                <Route
                    path="/shop/*"
                    element={
                        <>
                            <Navbar />
                            <Shop />
                        </>
                    }
                />

                {/* Route without Navbar (Home) */}
                <Route path="/" element={<Home />} />

                {/* Redirect any other undefined routes to /new */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
        </div>
    );
}

export default App;
