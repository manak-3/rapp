import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import './TweetListItem.css';

function TweetListItem({ todo, onRemovePressed }) {
  const [tweetDate, setTweetDate] = useState(0);
  useInterval(() => {
    setTweetDate(new Date());
  }, 1000);
  console.log(moment(todo.endDate).isBefore(tweetDate));
  if (moment(todo.endDate).isAfter(tweetDate)) {
    return (
      <div className='todo-item-container'>
        <h3>{todo.text}</h3>
        <div className='buttons-container'>
          
        </div>
      </div>
    );
  } else {
    onRemovePressed(todo.text);
    return null;
  }
}
function useInterval(callback) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
}
export default TweetListItem;
