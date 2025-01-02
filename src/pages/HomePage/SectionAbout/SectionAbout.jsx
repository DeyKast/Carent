import { Section } from 'components/Base/Section/Section';
import { Container } from 'components/Base/Container/Container';
import { Title } from 'components/Base/SectionTitle/SectionTitle';
import { FeaturesCard } from 'components/FeaturesCard/FeaturesCard';

import lamborghiniImage from '../../../img/labmorghini-image.png';

import css from './sectionAbout.module.css';

export const SectionAbout = () => {
  return (
    <Section>
      <Container>
        <Title titleText={'about us'} margin={'0px 0px 85px 0px'} />
        <div className={css.contentWrapper}>
          <div>
            <p className={css.sectionText}>
              Reliable car rental service offering a diverse fleet, flexible
              options, and competitive rates for all your travel needs.
            </p>
            <img src={lamborghiniImage} alt="lamborghini" />
          </div>
          <div className={css.featuresCardsWrapper}>
            <FeaturesCard
              symbol={'+'}
              number={'10'}
              text={'Years of expierence'}
            />
            <FeaturesCard
              symbol={'+'}
              number={'200'}
              text={'Satisfied customers'}
            />
            <FeaturesCard
              symbol={'+'}
              number={'150'}
              text={'Customers returned'}
            />
            <FeaturesCard symbol={'+'} number={'100'} text={'Cars available'} />
          </div>
        </div>
      </Container>
    </Section>
  );
};
