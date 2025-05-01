const BASE_URL = "https://dummyjson.com/";

function renderRecipes(data) {
   const wrapper = document.querySelector(".wrapper");
   const fragment = document.createDocumentFragment();

   data?.users.forEach((res) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
         <img src="${res.image}" alt="" />
         <h3>${res.firstName}</h3>
         <p>${res.age} years old</p>
      `;

      fragment.appendChild(card);
   });

   wrapper.appendChild(fragment);
}

async function fetchData(endpoint) {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    const data = await response.json();
    console.log(data);

   renderRecipes(data);
}

window.addEventListener("load", () => {
   fetchData("users");
});
