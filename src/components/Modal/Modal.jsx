import { Component } from 'react';
import css from './Modal.module.css';

class Modal extends Component {
  backDropClose = e => {
    if (e.target.classList.contains(css.overlay)) {
      this.props.close();
    }
  };

  handleEsc = e => {
    e.code === 'Escape' && this.props.close();
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleEsc);
    document.addEventListener('click', this.backDropClose);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEsc);
    document.removeEventListener('click', this.backDropClose);
  }

  render() {
    const { imageUrl, id } = this.props;

    return (
      <div className={css.overlay}>
        <div className={css.modal}>
          <img src={imageUrl} alt={id} />
        </div>
      </div>
    );
  }
}
export default Modal;
