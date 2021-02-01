import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import 'semantic-ui-css/semantic.min.css';

// Youtube API key AIzaSyAQjaZRcieiCEfqaSlK_CSl71dfugMaKos
class App extends React.Component {
    //if this is not initialize as an array, 
    //we would get an error if we try to get the lenghth of the state
    //exampe: this.state.videos.length -- React needs to know at first that it's an array
    state = {videos: [] };

    //callback function to be passed to the child component
    onTermSubmit = async (term) => {
       const response = await youtube.get('/search', {
                params: {
                    q: term
                }
            });
        
        console.log(response);
        this.setState({ videos: response.data.items });
    };

    

    render () {
        return <div className="ui container" >
            {/* its common practice to call the prop the same 
               as the function being passed down*/}
            <SearchBar onFormSubmit={this.onTermSubmit} />
            I have {this.state.videos.length} videos.

            {/*Pass the list of videos to child component */}
            <VideoList videos={this.state.videos} />
         </div>
    };
}

export default App;