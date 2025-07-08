const loadAllCategories = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/peddy/categories');
    const data = await res.json();
    displayCategory(data.categories);
}

const loadAllPets = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/peddy/pets');
    const data = await res.json();
    displayAllPets(data.pets);
    console.log(data);
}

loadAllCategories();
loadAllPets();

const displayAllPets = (cards) => {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';

    cards.forEach(card => {
        const div = document.createElement('div');
        div.innerHTML = `
     
     <div class="bg-white rounded-xl shadow-md w-72 p-4">
    <!-- Image -->
    <img src=${card.image}>

    <!-- Title -->
    <h2 class="text-lg font-semibold mb-2">Charlie</h2>

    <!-- Info list -->
    <ul class="text-sm text-gray-600 space-y-1 mb-4">
      <li class="flex items-center gap-2">
        <span>📛</span> Breed: Golder retriever
      </li>
      <li class="flex items-center gap-2">
        <span>📅</span> Birth: 2024
      </li>
      <li class="flex items-center gap-2">
        <span>♀️</span> Gender: Female
      </li>
      <li class="flex items-center gap-2">
        <span>💲</span> Price : 199$
      </li>
    </ul>

    <!-- Buttons -->
    <div class="flex justify-between items-center">
      <button class="flex items-center gap-1 text-white bg-blue-500 hover:bg-blue-600 px-4 py-1.5 rounded-lg text-sm">
        👍 Adopt
      </button>
      <button class="text-blue-500 border border-blue-500 hover:bg-blue-50 px-4 py-1.5 rounded-lg text-sm">
        Details
      </button>
    </div>
  </div>
     
     `
        cardContainer.appendChild(div)
    });
}

const displayCategory = (data) => {
    const petsContainer = document.getElementById('btn-container');

    data.forEach(pet => {
        const div = document.createElement('div');
        div.innerHTML = `
     
     <button class="gap-4 bg-white btn">
     <img src=${pet.category_icon} class="w-10 h-full" />
     <p class="font-bold">${pet.category}</P>
     <button/>
     
     
     `
        petsContainer.appendChild(div)
    });
}