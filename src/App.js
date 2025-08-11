import React from 'react';
import HomePage from "./pages/HomePage";
import {Route, Routes, StaticRouter} from "react-router-dom";


function App() {

    return (
        <StaticRouter location={"/"}>
            {/*<nav style={{padding: "1rem", background: "#eee"}}>*/}
            {/*    <Link to="/" style={{marginRight: "1rem"}}>홈</Link>*/}
            {/*    <Link to="/about" style={{marginRight: "1rem"}}>소개</Link>*/}
            {/*    <Link to="/contact">연락처</Link>*/}
            {/*</nav>*/}

            <Routes>
                <Route path="/" element={<HomePage/>}/>
                {/*<Route path="/about" element={<AboutPage/>}/>*/}
                {/*<Route path="/contact" element={<ContactPage/>}/>*/}
            </Routes>
        </StaticRouter>
    );
}

export default App;
