import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/home";
import './style.css'
import Header from "./components/header";
import About from "./components/about";
import Skills from "./components/skills";

const Index = () => {
    return (
        <div>
            <Router>
                <Header></Header>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/skills' element={<Skills/>}/>
                </Routes>
            </Router>

        </div>
    )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Index/>);