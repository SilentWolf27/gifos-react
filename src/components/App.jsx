import React from "react";
import Layout from "@containers/Layout";

import "@styles/global.scss";
import GifSearcher from "../containers/GifSearcher";

const App = () => {
    return (
        <Layout>
            <GifSearcher />
        </Layout>
    );
};

export default App;
