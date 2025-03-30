// Обработка формы RSVP
export function setupRSVPForm() {
  const form = document.getElementById("rsvp-form") as HTMLFormElement;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    alert(`Спасибо, ${data.name}! Ваше присутствие подтверждено.`);
    form.reset();
  });
}
