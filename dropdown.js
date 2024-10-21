export function dropDown() {
  const button = document.querySelector("button");
  const list = document.querySelector("ul");
  const listItems = document.querySelectorAll("li");
  button.addEventListener("click", () => {
    list.classList.toggle("hidden");
  });
  listItems.forEach((li) => {
    li.addEventListener("click", () => {
      button.innerHTML = li.innerHTML;
      list.classList.toggle("hidden");
    });
  });
}
