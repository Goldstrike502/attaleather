import React from 'react';
import './Portfolio.css';
import ImageGallery from 'react-image-gallery';

export class Portfolio extends React.Component {

    render() {

        const images = [
            {
                original: '/img/portfolio/watertong.jpg',
                thumbnail: '/img/portfolio/thumb-watertong.jpg',
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/2/',
                thumbnail: 'http://lorempixel.com/250/150/nature/2/'
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/3/',
                thumbnail: 'http://lorempixel.com/250/150/nature/3/'
            }
        ]

        return (
            <ImageGallery
                items={images}
                slideInterval={2000}
                thumbnailPosition={"top"}/>
        );
    }
}