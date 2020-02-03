import React from 'react';

const Suggestions = ({ data }) => {
  const options = data.map(r => <li key={r.id}>{r.description}</li>);
  return <ul>{options}</ul>;
};

export default Suggestions;
