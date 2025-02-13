import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ id, title, onTopicSelect }) => {
  const handleClick = () => {
    if (onTopicSelect) onTopicSelect(id);
  };

  return (
    <div className="topic-list__item" onClick={handleClick}>
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
