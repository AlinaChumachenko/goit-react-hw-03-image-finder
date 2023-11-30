// import { Component } from 'react';
import css from './Searchbar.module.css';
// import Notiflix from 'notiflix';

const Searchbar = ({ onSubmit }) => {
  return (
    <header className={css.searchbar}>
      <form onSubmit={onSubmit} className={css.searchForm}>
        <button type="submit" className={css.searchBtn}>
          <span className={css.searchBtnLabel}>Search</span>
        </button>
        <input
          className={css.searchInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
        />
      </form>
    </header>
  );
};

export default Searchbar;

// class Searchbar extends Component {
//   state = {
//     query: '',
//   };

//   handleChange = evt => {
//     this.setState({ query: evt.target.value });
//   };

//   handleSubmit = evt => {
//     evt.preventDefault();
//     if (this.state.query.trim() === '') {
//       Notiflix.Notify.warning('Please, fill in the field!');
//       return;
//     }
//     this.props.submit(this.state);
//   };

//   render() {
//     return (
//       <header className={css.searchbar}>
//         <form onSubmit={this.handleSubmit} className={css.searchForm}>
//           <button type="submit" className={css.searchBtn}>
//             <span className={css.searchBtnLabel}>Search</span>
//           </button>

//           <input
//             className={css.searchInput}
//             type="text"
//             onChange={this.handleChange}
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//           />
//         </form>
//       </header>
//     );
//   }
// }
// export default Searchbar;
