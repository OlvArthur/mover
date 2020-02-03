import React, { Component } from 'react';
import Suggestion from '../../components/Suggestions';

// import { Container } from './styles';

export default class SearchResults extends Component {
  handleInputChange = () => {
    this.setState({
      query: this.search.value,
    });
  };

  render() {
    const { data } = this.props.location;

    return (
      <form>
        <input
          placeholder="Search for..."
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
        />

        <Suggestion data={data} />
      </form>
    );
  }
}
