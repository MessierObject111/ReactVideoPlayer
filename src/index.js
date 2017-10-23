import React from 'react';
import ReactDOM from 'react-dom';
import SearchBox from './components/search_box';
import VideoList from './components/video_list';
import VideoListItem from './components/video_list_item';
import VideoDetail from './components/video_detail';

import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyCEZvUiWL3_AKX7hZuhyBejWNGZQgwI884';
let searchWord = 'cats';

// Create a new component which should produce some HTML
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch(searchWord);
  };
  videoSearch (term) {
    YTSearch({key: API_KEY, term: searchWord}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  };


  render() {
    return (
      <div>
        <SearchBox onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail
          video={this.state.selectedVideo}/>
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
      </div>
    );
  }
}
// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
