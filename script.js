document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("subscribeForm");
  const emailInput = document.getElementById("emailInput");
  const formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailValue = emailInput.value.trim();

    if (emailValue.includes("@")) {
      formMessage.style.color = "green";
      formMessage.textContent = `Дякуємо! На адресу ${emailValue} успішно оформлено підписку.`;

      emailInput.value = "";
    } else {
      formMessage.style.color = "red";
      formMessage.textContent =
        "Будь ласка, введіть коректну електронну адресу.";
    }
  });
});
