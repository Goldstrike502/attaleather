import React from 'react';
import './Portfolio.css';
import ImageGallery from 'react-image-gallery';
import {client} from './App';

export class Portfolio extends React.Component {
    constructor(){
        super();
        client.getEntries({'content_type': 'portfolioItem'}).then((response) => {
            // output the author name
            console.log(response)
        })
    }

    render() {

        const images = [
            {
                original: '/img/portfolio/res_chelseaboot.JPG',
                thumbnail: '/img/portfolio/thumb/thumbres_chelseaboot.JPG'
            },
            {
                original: '/img/portfolio/res_clogsdeelnemer.JPG',
                thumbnail: '/img/portfolio/thumb/thumbres_clogsdeelnemer.JPG'
            },
            {
                original: '/img/portfolio/res_derbijpolster.JPG',
                thumbnail: '/img/portfolio/thumb/thumbres_derbijpolster.JPG'
            },
            {
                original: '/img/portfolio/res_espadrillespatroon.JPG',
                thumbnail: '/img/portfolio/thumb/thumbres_espadrillespatroon.JPG'
            },
            {
                original: '/img/portfolio/res_hogelaarspolstering.JPG',
                thumbnail: '/img/portfolio/thumb/thumbres_hogelaarspolstering.JPG'
            },
            {
                original: '/img/portfolio/res_motorlaars.JPG',
                thumbnail: '/img/portfolio/thumb/thumbres_motorlaars.JPG'
            },
            {
                original: '/img/portfolio/res_pennyloafers.JPG',
                thumbnail: '/img/portfolio/thumb/thumbres_pennyloafers.JPG'
            },
            {
                original: '/img/portfolio/res_rijglaarshibiscus.JPG',
                thumbnail: '/img/portfolio/thumb/thumbres_rijglaarshibiscus.JPG'
            },
            {
                original: '/img/portfolio/res_rijglaarsjegroen.JPG',
                thumbnail: '/img/portfolio/thumb/thumbres_rijglaarsjegroen.JPG'
            },
            {
                original: '/img/portfolio/res_slippersinmaak.JPG',
                thumbnail: '/img/portfolio/thumb/thumbres_slippersinmaak.JPG'
            },
            {
                original: '/img/portfolio/res_slofjesinmaak.JPG',
                thumbnail: '/img/portfolio/thumb/thumbres_slofjesinmaak.JPG'
            },
            {
                original: '/img/portfolio/res_sneaker.JPG',
                thumbnail: '/img/portfolio/thumb/thumbres_sneaker.JPG'
            },
            {
                original: '/img/portfolio/res_tafelleer.JPG',
                thumbnail: '/img/portfolio/thumb/thumbres_tafelleer.JPG'
            },
            {
                original: '/img/portfolio/res_watertong.JPG',
                thumbnail: '/img/portfolio/thumb/thumbres_watertong.JPG',
            },
            {
                original: '/img/portfolio/res_westernbootblauw.JPG',
                thumbnail: '/img/portfolio/thumb/thumbres_westernbootblauw.JPG',
            },           
        ]

        return (
            <ImageGallery
                items={images}
                slideInterval={2000}
                thumbnailPosition={"top"}/>
        );
    }
}