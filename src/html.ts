import { WeddingData } from "./types/wedding";

interface Props {
  weddingData: WeddingData;
}

export const getHtml = async (props: Props) => {
  const { weddingData } = props;

  return `

  <div data-scroll-container>

    <!-- Hero секция -->
    <section data-scroll-section class="hero section" >
      <img data-scroll src="/main-bg.png" alt="Главное изображение" class="hero-image" data-scroll-speed="1">
    </section>

    <!-- О паре -->
    <section data-scroll-section class="section" data-title="Наша история">
      <h2 data-scroll class="section-title" data-scroll-speed="1">Наша история</h2>
      <div data-scroll class="about-content container" data-scroll-speed="2">
        <div>
          <p>${weddingData.couple.description}</p>
        </div>
        <div class="about-photos">
          <img src="/together.png" alt="Наша история">
        </div>
      </div>
    </section>


    <!-- Локация -->
    <section data-scroll-section class="section location-section" data-title="Локация">
      <h2 data-scroll class="section-title" data-scroll-speed="1">Локация</h2>
      <div data-scroll class="location-content container" data-scroll-speed="2"><div class="location-media">
          <img src="${weddingData.location.image}" alt="${
    weddingData.location.name
  }" class="location-image">
        </div>
        <div class="location-info">
          <h3>${weddingData.location.name}</h3>
          <p class="address">${weddingData.location.address}</p>
          <p class="description">${weddingData.location.description}</p>
          <a href="${
            weddingData.location.mapUrl
          }" target="_blank" class="btn">Посмотреть на карте</a>
        </div>
        
      </div>
    </section>

    
    <!-- Детали свадьбы -->
    <section data-scroll-section class="section" data-title="Тайминги" >
      <h2 data-scroll class="section-title" data-scroll-speed="1">Тайминги</h2>
      <div data-scroll class="details-grid container" data-scroll-speed="2">
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
    <section data-scroll-section class="section" data-title="Наши моменты">
      <h2 data-scroll class="section-title" data-scroll-speed="1">Наши моменты</h2>
      <div data-scroll class="gallery-grid container" data-scroll-speed="2">
        <!-- Будут добавлены через JS -->
      </div>
    </section>

    <!-- RSVP форма -->
    <section data-scroll-section class="section"  data-title="Ждем вас">
      <h2 data-scroll class="section-title" data-scroll-speed="1">Подтвердите присутствие</h2>
      <form data-scroll id="rsvp-form" class="container" data-scroll-speed="2">
        <div class="form-group">
          <label for="name">Ваше имя*</label>
          <input type="text" id="name" name="name" required>
        </div>
        <div class="form-group">
          <label for="email">Email*</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
          <button type="button" id="add-guest" class="btn btn-secondary">Добавить гостя</button>
          <div id="guest-fields"></div>
        </div>
        <div class="form-group">
          <label for="message">Ваше сообщение</label>
          <textarea id="message" name="message" rows="3"></textarea>
        </div>
        <button type="submit" class="btn">Отправить</button>
      </form>
    </section> 
  </div>
`;
};
