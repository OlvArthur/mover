import React, { Component } from 'react';
import axios from 'axios';
import { MdSearch } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Suggestion from '../../components/Suggestions';

// import { Container } from './styles';

export default class SearchResults extends Component {
  state = {
    query: '',
    data: [],
  };

  handleInputChange = () => {
    this.setState({
      query: this.search.value,
    });

    this.getInfo();
  };

  getInfo = async () => {
    const response = await axios.get('http://api.intregra.com/products');

    this.setState({
      data: response.data,
    });

    console.tron.log(response);
  };

  render() {
    const { data } = this.state;
    return (
      <form>
        <input
          placeholder="Search for..."
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
        />
        <Link to="search">
          <MdSearch />
        </Link>

        <Suggestion data={data} />
      </form>
    );
  }
}
