import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

//functional component
class App extends React.Component {
    //initialize state
    state = { images: [] };

    onSearchSubmit = async (term) => {
        console.log(term);
        //call to the axios function
        const response = await unsplash.get('/search/photos', {
           params: { query: term },
        });
        
        this.setState({ images: response.data.results });

    }
    render(){
        return (
            <div className="ui container" style={{ marginTop: '120px'}}>
                <SearchBar whenUserSubmits={this.onSearchSubmit.bind(this)} />
                Found:{this.state.images.length} images
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;

