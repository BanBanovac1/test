import React from 'react';
import Lightbox from 'react-images';

export default class Gallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentImage: 0,
            isOpen: false
        };

        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.closeLightbox = this.closeLightbox.bind(this);
        this.showGallery = this.showGallery.bind(this);

    }

    gotoNext() {
        this.setState({ currentImage: this.state.currentImage + 1 });
    }

    gotoPrevious() {
        this.setState({ currentImage: this.state.currentImage - 1 });
    }

    showGallery() {
        this.setState({isOpen: true});
    }

    closeLightbox() {
        this.setState({ isOpen: false });
    }

    render() {
        return (
            <div className="gallery">
                <div className="galleryButton" onClick={this.showGallery}>Show photos</div> 
                <Lightbox
                    images={[{ src: '../../images/headerBackgroundMobile.png' }, { src: '../../images/boat.png'}, {src: '../../images/beach.png'}, {src: '../../images/headerBackground1.png'}]}
                    isOpen={this.state.isOpen}
                    onClickPrev={this.gotoPrevious}
                    onClickNext={this.gotoNext}
                    onClose={this.closeLightbox}
                    currentImage={this.state.currentImage}
                    backdropClosesModal={true}
                />
            </div>
        );
    }
}