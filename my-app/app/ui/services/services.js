"use client";
import { useState } from "react";
import { Modal } from "antd";
import styles from "./services.module.css";
import { Fade } from "react-awesome-reveal";

export default function Services() {
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
    <div className={styles.services_main}>
      <section className={styles.services_info}>
        <h1 className={styles.title}>НАШИ УСЛУГИ:</h1>
        <div className={styles.about_cards}>
          <Fade direction="left" delay={500}>
            <div
              className={styles.about_card}
              onClick={() =>
                showModal(
                  "Осуществление генподрядных функций в строительстве. Это сложный и ответственный процесс, который требует профессионализма, опыта и слаженной работы команды. Мы берём на себя роль координатора и организатора всего строительного процесса до сдачи объекта в эксплуатацию. Мы отвечаем за соблюдение сроков, качества работ и их соответствие строительным нормам и правилам."
                )
              }
            >
              <img
                className={styles.about_icon}
                src="icons/contract.png"
                alt="contract"
              />
              <h4 className={styles.card_title}>Генеральный подряд</h4>
            </div>
          </Fade>
          <Fade direction="left" delay={800}>
            <div
              className={styles.about_card}
              onClick={() =>
                showModal(
                  "Мы специализируемся на строительстве промышленных предприятий, жилых зданий и административных объектов. Наши услуги включают полный спектр работ: от проектирования до сдачи объекта в эксплуатацию. Мы гарантируем высокое качество строительства, соблюдение сроков и использование современных технологий. Наша команда профессионалов обеспечивает индивидуальный подход к каждому проекту, учитывая все требования и пожелания заказчика. Мы стремимся создавать надежные и долговечные объекты, соответствующие всем стандартам и нормам."
                )
              }
            >
              <img
                className={styles.about_icon}
                src="icons/buildings.png"
                alt="buildings"
              />
              <h4 className={styles.card_title}>
                Возведение промышленных, гражданских и административных объектов
              </h4>
            </div>
          </Fade>
          <Fade direction="left" delay={1100}>
            <div
              className={styles.about_card}
              onClick={() =>
                showModal(
                  "Строительный контроль — это неотъемлемая часть процесса строительства, обеспечивающая соблюдение всех стандартов и норм. Наша компания осуществляет строгий контроль качества на всех этапах строительства, начиная с проверки проектной документации и заканчивая финальной сдачей объекта. Мы проводим регулярные инспекции, тестирования и аудиты, чтобы гарантировать соответствие выполненных работ установленным требованиям. Благодаря нашему профессионализму и опыту, мы можем выявить и устранить любые недочеты в кратчайшие сроки, что позволяет избежать задержек и дополнительных затрат."
                )
              }
            >
              <img
                className={styles.about_icon}
                src="icons/construction.png"
                alt="construction"
              />
              <h4 className={styles.card_title}>Строительный контроль</h4>
            </div>
          </Fade>
          <Fade direction="left" delay={1400}>
            <div
              className={styles.about_card}
              onClick={() =>
                showModal(
                  "Реконструкция объектов различного назначения включает в себя модернизацию, восстановление и перепрофилирование существующих зданий и сооружений. Наша компания предоставляет комплексные услуги по реконструкции, начиная с разработки проекта и заканчивая выполнением всех строительных работ. Мы учитываем современные требования к безопасности, энергоэффективности и функциональности, чтобы обновленные объекты соответствовали высоким стандартам качества. Наша цель — продлить срок службы зданий и повысить их эксплуатационные характеристики, сохраняя при этом историческую и архитектурную ценность."
                )
              }
            >
              <img
                className={styles.about_icon}
                src="icons/house.png"
                alt="house"
              />
              <h4 className={styles.card_title}>
                Реконструкция объектов различного назначения
              </h4>
            </div>
          </Fade>
          <Fade direction="left" delay={1700}>
            <div
              className={styles.about_card}
              onClick={() => showModal("Малоэтажное строительство включает в себя возведение жилых домов и коттеджей высотой до трех этажей. Мы предлагаем полный комплекс услуг: от проектирования и получения необходимых разрешений до выполнения всех строительных и отделочных работ. Наш подход основывается на использовании современных технологий и высококачественных материалов, что обеспечивает долговечность и комфорт возводимых зданий. Мы учитываем индивидуальные пожелания заказчиков и создаем уютные, функциональные и эстетически привлекательные дома, соответствующие всем стандартам и требованиям.")}
            >
              <img
                className={styles.about_icon}
                src="icons/small.png"
                alt="small"
              />
              <h4 className={styles.card_title}>Малоэтажное строительство</h4>
            </div>
          </Fade>
          <Fade direction="left" delay={2000}>
            <div
              className={styles.about_card}
              onClick={() =>
                showModal(
                  "Мы готовы взять на себя управление проектом любой сложности и обеспечить его успешное завершение. Наша команда готова применить свои знания и навыки для достижения поставленных целей."
                )
              }
            >
              <img
                className={styles.about_icon}
                src="icons/project.png"
                alt="project"
              />
              <h4 className={styles.card_title}>Управление проектами</h4>
            </div>
          </Fade>
        </div>
      </section>
      <Modal
        open={isModalVisible}
        onOk={handleOk}
        footer={null}
        title={null}
        onCancel={handleOk}
      >
        <p className={styles.modal_text}>{selectedCard}</p>
      </Modal>
    </div>
  );
}
