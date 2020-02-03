import React from 'react';

const Suggestions = props => {
  console.tron.log(props.data);
  const options = props.data.data.map(r => <li key={r.id}>{r.description}</li>);
  return <ul>{options}</ul>;
};

export default Suggestions;
