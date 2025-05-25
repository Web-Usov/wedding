import { WeddingData } from "../types/wedding";
import { Section, SectionTitle, SectionContainer } from "./ui/Section.ui";

interface Props {
  weddingData: WeddingData;
  bgImageUrl?: string;
}

export default function DressCodeSection({ weddingData, bgImageUrl }: Props) {
  const { dressCode } = weddingData;
  if (!dressCode) return <></>;
  return (
    <Section bgImageUrl={bgImageUrl}>
      <SectionTitle>Дресс-код</SectionTitle>
      <SectionContainer className="md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <div className="text-lg ">
            Мы выбрали элегантный стиль в спокойных природных оттенках.
            Пожалуйста, ознакомьтесь с рекомендациями по выбору нарядов:
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold">Рекомендуемые цвета:</span>
            <div className="flex gap-4 flex-wrap justify-between bg-white p-5 rounded-2xl">
              {dressCode.colors.map((color) => (
                <div
                  key={color.name}
                  className="w-12 h-12 rounded-full "
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                ></div>
              ))}
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-2">Для девушек:</h3>
          <ul className="list-disc ml-6 mb-6">
            <li>
              Платья миди или макси в спокойных, пастельных или светлых
              оттенках.
            </li>
            <li>
              Лаконичные фасоны, возможны разрезы, открытые плечи или спина.
            </li>
            <li>Минималистичные аксессуары и обувь на каблуке или без.</li>
            <li>Избегайте ярких, неоновых цветов и броских принтов.</li>
            <li>
              Пожалуйста, не надевайте полностью белое (это цвет невесты).
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Для мужчин:</h3>
          <ul className="list-disc ml-6 mb-6">
            <li>
              Классические костюмы или комплекты из пиджака и брюк в светлых,
              бежевых, серых или оливковых оттенках.
            </li>
            <li>Светлые рубашки, допускается отсутствие галстука.</li>
            <li>Элегантные поло или рубашки с длинным/коротким рукавом.</li>
            <li>Обувь — классические туфли, лоферы или светлые кеды.</li>
            <li>Избегайте полностью чёрных или белых образов.</li>
          </ul>

          <h3 className="text-xl italic text-gray-700">
            Просим воздержаться от слишком ярких и контрастных нарядов —
            поддержите атмосферу лёгкости и элегантности!
          </h3>
        </div>

        <img
          src="/dress-code-3.png"
          alt="Пример дресс-кода"
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </SectionContainer>
    </Section>
  );
}
