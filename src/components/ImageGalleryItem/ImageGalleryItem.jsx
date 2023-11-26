import { Component } from 'react';

import css from './ImageGalleryItem.module.css';
import Modal from '../Modal/Modal';

class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { image } = this.props;
    const { isModalOpen } = this.state;
    return (
      <>
        <li className={css.galleryItem} onClick={this.openModal}>
          <img
            src={image.webformatURL}
            alt={image.id}
            className={css.galleryItemImage}
          />
        </li>
        {isModalOpen && (
          <Modal
            imageUrl={image.largeImageURL}
            alt={image.id}
            close={this.closeModal}
          />
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
