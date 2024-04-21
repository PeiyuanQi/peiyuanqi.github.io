import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

// actually this is a page for the hello message now.

// Validates the first half of an email address.
// const validateText = (text) => {
//   // NOTE: Passes RFC 5322 but not tested on google's standard.
//   // eslint-disable-next-line no-useless-escape
//   const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))$/;
//   return re.test(text) || text.length === 0;
// };

const messages = [
  'hi',
  'hello',
  '你好',
  'Bonjour',
  'unfortunately this is not a llm chat bot',
  'as this is a static page',
  'but glad you want to learn about me',
  'however, I am still writing an about me',
  'ihlu',
  'face just hit the keyboard',
  'maybe not today :(  ',
  'i will try to finish it asap',
  'so long',
];

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay) {
      const id = setInterval(() => {
        savedCallback.current();
      }, delay);
      return () => clearInterval(id);
    }
    return () => {}; // pass linter
  }, [delay]);
};

const EmailLink = ({ loopMessage }) => {
  const hold = 30; // ticks to wait after message is complete before rendering next message
  const delay = 40; // tick length in mS

  const [idx, updateIter] = useState(0); // points to current message
  const [message, updateMessage] = useState(messages[idx]);
  const [char, updateChar] = useState(0); // points to current char
  const [isActive, setIsActive] = useState(true); // disable when all messages are printed

  useInterval(() => {
    let newIdx = idx;
    let newChar = char;
    if (char - hold >= messages[idx].length) {
      newIdx += 1;
      newChar = 0;
    }
    if (newIdx === messages.length) {
      if (loopMessage) {
        updateIter(0);
        updateChar(0);
      } else {
        setIsActive(false);
      }
    } else {
      updateMessage(messages[newIdx].slice(0, newChar));
      updateIter(newIdx);
      updateChar(newChar + 1);
    }
  }, isActive ? delay : null);

  return (
    <div
      className="inline-container"
      // style={validateText(message) ? {} : { color: 'red' }}
      onMouseEnter={() => setIsActive(false)}
      onMouseLeave={() => (idx < messages.length) && setIsActive(true)}
    >
      <span>{message}</span>
      {/* <a href={validateText(message) ? `mailto:${message}@mldangelo.com` : ''}> */}
      {/*    */}
      {/*   <span>@mldangelo.com</span> */}
      {/* </a> */}
    </div>
  );
};

EmailLink.defaultProps = {
  loopMessage: true,
};

EmailLink.propTypes = {
  loopMessage: PropTypes.bool,
};

export default EmailLink;
