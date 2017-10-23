import React from 'react';

/*
const SearchBox = () +> {
  return <input />;
};
*/

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
  }
  render() {
    let dom =
    <div className="search-box">
      <input
        value={this.state.term}
        onChange={event => this.onInputChange(event.target.value)}
      />
    </div>;
    return dom;
  }
  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}
export default SearchBox;
