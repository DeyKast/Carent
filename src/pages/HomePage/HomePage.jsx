import css from './homePage.module.css';
import Logo from '../../img/logo.png';

import { SectionAbout } from './SectionAbout/SectionAbout';
import SectionCars from './SectionCars/SectionCars';
import SectionGallery from './SectionGallery/SectionGallery';
import SectionContacts from './SectionContacts/SectionContacts';

const HomePage = () => {
  return (
    <>
      <div className={css.section}>
        <div className={css.container}>
          <img src={Logo} alt="logo" className={css.logo} />
        </div>
      </div>
      <SectionAbout />
      <SectionCars />
      <SectionGallery />
      <SectionContacts />
    </>
  );
};

export default HomePage;
