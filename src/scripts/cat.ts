export function initCat(): void {
  const catButton = document.querySelector<HTMLButtonElement>("[data-cat]");
  const catEmoji = document.querySelector<HTMLElement>("[data-cat-emoji]");

  if (!catButton || !catEmoji) return;

  catButton.addEventListener("click", () => {
    catEmoji.removeAttribute("data-spinning");
    void catEmoji.offsetWidth;
    catEmoji.dataset.spinning = "true";
  });
}
