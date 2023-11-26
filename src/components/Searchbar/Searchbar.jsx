import { Component } from 'react';
import css from './Searchbar.module.css';
import Notiflix from 'notiflix';

class Searchbar extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
  };

  handleChange = evt => {
    this.setState({ query: evt.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.query.trim() === '') {
      Notiflix.Notify.warning('Please, fill in the field!');
      return;
    }
    this.props.submit(this.state);
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form onSubmit={this.handleSubmit} className={css.searchForm}>
          <button type="submit" className={css.searchBtn}>
            <span className={css.searchBtnLabel}>Search</span>
          </button>

          <input
            className={css.searchInput}
            type="text"
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
