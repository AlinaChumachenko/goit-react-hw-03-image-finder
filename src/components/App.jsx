import { Component } from 'react';

import { fetchImages } from '../servises/imagesApi';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Searchbar from './Searchbar/Searchbar';
import Notiflix from 'notiflix';

export class App extends Component {
  state = {
    query: '',
    isLoading: false,
    error: '',
    images: [],
    page: 1,
    loadMore: false,
  };

  componentDidUpdate(_, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.query !== prevState.query
    ) {
      this.handleProducts();
    }
  }

  handleProducts = async () => {
    try {
      const { query, page } = this.state;

      this.setState({ isLoading: true });
      const { hits, totalHits, perPage } = await fetchImages(query, page);

      if (hits.length === 0) {
        Notiflix.Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      } else if (page === 1) {
        Notiflix.Notify.success(`Hooray! We found ${totalHits} images!`);
      } else if (totalHits < page * perPage && totalHits !== 0) {
        this.delayNotify();
      }

      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        loadMore: page < Math.ceil(totalHits / perPage),
      }));
    } catch (error) {
      Notiflix.Notify.failure(error.message);
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  delayNotify = () => {
    setTimeout(() => {
      Notiflix.Notify.info(
        "We're sorry, but you've reached the end of search results."
      );
    }, 1000);
  };

  loadMoreImages = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleSubmit = ({ query }) => {
    this.setState({ query, images: [], page: 1, loadMore: false });
  };

  render() {
    const { images, isLoading, loadMore } = this.state;
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: 16,
          paddingBottom: 24,
        }}
      >
        <Searchbar submit={this.handleSubmit} />
        {images.length > 0 && <ImageGallery images={images} />}
        {loadMore && <Button handleLoad={this.loadMoreImages} />}
        {isLoading && <Loader />}
      </div>
    );
  }
}

// export class App extends Component {
//   state = {
//     isListShown: false,
//     images: [],
//     isLoading: false,
//     page: 1,
//   };
//   componentDidUpdate(_, prevState) {
//     if (
//       prevState.isListShown !== this.state.isListShown &&
//       this.state.isListShown
//     ) {
//       this.setState({ isLoading: true });
//       fetchImages(this.state.page)
//         .then(data =>
//           this.setState(prevState => ({
//             images: [...prevState.images, ...data.data.results],
//           }))
//         )
//         .finally(() => {
//           this.setState({ isLoading: false });
//         });
//     }
//   }

//   showList = () => {
//     this.setState(prevState => {
//       return { isListShown: !prevState.isListShown };
//     });
//   };

//   render() {
//     return (
//       <div>
//         <Button
//           textContent={
//             this.state.isListShown ? 'Hide movies list' : 'Showe movies list'
//           }
//           clickHandler={this.showList}
//         />
//       </div>
//     );
//   }
// }
