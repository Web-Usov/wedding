// Обработка формы RSVP
export function setupRSVPForm() {
  const form = document.getElementById("rsvp-form") as HTMLFormElement;
  const addGuestBtn = document.getElementById("add-guest") as HTMLButtonElement;
  const guestsContainer = document.getElementById(
    "guest-fields"
  ) as HTMLDivElement;

  let guestCount = 0;

  // Обработчик добавления гостя
  addGuestBtn.addEventListener("click", () => {
    if (guestCount >= 4) {
      alert("Можно добавить не более 4 гостей");
      return;
    } else {
      addGuestBtn.disabled = false;
    }

    const guestDiv = document.createElement("div");
    guestDiv.className = "form-group guest-field";

    const label = document.createElement("label");
    label.textContent = `Имя гостя ${guestCount + 1}`;
    label.htmlFor = `guest-${guestCount}`;

    const input = document.createElement("input");
    input.type = "text";
    input.id = `guest-${guestCount}`;
    input.name = `guest-${guestCount}`;
    input.required = true;

    guestDiv.append(label, input);
    guestsContainer.append(guestDiv);
    guestCount++;
    if (guestCount >= 4) {
      addGuestBtn.disabled = true;
    }
  });

  // Обработчик отправки формы
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const guestNames = [];
    for (let i = 0; i < guestCount; i++) {
      if (data[`guest-${i}`]) {
        guestNames.push(data[`guest-${i}`]);
      }
    }

    const message =
      guestNames.length > 0
        ? `Спасибо, ${
            data.name
          }! Вы подтвердили присутствие с гостями: ${guestNames.join(", ")}.`
        : `Спасибо, ${data.name}! Ваше присутствие подтверждено.`;

    alert(message);
    form.reset();
    guestsContainer.innerHTML = "";
    guestCount = 0;
  });
}
