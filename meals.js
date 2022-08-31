const loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals));
}
const displayMeals = meals => {
    const mealContener = document.getElementById('meal-container');
    mealContener.innerHTML = ``;
    meals.forEach(meal => {
        //console.log(meals);
        const mealdiv = document.createElement('div');
        mealdiv.classList.add('col');
        mealdiv.innerHTML = `
        <div class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0,300)}</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
                 
    `;
    mealContener.appendChild(mealdiv);

    });
}
const searchFood = () => {
    const searchText = document.getElementById('search-text');
    const serchYou = searchText.value;
    loadMeals(serchYou);
    searchText.value ='';
}
//const dispalyDetails=(idMeal)=>{
  //const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  //fetch (url)
  //.then (res => res.json())
  //.then (data => dispalyDetailsall(data.meals[0]));
  
//}
//const dispalyDetailsall = meal =>{
  //const detailContainer = document.getElementById('detail-container');
  //const mealsDiv = document.createElement('div');
  //mealsDiv.classList.add('card');
 // mealsDiv.innerHTML=`
  //<img src="${meal.strMealThumb}" class="card-img-top" alt="...">
  //<div class="card-body">
   //<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
 // </div>
 // `;
 //detailContainer.appendChild(mealsDiv);
//}
