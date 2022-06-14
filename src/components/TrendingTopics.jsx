import React, { useEffect, useState } from "react";
import { getTrendingTopics } from "@utils/Giphy";
import "@styles/components/TrendingTopics.scss";

const TrendingTopics = ({ setSearchValue, search }) => {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        getTrendingTopics().then((data) => setTopics(data.data));
    }, []);

    const handleTopicClicked = ({ target }) => {
        setSearchValue(target.innerHTML);
        search(target.innerHTML);
    };

    return (
        <div className="trendingtopics-container">
            <h3>Trending:</h3>
            <p>
                {topics.map((topic, idx) => (
                    <React.Fragment key={idx}>
                        <span className="topic" onClick={handleTopicClicked}>
                            {topic}
                        </span>
                        <span>, </span>
                    </React.Fragment>
                ))}
            </p>
        </div>
    );
};

export default TrendingTopics;
