import React from 'react';
import Counter from './counter';

var mountNode = document.getElementById('react-app');

React.render(<Counter initialCount={7} />, mountNode);
