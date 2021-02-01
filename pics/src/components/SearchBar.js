import React from 'react';

class SearchBar extends React.Component {
    //callback function handles user's search entry
    /*
    onInputChange(event){
        console.log(event.target.value)
    } */

    state = { term: ''}

    onFormSubmit(event) {
        event.preventDefault();
        this.props.whenUserSubmits(this.state.term);
    }

    render() {
        return (
        <div className="ui segment">
            <form onSubmit={this.onFormSubmit.bind(this)} className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    {/*calls the onInputChange function everytime the user enters in the input */}
                    <input 
                     type="text" 
                     value={this.state.term}
                     onChange={ (e) => this.setState({ term: e.target.value})}
                    />
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;

