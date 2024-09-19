fetch('https://dummyjson.com/recipes').then((data) => {
    return data.json()
}).then((recipesData) => {
    recipesData.recipes.map((recipe) => {
        console.log(recipe);
        
        const dataHTML = `
<div class="card" style="width: 22rem;">
  <img src=${recipe.image} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${recipe.name}</h5>
    <p class="card-text">${recipe.ingredients.slice(0, 3).join(', ')}...</p>
 <a href='#' class="btnel --btn-success " data-index=${recipe.id}>Learn More</a>

  </div>
</div>
        `
    document.getElementById('recipes').innerHTML += dataHTML;
 
    })


const buttons = document.querySelectorAll('.btnel');
 buttons.forEach(button => {
button.addEventListener('click', (e) => {
const index = e.target.getAttribute('data-index'); 
const recipe = recipesData.recipes.find(recipe => recipe.id === parseInt(index));
console.log(index);
console.log(recipe);
 // Open a new tab with the recipe details
window.open(`/deeygitalstudio.github.io/details.html?recipe=${recipe.id}`, '_blank');

});
});
 });

       function getRecipeIdFromUrl() {
      const params = new URLSearchParams(window.location.search);
      return params.get('recipe');
    }

    // Get the recipe ID from the URL
    const recipeId = getRecipeIdFromUrl();

    // Fetch the recipe details from the API using the recipe ID
    fetch(`https://dummyjson.com/recipes/${recipeId}`)
      .then(response => response.json())
      .then(recipe => {
        // Update the DOM with the recipe details
        document.getElementById('title').innerText = recipe.name;
        document.getElementById('img').src = recipe.image;
        document.getElementById('ingredients').innerText = `Ingredients: ${recipe.ingredients.join(', ')}`;
        document.getElementById('ins').innerText = recipe.instructions
        document.getElementById('time').innerText = `Time: Prepared in ${recipe.prepTimeMinutes} Minutes`
        document.getElementById('cooktime').innerText = `Cook Time: ${recipe.cookTimeMinutes} Minutes`
        document.getElementById('diff').innerText = `Difficulty: ${recipe.difficulty}`
        document.getElementById('tags').innerText = `Tags: ${recipe.tags}`
        document.getElementById('cus').innerText = `Cuisine: ${recipe.cuisine}`
        document.getElementById('meal').innerText = `Meal Type: ${recipe.mealType}`
        document.getElementById('ratings').innerText = `Ratings: ${recipe.rating}`
      })
      .catch(error => console.error('Error fetching recipe details:', error));




      



// fetch('https://dummyjson.com/recipes')
//   .then((response) => response.json())
//   .then((recipesData) => {
//     console.log(recipesData); // Check the structure of the data

//     // Assuming recipesData contains an array of recipes:
//     if (Array.isArray(recipesData.recipes)) {
//       recipesData.recipes.map((recipe) => {
//         console.log(recipe.title);
//       });
//     } else {
//       console.log("No recipes found");
//     }
//   })
//   .catch((error) => {
//     console.error("Error fetching recipes:", error);
//   });
