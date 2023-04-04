import React from 'react';
import { connect } from 'react-redux';
import './App.css';

import { getDogs } from './actions';

const App = props => {
  const fetchDogs = e => {
    e.preventDefault();
    props.getDogs();
  };

  return (
    <div className="App">
      <h2>Let&apos;s Find Some Dogs!</h2>
      <button onClick={fetchDogs}>Fetch Dogs!</button>
      {props.note && <p className="">Current Status: {props.note}</p>}
      
      <div>
        {props.dogs.map((dog, idx) => (
          <div key={idx}>{dog}</div>
        ))}
      </div>
      
    </div>
  );
}

const mapStateToProps = state => ({
  dogs: state.dogs,
  note: state.note,
  isFetching: state.isFetching,
});

export default connect(mapStateToProps, { getDogs })(App);