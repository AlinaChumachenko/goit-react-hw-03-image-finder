import css from './Button.module.css';

const Button = ({ handleLoad }) => {
  return (
    <button onClick={handleLoad} className={css.loadMoreBtn}>
      Load More
    </button>
  );
};
export default Button;
