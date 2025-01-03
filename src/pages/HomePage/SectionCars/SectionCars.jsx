import React, { useEffect, useState } from 'react';
import { EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Container } from 'components/Base/Container/Container';
import { Section } from 'components/Base/Section/Section';
import CategoriesList from 'components/CategoriesList/CategoriesList';

import { getAllCategories } from 'service/getCategories';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

import css from './sectionCars.module.css';

import { useNavigate } from 'react-router-dom';
import SeeMoreButton from 'components/SeeMoreBtn/SeeMoreBtn';

export default function SectionCars() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getAllCategories();
        setCategories(response);
        setActiveCategory(response[0]);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = category => {
    setActiveCategory(category);
    const index = categories.findIndex(cat => cat.id === category.id);
    swiperInstance.slideToLoop(index, 500);
  };

  const handleSeeMoreClick = id => {
    navigate(`/catalog/${id}`, { state: { categories } });
  };

  return (
    <Section>
      <Container>
        <div className={css['section-cars']}>
          <CategoriesList
            categories={categories}
            activeCategory={activeCategory}
            onCategoryClick={handleCategoryClick}
          />

          <div className={css['car-slider']}>
            <Swiper
              onSwiper={setSwiperInstance}
              effect="coverflow"
              allowTouchMove={false}
              modules={[EffectCoverflow]}
              slidesPerView={1}
              centeredSlides={true}
              spaceBetween={1000}
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
                    <div style={{ position: 'relative', overflow: 'hidden' }}>
                      <img
                        src={category.photo}
                        alt={category.name}
                        className={css['car-image']}
                        width={'550px'}
                      />
                      <span className={css.sideText}>
                        {category.name}&nbsp;-&nbsp;{category.name}&nbsp;-&nbsp;
                        {category.name}&nbsp;-&nbsp;{category.name}
                      </span>
                    </div>
                    <div className={css.detailsTextWrapper}>
                      <h2 className={css['car-title']}>
                        {category.name} CLASS
                      </h2>
                      <p className={css['car-description']}>
                        {category.description}
                      </p>
                      <SeeMoreButton
                        id={category.id}
                        onSeeMoreClick={handleSeeMoreClick}
                      />
                    </div>
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
