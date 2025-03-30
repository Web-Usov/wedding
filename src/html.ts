import { WeddingData } from "./types/wedding";

interface Props {
  weddingData: WeddingData;
}

export const getHtml = async (props: Props) => {
  const { weddingData } = props;

  return `

  <div class="page-nav">
    <div class="page-nav-dots"></div>
  </div>

  <!-- Hero секция -->
  <section class="hero section" style="background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('/wedding-bg-1.png') center/cover no-repeat;">
    <img src="/main-bg.png" alt="Главное изображение" class="hero-image">
  </section>

  <!-- О паре -->
  <section class="section">
  <h2 class="section-title">Наша история</h2>
  <div class="about-content container">
    <div>
      <p>${weddingData.couple.description}</p>
    </div>
    <div class="about-photos">
      <img src="/together.png" alt="Наша история">
    </div>
  </div>
  </section>

  <!-- Детали свадьбы -->
  <section class="section"  style="background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('/wedding-bg-2.png') center/cover no-repeat;">
  <h2 class="section-title">Тайминги</h2>
  <div class="details-grid container">
    ${weddingData.program
      .map(
        (item) => `
      <div class="detail-card">
        <h3>${item.time}</h3>
        <hr/>
        <p>${item.event}${
          item.description ? `<br/><span>${item.description}</span>` : ""
        }</p>
        
        
      </div>
    `
      )
      .join("")}
  </div>
  </section>

  <!-- Галерея -->
  <section class="section">
  <h2 class="section-title">Наши моменты</h2>
  <div class="gallery-grid container">
    <!-- Будут добавлены через JS -->
  </div>
  </section>

  <!-- RSVP форма -->
  <section class="section" style="background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('/wedding-bg-3.png') center/cover no-repeat;">
  <h2 class="section-title">Подтвердите присутствие</h2>
  <form id="rsvp-form" class="container">
    <div class="form-group">
      <label for="name">Ваше имя*</label>
      <input type="text" id="name" name="name" required>
    </div>
    <div class="form-group">
      <label for="email">Email*</label>
      <input type="email" id="email" name="email" required>
    </div>
    <div class="form-group">
      <label for="guests">Количество гостей</label>
      <select id="guests" name="guests">
        <option value="1">1 (только я)</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </div>
    <div class="form-group">
      <label for="message">Ваше сообщение</label>
      <textarea id="message" name="message" rows="3"></textarea>
    </div>
    <button type="submit" class="btn">Отправить</button>
  </form>
  </section> 
`;
};
