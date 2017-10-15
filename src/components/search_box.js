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
    let dom = <div>
    <input onChange={(event) => this.setState({term: event.target.value})}/>
    "Value of the input: " + {this.state.term}
    </div>;
    return dom;
  }
  
}
export default SearchBox;
