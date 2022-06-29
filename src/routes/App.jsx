import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@containers/Layout";
import Home from "@pages/Home";
import Favorites from "@pages/Favorites";
import AppContext from "@context/AppContext";
import { useInitialState } from "@hooks/useInitialState";
import "@styles/global.scss";

const App = () => {
    const state = useInitialState();
    return (
        <BrowserRouter>
            <AppContext.Provider value={state}>
                <Layout>
                    <Routes>
                        <Route exact path="/" element={<Home />}/>
                        <Route exact path="/favorites" element={<Favorites />}/>
                    </Routes>
                </Layout>
            </AppContext.Provider>
        </BrowserRouter>
    );
};

export default App;
