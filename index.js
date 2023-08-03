let userSelectedRating;

document.addEventListener("click", (e) => {
  if (e.target.dataset.rating !== "rating-unit") return;

  if (
    e.target.dataset.rating === "rating-unit" &&
    e.target.classList.contains("selected")
  ) {
    e.target.classList.remove("selected");
  } else {
    e.target.classList.add("selected");

    userSelectedRating = e.target.innerText;

    const ratingUnits = document.querySelectorAll(
      '[data-rating="rating-unit"]'
    );

    ratingUnits.forEach((unit) => {
      if (unit !== e.target) {
        unit.classList.remove("selected");
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const ratingCounter = document.querySelector("#rating-counter");

  for (let i = 1; i <= 5; i++) {
    const countElWrapper = document.createElement("div");
    const countEl = document.createElement("span");
    countEl.textContent = i;
    countElWrapper.setAttribute("data-rating", "rating-unit");
    countElWrapper.classList.add("rating-unit");
    countElWrapper.appendChild(countEl);
    ratingCounter.append(countElWrapper);
  }
});
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formSubmitBtnWrapper = document.querySelector(".submit-btn-wrapper");
    const mainWrapper = document.querySelector(".main-wrapper");
    const formWrapper = document.querySelector(".form-wrapper");

    formSubmitBtnWrapper.style.backgroundColor = "hsl(25, 82%, 28%)";

    formSubmitBtnWrapper.innerHTML = `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
          class="loading-spinner"
        >
          <path
            fill="#ffff"
            d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
            opacity=".25"
          />
          <path
            fill="#ffff"
            d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
          >
            <animateTransform
              attributeName="transform"
              dur="0.75s"
              repeatCount="indefinite"
              type="rotate"
              values="0 12 12;360 12 12"
            />
          </path>
        </svg>
    `;

    setTimeout(() => {
      formWrapper.style.transform = "translateX(50px)";
      formWrapper.style.opacity = "0";
    }, 1800);

    setTimeout(() => {
      mainWrapper.innerHTML = `
        <div class="thank-you-wrapper">
            <div class="thank-you-image-wrapper">
                <img
                    src="./images/illustration-thank-you.svg"
                    alt="thank you image"
                />
            </div>
            <span class="user-rating" id="user-rating">
                You selected ${userSelectedRating} out of 5
            </span>
            <h2>Thank you!</h2>
            <p class="text">
                We appreciate you taking the time to give a rating. If you ever need
                more support, don’t hesitate to get in touch!
            </p>
        </div>
        `;
      const thankYouWrapper = document.querySelector(".thank-you-wrapper");
      thankYouWrapper.style.animation = "submitEffect 150ms linear";
    }, 2000);
  });
}
