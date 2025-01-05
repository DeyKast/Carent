
import { Rings } from 'react-loader-spinner';
import css from './blockLoader.module.css';

export const BlockLoader = () => {
  return (
    <div className={css.backdrop}>
      <Rings
        visible={true}
        height="50"
        width="50"
        color="#F34A4A"
        ariaLabel="rings-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
