import { Section } from 'components/Base/Section/Section';
import { Container } from 'components/Base/Container/Container';

import css from './sectionContacts.module.css';

const SectionContacts = () => {
  return (
    <Section>
      <Container>
        <div className={css.contactsWrapper}>
          <div className={css.contactInfo}>
            <div>
              <h1 className={css.title}>Contacts</h1>
              <a href="https://maps.app.goo.gl/hZzQ3qimeQYsnLA5A">
                Click here to open google maps
              </a>
            </div>

            <ul className={css.listWrapper}>
              <li>
                <p>Open now: 9AM - 10PM</p>
              </li>
              <li>
                <a href="https://www.youtube.com/">YouTube chanel</a>
              </li>
              <li>
                <a href="tel:+380991333801">+38 099 13 33 802</a>
              </li>
            </ul>
          </div>

          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2231.0672432539363!2d-122.2173056891008!3d37.73832163478565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f85b579729a7b%3A0x6fbc7055c9f6d934!2sRent%20A%20Car%20Airport%20Oakland!5e0!3m2!1suk!2sua!4v1735833631184!5m2!1suk!2sua"
            className={css.map}
            loading="lazy"
          ></iframe>
        </div>
      </Container>
    </Section>
  );
};

export default SectionContacts;
