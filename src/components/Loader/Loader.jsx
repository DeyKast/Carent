import ReactDOM from 'react-dom';
import { Rings } from 'react-loader-spinner';
import css from './loader.module.css';

export const Loader = () => {
  return ReactDOM.createPortal(
    <div className={css.backdrop}>
      <Rings
        visible={true}
        height="150"
        width="150"
        color="#F34A4A"
        ariaLabel="rings-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>,
    document.getElementById('loader-root')
  );
};
