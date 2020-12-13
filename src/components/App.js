import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import ModalImage from './ModalImage/ModalImage';
import imageApi from '../service/api';
class App extends Component {
  state = {
    images: [],
    largeImageURL: null,
    loading: false,
    error: null,
    keyword: '',
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.keyword !== this.state.keyword) {
      this.fetchImage();
    }
    if (this.state.page > 2 && prevState.page !== this.state.page) {
      this.scrollDown();
    }
  }

  onSubmitForm = query => {
    this.setState({
      keyword: query,
      page: 1,
      images: [],
    });
  };

  saveLargeImage = largeImageURL => {
    this.setState({ largeImageURL: largeImageURL });
  };

  hideLargeImage = () => {
    this.setState({ largeImageURL: null });
  };

  showLargeImg = () => {
    const largeImage = this.state.largeImageURL;

    return largeImage;
  };

  scrollDown() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  fetchImage = () => {
    const { keyword, page } = this.state;
    this.setState({ loading: true });
    imageApi(keyword, page)
      .then(data =>
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          page: prevState.page + 1,
        })),
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  render() {
    const { images, loading, error, largeImageURL } = this.state;
    return (
      <>
        <Searchbar onSubmitForm={this.onSubmitForm} />
        {images.length > 0 && (
          <ImageGallery images={images} onImageClick={this.saveLargeImage} />
        )}
        {largeImageURL && (
          <Modal onCloseModal={this.hideLargeImage}>
            <ModalImage largeImage={this.showLargeImg()} />
          </Modal>
        )}
        {images.length > 0 && (
          <Button text="Load more" buttonAction={this.fetchImage} />
        )}
        {loading && <Loader />}
        {error && <p>ERROR</p>}
      </>
    );
  }
}

export default App;
