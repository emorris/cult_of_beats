import PropTypes from 'prop-types';
import React from 'react';
import style from './HelloWorld.module.css';
const HelloWorld = ({ name, updateName }) => (
  <div>
    <a class="btn btn-primary">Button</a>
    <h1 className="text-3xl font-bold underline">
        Hello world!
    </h1>
    <h3>
      Hello,
      {name}!
    </h3>
  </div>
);

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired,
  updateName: PropTypes.func.isRequired,
};

export default HelloWorld;
