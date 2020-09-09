import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { createTodo } from './actions';
import './NewTweet.css';
import DateTimePicker from 'react-datetime-picker';

function NewTweet({ todos, onCreatePressed }) {
  const [inputValue, setInputValue] = useState('');
  const [datePickerValue, setDatePickerValue] = useState(new Date());

  function onChange(date) {
    setDatePickerValue(date);
  }


  return (
    <div className='new-todo-form'>
      <input
        className='new-todo-input'
        type='text'
        placeholder='New Tweet'
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <DateTimePicker
        onChange={onChange}
        value={datePickerValue}
        isClockOpen={false}
        className='twttime'
      />

      <button
        onClick={() => {
          if (inputValue.length > 0) {
            const isDuplicateText = todos.some(
              todo => todo.text === inputValue
            );
            if (!isDuplicateText) {
              onCreatePressed(inputValue, datePickerValue);
              setInputValue('');
              setDatePickerValue(new Date());
            }
          }
        }}
        className='new-todo-button'
      >
        Create tweet
      </button>
    </div>
  );
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  onCreatePressed: (text, endDate) => dispatch(createTodo(text, endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTweet);
