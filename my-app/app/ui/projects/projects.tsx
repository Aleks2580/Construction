'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination } from 'swiper/modules';
import styles from "./projects.module.css";

export default function Projects() {
  return (
    <div className={styles.projects_main}>
      <h1 className={styles.projects_title}>НАШИ ПРОЕКТЫ</h1>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className={styles.swiper}
        // style={{
        //   "--swiper-pagination-color": "#fff",
        //   "--swiper-navigation-color": "#fff",
        // }}
      >
        <SwiperSlide className={styles.projects_slide}>
          <img className={styles.projects_image} src="/pics/project1.webp" alt="project1" />
          <div className={styles.projects_legend}>
            <h2 className={styles.projects_legend_title}>ПРОЕКТ 1</h2>
            <p className={styles.projects_legend_description}>Описание проекта 1</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.projects_slide}>
          <img className={styles.projects_image} src="/pics/project2.webp" alt="project2" />
          <div className={styles.projects_legend}>
            <h2 className={styles.projects_legend_title}>ПРОЕКТ 2</h2>
            <p className={styles.projects_legend_description}>Описание проекта 2</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.projects_slide}>
          <img className={styles.projects_image} src="/pics/project3.webp" alt="project3" />
          <div className={styles.projects_legend}>
            <h2 className={styles.projects_legend_title}>ПРОЕКТ 3</h2>
            <p className={styles.projects_legend_description}>Описание проекта 3</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.projects_slide}>
          <img className={styles.projects_image} src="/pics/project4.webp" alt="project4" />
          <div className={styles.projects_legend}>
            <h2 className={styles.projects_legend_title}>ПРОЕКТ 4</h2>
            <p className={styles.projects_legend_description}>Описание проекта 4</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.projects_slide}>
          <img className={styles.projects_image} src="/pics/project5.webp" alt="project5" />
          <div className={styles.projects_legend}>
            <h2 className={styles.projects_legend_title}>ПРОЕКТ 5</h2>
            <p className={styles.projects_legend_description}>Описание проекта 5</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.projects_slide}>
          <img className={styles.projects_image} src="/pics/project6.webp" alt="project6" />
          <div className={styles.projects_legend}>
            <h2 className={styles.projects_legend_title}>ПРОЕКТ 6</h2>
            <p className={styles.projects_legend_description}>Описание проекта 6</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
