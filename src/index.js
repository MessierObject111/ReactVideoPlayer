import React from 'react';
import ReactDOM from 'react-dom';
import SearchBox from './components/search_box';
import VideoList from './components/video_list';
import VideoListItem from './components/video_list_item';

import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyCEZvUiWL3_AKX7hZuhyBejWNGZQgwI884';

// Create a new component which should produce some HTML
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {videos: []};

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({videos});
    });
  }


  render() {
    return (
      <div>
        <SearchBox />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}
// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
