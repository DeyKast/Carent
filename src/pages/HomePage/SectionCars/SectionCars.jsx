import React, { useState } from 'react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Container } from 'components/Base/Container/Container';
import { Section } from 'components/Base/Section/Section';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import custom styles for your section
import css from './sectionCars.module.css';

const categories = [
  {
    id: 'family',
    title: 'FAMILY',
    description: 'Family cars are comfortable and practical, suitable for all.',
    image: 'family-car.png',
  },
  {
    id: 'muscle',
    title: 'MUSCLE',
    description: 'A muscle car is an American-made two-door sports coupe.',
    image: 'muscle-car.png',
  },
  {
    id: 'sport',
    title: 'SPORT',
    description: 'Sport cars are designed for performance and speed.',
    image: 'sport-car.png',
  },
  {
    id: 'off-road',
    title: 'OFF-ROAD',
    description: 'Off-road cars are built for rugged terrain.',
    image: 'off-road-car.png',
  },
  {
    id: 'luxury',
    title: 'LUXURY',
    description: 'Luxury cars offer premium comfort and technology.',
    image: 'luxury-car.png',
  },
];

export default function SectionCars() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const handleCategoryClick = category => {
    setActiveCategory(category);
    const index = categories.findIndex(cat => cat.id === category.id);
    swiperInstance.slideToLoop(index, 500); // Перехід до відповідного слайду з анімацією
  };

  return (
    <Section>
      <Container>
        <div className={css['section-cars']}>
          {/* Categories navigation */}
          <div className={css.categories}>
            {categories.map(category => (
              <button
                key={category.id}
                className={`${css['category-button']} ${
                  category.id === activeCategory.id ? css.active : ''
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className={css['category-icon']}
                />
                {category.title}
              </button>
            ))}
          </div>

          {/* Swiper for the selected category */}
          <div className={css['car-slider']}>
            <Swiper
              onSwiper={setSwiperInstance}
              effect="coverflow"
              modules={[EffectCoverflow]}
              slidesPerView={1}
              centeredSlides={true}
              spaceBetween={1000}
              loop={true}
              coverflowEffect={{
                rotate: 20,
                stretch: 0,
                depth: 2500,
                modifier: 1.5,
                slideShadows: true,
              }}
            >
              {categories.map(category => (
                <SwiperSlide key={category.id}>
                  <div className={css['car-details']}>
                    <h2 className={css['car-title']}>{category.title} CLASS</h2>
                    <p className={css['car-description']}>
                      {category.description}
                    </p>
                    <img
                      src={category.image}
                      alt={category.title}
                      className={css['car-image']}
                    />
                    <button className={css['see-more-button']}>SEE MORE</button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </Section>
  );
}
