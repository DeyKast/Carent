import css from './homePage.module.css';
import Logo from '../../img/logo.png';

import { SectionAbout } from './SectionAbout/SectionAbout';
import SectionCars from './SectionCars/SectionCars';

const HomePage = () => {
  return (
    <>
      <div className={css.section}>
        <div className={css.container}>
          <img src={Logo} alt="logo" className={css.logo} />

          <button className={css.startBtn}>Start</button>
        </div>
      </div>
      <SectionAbout />
      <SectionCars />
    </>
  );
};

export default HomePage;
