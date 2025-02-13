import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({ topics, onTopicSelect }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem
          key={topic.id}
          id={topic.id}
          title={topic.title}
          onTopicSelect={onTopicSelect}
        />
      ))}
    </div>
  );
};

export default TopicList;
