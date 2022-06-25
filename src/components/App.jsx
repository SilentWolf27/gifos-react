import React from "react";
import Layout from "@containers/Layout";
import Home from "@pages/Home";
import AppContext from "@context/AppContext";
import { useInitialState } from "@hooks/useInitialState";
import "@styles/global.scss";

const App = () => {
    const state = useInitialState();
    return (
        <AppContext.Provider value={state}>
            <Layout>
                <Home />
            </Layout>
        </AppContext.Provider>
    );
};

export default App;
