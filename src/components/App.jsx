import React from "react";
import Layout from "@containers/Layout";
import GifSlider from "@containers/GifSlider";
import "@styles/global.scss";

const App = () => {
    return (
        <Layout>
            <GifSlider />
        </Layout>
    );
};

export default App;
