import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
    rednerList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                           className="ui button primary"
                           onClick={() => this.props.selectSong(song)}> 
                           Select
                        </button>
                    </div>

                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }
    render() {
        return <div className="ui divided list">{this.rednerList()}</div>;
    }
}

//grab states in Redux and apply them
//as props into this component
//mapStateToProps is a naming convention but can be named 
//however you want 
const mapStateToProps = (state) => {
    return { songs: state.songs };
}

//mapStateToPros to determine the state to use
//selectSong is the action to be passed to the reducer
export default connect(mapStateToProps, { selectSong })(SongList);