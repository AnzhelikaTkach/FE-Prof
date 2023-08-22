const root = document.querySelector("#root");

const images = [
  "https://images.unsplash.com/photo-1689650337975-ed93cf3d58e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
  "https://images.unsplash.com/photo-1690860131818-6794aa1e0ff7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2471&q=80",
  "https://images.unsplash.com/photo-1690664713695-924c3fc718c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
  "https://images.unsplash.com/photo-1690642716617-5fae66a8753b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
];

const frame = document.createElement("div");
frame.classList.add("frame");

const cards = document.createElement("div");
cards.classList.add("cards");

frame.append(cards);
root.append(frame);

for (let i = 0; i < images.length; i++) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.backgroundImage = `url("${images[i]}")`;
  cards.append(card);
}

// rounds

const rounds = document.createElement("div");
rounds.classList.add("rounds");

frame.append(rounds);

for (let i = 0; i < images.length; i++) {
  const round = document.createElement("button");
  rounds.append(round);

  const all_btns = round.parentElement.children;
  all_btns[0].classList.add("active");

  round.onclick = () => {
    cards.style.left = `${-1 * i * 500}px`;

    for (let j = 0; j < all_btns.length; j++) {
      all_btns[j].classList.remove("active");
    }

    round.classList.add("active");
  };
}
