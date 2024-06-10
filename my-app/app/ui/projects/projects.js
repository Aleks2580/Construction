"use client";
import { useState } from "react";
import { Image, Modal, Button } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination } from "swiper/modules";
import styles from "./projects.module.css";

export default function Projects() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const showModal = (card) => {
    setSelectedCard(card);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


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
      >
        <SwiperSlide
          className={styles.projects_slide}
        >
          <Image.PreviewGroup
            items={[
              "pics/project1-2.jpg",
              "pics/project1-3.jpg",
              "pics/project1-4.jpg",
            ]}
            preview={{
              style: {
                backgroundColor: "rgba(0, 0, 0, 0.9)",
              },
              toolbarRender: () => null,
            }}
          >
            <Image
              className={styles.projects_image}
              alt="project"
              height={"100%"}
              width={"100%"}
              src="pics/project1-1.jpg"
            />
          </Image.PreviewGroup>
          <div className={styles.projects_legend}>
            <h2 className={styles.projects_legend_title}>
              Многофункциональный комплекс с аппарт-отелем ТПУ «Технопарк»
              Москва, пр. Андропова 10
            </h2>
            <Button
              type="primary"
              style={{ backgroundColor: "#deae66" }}
              onClick={() =>
                showModal(
                  `Многофункциональный комплекс с аппарт-отелем ТПУ Технопарк Москва, пр. Андропова 10, по договору субподряда с ГК Пионер:
                  - выполнение комплекса работ по монтажу систем 
                  отопления и теплоснабжения приточных установок;
                  - выполнение комплекса работ по монтажу 
                  трубопроводов холодоснабжения 
                  приточных установок;
                  - монтаж и обвязка узлов регулирования 
                  приточных установок;
                   - выполнение комплекса работ по монтажу 
                   слаботочных систем общеобменной вентиляции;
                  - выполнение работ по монтажу 
                  систем автоматического пожаротушения 
                  и противопожарного водопровода;`
                )
              }
            >
              Подробнее
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={styles.projects_slide}
          // onClick={() => setVisible(true)}
        >
          <Image.PreviewGroup
            items={[
              "pics/project2-2.jpg",
              "pics/project2-3.jpg",
              "pics/project2-4.jpg",
            ]}
            preview={{
              style: {
                backgroundColor: "rgba(0, 0, 0, 0.9)",
              },
              toolbarRender: () => null,
            }}
          >
            <Image
              className={styles.projects_image}
              alt="project"
              height={"100%"}
              width={"100%"}
              src="pics/project2-1.jpg"
            />
          </Image.PreviewGroup>
          <div className={styles.projects_legend}>
            <h2 className={styles.projects_legend_title}>
              Комплекс офисных зданий Останкино бизнес-парк г. Москва, пр. Огородный, с. 16
            </h2>
            <Button
              type="primary"
              style={{ backgroundColor: "#deae66" }}
              onClick={() =>
                showModal(
                `Комплекс офисных зданий «Останкино бизнес-парк» г. Москва, пр. Огородный, с. 16. По договору субподряда с ГК «Пионер»:
                  - выполнение работ по монтажу 
                  систем водоотведения и водопровода;
                  - выполнение работ по монтажу систем 
                  автоматического пожаротушения, холодоснабжения, 
                  отопления, теплоснабжения.`
                )
              }
            >
              Подробнее
            </Button>
          </div>
        </SwiperSlide>
      </Swiper>
      <Modal
        open={isModalVisible}
        onOk={handleOk}
        footer={null}
        title={null}
        onCancel={handleOk}
      >
        {/* <p className={styles.modal_text}>{selectedCard}</p> */}
        <pre className={styles.modal_text} style={{ whiteSpace: 'pre-wrap' }}>{selectedCard}</pre>
      </Modal>
    </div>
  );
}
