import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

import { Autoplay, Scrollbar } from 'swiper/modules';

import css from './sectionGallery.module.css';

import { Container } from 'components/Base/Container/Container';
import { Section } from 'components/Base/Section/Section';
import { Title } from 'components/Base/SectionTitle/SectionTitle';

import { getGalleryPhotos } from 'service/getGalleryPhotos';
import { useEffect, useState } from 'react';

const SectionGallery = () => {
  const [galleryPhoto, setGalleryPhotos] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getGalleryPhotos();
        setGalleryPhotos(response[response.length - 1].galleryImages);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <>
      <Section>
        <Container>
          <Title titleText={'Gallery'} margin={'0px 0px 40px 0px'} />
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            scrollbar={{
              hide: true,
            }}
            breakpoints={{
              769: {
                slidesPerView: 2,
              },
            }}
            modules={[Scrollbar, Autoplay]}
            loop={true}
            className={`mySwiper ${css.swiper}`}
          >
            {galleryPhoto.map((photo, index) => (
              <SwiperSlide key={index} className={css.swiperItem}>
                <img src={photo} alt={photo} className={css.swiperItemImage} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </Section>
    </>
  );
};

export default SectionGallery;
