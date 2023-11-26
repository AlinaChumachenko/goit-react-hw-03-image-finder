import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  return (
    <ul className={css.gallery}>
      {images.map(image => (
        <ImageGalleryItem image={image} key={image.id} />
      ))}
    </ul>
  );
};

export default ImageGallery;
