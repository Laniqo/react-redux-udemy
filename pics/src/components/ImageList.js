import './ImageList.css';
import ImageCard from './ImageCard';
import React from 'react';


//function based component
const ImageList = (props) => {
    /*
    const images = props.images.map((image) => {
        return <img key={image.id} src={image.urls.regular} alt={image.description} />;
    }); */

    //cleaner version of above    
    /*
    const images = props.images.map(({ description, id, urls }) => {
        return <img key={id} src={urls.regular} alt={description} />;
    });
    */

    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />;
    }); 

    return <div className="image-list">{images}</div>;
};

export default ImageList;