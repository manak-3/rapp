import React from 'react';
import { connect } from 'react-redux';
import NewTweet from './NewTweet';
import TweetListItem from './TweetListItem';
import { removeTodo } from './actions';
import './Tweet.css';

const Tweet = ({ todos = [], onRemovePressed }) => (
  <div className='list-wrapper'>
    <NewTweet />
    {todos.length > 0
      ? todos.map(todo => (
          <TweetListItem todo={todo} onRemovePressed={onRemovePressed} />
        ))
      : null}
  </div>
);

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  onRemovePressed: text => dispatch(removeTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(Tweet);
