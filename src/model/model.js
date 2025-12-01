import * as VIEWS from "../app/view.js";
import { auth } from "../app/app.js";

function _readData() {
  try {
    const data = localStorage.getItem("recipeBook");
    return data ? JSON.parse(data) : {};
  } catch (e) {
    console.error("Error reading from localStorage", e);
    return {};
  }
}

function _writeData(data) {
  try {
    localStorage.setItem("recipeBook", JSON.stringify(data));
  } catch (e) {
    console.error("Error writing to localStorage", e);
  }
}

export function changePage(pageName, callback, recipeId) {
  let pageContent = "";
  switch (pageName) {
    case "home":
      pageContent = VIEWS.homePage;
      break;
    case "account":
      pageContent = VIEWS.accountPage;
      break;
    case "create-recipe":
      pageContent = VIEWS.createRecipePage;
      break;
    case "your-recipes":
      pageContent = VIEWS.yourRecipesPage;
      break;
    case "recipe-view":
      pageContent = VIEWS.recipeViewPage;
      break;
    case "edit-recipe":
      pageContent = VIEWS.editRecipePage;
      break;
    case "recipes":
      pageContent = VIEWS.recipesPage;
      break;
    default:
      pageContent = VIEWS.homePage;
      break;
  }
  $("#app").html(pageContent);
  if (callback) {
    callback(recipeId);
  }
}

export function createRecipe(newRecipe) {
  const data = _readData();
  const userRecipes = data[newRecipe.ownerId] || [];
  newRecipe.id = Date.now().toString();
  userRecipes.push(newRecipe);
  data[newRecipe.ownerId] = userRecipes;
  _writeData(data);
  return newRecipe.id;
}

export function getRecipesForUser(userId) {
  const data = _readData();
  return data[userId] || [];
}

export function getRecipeById(recipeId) {
  const data = _readData();
  const userId = auth.currentUser.uid;
  const userRecipes = data[userId] || [];
  return userRecipes.find((recipe) => recipe.id === recipeId) || null;
}

export function updateRecipe(recipeId, updatedData) {
  const userId = auth.currentUser.uid;
  const data = _readData();
  const userRecipes = data[userId] || [];
  const recipeIndex = userRecipes.findIndex((recipe) => recipe.id === recipeId);
  if (recipeIndex !== -1) {
    updatedData.id = recipeId;
    updatedData.ownerId = userId;
    userRecipes[recipeIndex] = updatedData;
    data[userId] = userRecipes;
    _writeData(data);
    return true;
  }
  return false;
}

export function deleteRecipe(recipeId) {
  const userId = auth.currentUser.uid;
  const data = _readData();
  let userRecipes = data[userId] || [];
  userRecipes = userRecipes.filter((recipe) => recipe.id !== recipeId);
  data[userId] = userRecipes;
  _writeData(data);
  return true;
}
