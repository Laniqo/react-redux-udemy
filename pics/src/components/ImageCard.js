import React from 'react';

class ImageCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {spans: 0};
        //create a ref for every new image created
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        console.log(this.imageRef);
        //creating an event listener to for the image to load on the page
        //then calling callback function to set current span of the image 
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    //using arrow function so that 'this' is automatically bind-ed
    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);

        //shorthand version of setState({ spans: spans })
        this.setState({ spans });
    }

    render() {

        const {description, urls} = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}`}}>

                <img 
                  ref={this.imageRef}
                  alt={description}
                  src={urls.regular}
                />

            </div>
        );
    }
}

export default ImageCard;