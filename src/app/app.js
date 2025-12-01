import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

import * as MODEL from "../model/model.js";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHpMtUvT9S-0s96k3Kwgi_GENJn0E62s8",
  authDomain: "mobile-class-2b641.firebaseapp.com",
  projectId: "mobile-class-2b641",
  storageBucket: "mobile-class-2b641.firebasestorage.app",
  messagingSenderId: "353071430577",
  appId: "1:353071430577:web:d27cc12da5c4951d42db90",
  measurementId: "G-2HQ6Y5RCTJ",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
let currentUser = null;

onAuthStateChanged(auth, (user) => {
  currentUser = user;
  if (user) {
    $("#your-recipes-a, #your-recipes-a-mobile").removeClass("hidden");
    $("#create-recipe-a, #create-recipe-a-mobile").removeClass("hidden");
    $(".login-nav a").text("Logout");
    $(".login-mobile-nav p").text("Logout");
    if ($(".account-content").length) {
      $("#username-display").text(user.displayName || "Welcome!");
      $(".login-section, .sign-up-section").addClass("hidden");
      $(".auth-content").removeClass("hidden");
    }
  } else {
    $("#your-recipes-a, #your-recipes-a-mobile").addClass("hidden");
    $("#create-recipe-a, #create-recipe-a-mobile").addClass("hidden");
    $(".login-nav a").text("Login");
    $(".login-mobile-nav p").text("Login");
    if ($(".account-content").length) {
      $(".login-section, .sign-up-section").removeClass("hidden");
      $(".auth-content").addClass("hidden");
    }
  }
});

function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  let pageID_parts = pageID.split("?id=");
  pageID = pageID_parts[0];
  let recipeId = pageID_parts[1];
  if (pageID === "") {
    pageID = "home";
  }
  switch (pageID) {
    case "create-recipe":
      MODEL.changePage(pageID, setupCreateRecipePage);
      break;
    case "your-recipes":
      MODEL.changePage(pageID, loadUserRecipes);
      break;
    case "recipe-view":
      MODEL.changePage(pageID, loadSingleRecipe, recipeId);
      break;
    case "edit-recipe":
      MODEL.changePage(pageID, setupEditRecipePage, recipeId);
      break;
    default:
      MODEL.changePage(pageID);
      break;
  }
}

function setupCreateRecipePage() {
  if (!currentUser) {
    alert("You must be logged in to create a recipe.");
    window.location.hash = "account";
    return;
  }
  const firstName = currentUser.displayName
    ? currentUser.displayName.split(" ")[0]
    : "";
  $("#user-firstname").text(firstName);
}

function loadUserRecipes() {
  if (!currentUser) {
    alert("You must be logged in to view your recipes.");
    window.location.hash = "account";
    return;
  }
  const firstName = currentUser.displayName
    ? currentUser.displayName.split(" ")[0]
    : "";
  $("#user-firstname").text(firstName);
  const recipes = MODEL.getRecipesForUser(currentUser.uid);
  let html = "";
  if (recipes.length === 0) {
    html = "<p>You haven't created any recipes yet!</p>";
  } else {
    recipes.forEach((recipe) => {
      const imageStyle = recipe.imageData
        ? `style="background-image: url(${recipe.imageData}); background-size: cover; background-position: center;"`
        : 'class="recipe-img-pizza"';
      html += `
            <div class="your-recipe-holder">
              <div class="recipe">
                <div ${imageStyle} onclick="window.location.hash='recipe-view?id=${recipe.id}'" style="cursor: pointer;">
                  <div class="view-recipe-btn">View</div>
                </div>
                <div class="recipe-text-content">
                  <h1>${recipe.name}</h1>
                  <p class="recipe-desc">${recipe.description}</p>
                </div>
              </div>
              <div class="btns-holder">
                <div class="edit-recipe-btn" data-id="${recipe.id}">Edit Recipe</div>
                <div class="delete-recipe-btn" data-id="${recipe.id}">Delete</div>
              </div>
            </div>`;
    });
  }
  $("#your-recipes-holder").html(html);
}

function loadSingleRecipe(recipeId) {
  const recipe = MODEL.getRecipeById(recipeId);
  if (recipe) {
    $("#recipe-view-title-vert").text(recipe.name);
    $("#recipe-view-title").text(recipe.name);
    $("#recipe-view-desc").text(recipe.description);
    $("#recipe-view-time").text(recipe.time);
    $("#recipe-view-servings").text(recipe.servings);
    if (recipe.imageData) {
      $(".recipe-view-img").css({
        "background-image": `url(${recipe.imageData})`,
        "background-size": "cover",
        "background-position": "center",
      });
    } else {
      $(".recipe-view-img").addClass("recipe-img-pizza");
    }
    let ingredientsHtml = recipe.ingredients
      .map((ing) => `<li>${ing}</li>`)
      .join("");
    $("#recipe-view-ingredients").html(ingredientsHtml);
    let instructionsHtml = recipe.instructions
      .map((ins) => `<li>${ins}</li>`)
      .join("");
    $("#recipe-view-instructions").html(instructionsHtml);
    if (currentUser && currentUser.uid === recipe.ownerId) {
      $("#edit-recipe-btn-container").html(
        `<div class="edit-recipe-btn" data-id="${recipe.id}"><p>Edit Recipe</p></div>`
      );
    }
  }
}

function setupEditRecipePage(recipeId) {
  if (!currentUser) {
    alert("You must be logged in to edit a recipe.");
    window.location.hash = "account";
    return;
  }
  const firstName = currentUser.displayName
    ? currentUser.displayName.split(" ")[0]
    : "";
  $("#user-firstname").text(firstName);
  const recipe = MODEL.getRecipeById(recipeId);
  if (recipe && recipe.ownerId === currentUser.uid) {
    $("#edit-recipe-id").val(recipe.id);
    $("#recipe-name").val(recipe.name);
    $("#recipe-description").val(recipe.description);
    $("#recipe-time").val(recipe.time);
    $("#recipe-size").val(recipe.servings);
    if (recipe.imageData) {
      $("#image-preview").attr("src", recipe.imageData).show();
    }
    let ingredientsHtml = recipe.ingredients
      .map(
        (ing, i) =>
          `<input name="ingred${i}" class="ingredient-input" type="text" value="${ing}" required />`
      )
      .join("");
    $("#ingredients-list").html(ingredientsHtml);
    let instructionsHtml = recipe.instructions
      .map(
        (ins, i) =>
          `<input name="instruc${i}" class="instruction-input" type="text" value="${ins}" required />`
      )
      .join("");
    $("#instructions-list").html(instructionsHtml);
  } else {
    alert("You are not authorized to edit this recipe.");
    window.location.hash = "your-recipes";
  }
}

function initListeners() {
  $("#hamburger-icon")
    .off("click")
    .on("click", (e) => {
      e.preventDefault();
      $(".mobile-nav, header, #app, footer").toggleClass(
        "mobile-screen mobile-nav-open mobile-header-open"
      );
    });
  $(".login-nav a, .login-mobile-nav")
    .off("click")
    .on("click", (e) => {
      if (currentUser) {
        e.preventDefault();
        signOut(auth);
        window.location.hash = "home";
      }
    });
}

function initAuthListeners() {
  const $app = $("#app");
  $app.off("click", "#login-btn").on("click", "#login-btn", () => {
    let email = $("#login-email").val();
    let password = $("#login-password").val();
    signInWithEmailAndPassword(auth, email, password).catch((error) =>
      alert(error.message)
    );
  });
  $app.off("click", "#signup-btn").on("click", "#signup-btn", () => {
    let email = $("#signup-email").val();
    let password = $("#signup-password").val();
    let fName = $("#signup-fname").val();
    let lName = $("#signup-lname").val();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(userCredential.user, {
          displayName: `${fName} ${lName}`,
        });
      })
      .catch((error) => alert(error.message));
  });
  $app
    .off("change", "#recipe-image")
    .on("change", "#recipe-image", function () {
      if (this.files && this.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
          $("#image-preview").attr("src", e.target.result).show();
        };
        reader.readAsDataURL(this.files[0]);
      }
    });
  $app
    .off("submit", "#create-recipe-form")
    .on("submit", "#create-recipe-form", (e) => {
      e.preventDefault();
      $("#submit-btn").prop("disabled", true).val("Creating...");
      const newRecipe = {
        ownerId: currentUser.uid,
        name: $("#recipe-name").val(),
        description: $("#recipe-description").val(),
        time: $("#recipe-time").val(),
        servings: $("#recipe-size").val(),
        imageData: $("#image-preview").attr("src"),
        ingredients: $(".ingredient-input")
          .map((_, el) => $(el).val())
          .get()
          .filter((val) => val),
        instructions: $(".instruction-input")
          .map((_, el) => $(el).val())
          .get()
          .filter((val) => val),
      };
      MODEL.createRecipe(newRecipe);
      alert("Recipe created successfully!");
      window.location.hash = "your-recipes";
    });
  $app
    .off("click", ".delete-recipe-btn")
    .on("click", ".delete-recipe-btn", (e) => {
      const recipeId = $(e.currentTarget).data("id").toString();
      if (confirm("Are you sure you want to delete this recipe?")) {
        MODEL.deleteRecipe(recipeId);
        loadUserRecipes();
      }
    });
  $app.off("click", ".edit-recipe-btn").on("click", ".edit-recipe-btn", (e) => {
    const recipeId = $(e.currentTarget).data("id");
    window.location.hash = `edit-recipe?id=${recipeId}`;
  });
  $app
    .off("submit", "#edit-recipe-form")
    .on("submit", "#edit-recipe-form", (e) => {
      e.preventDefault();
      $("#submit-btn").prop("disabled", true).val("Updating...");
      const recipeId = $("#edit-recipe-id").val();
      const updatedData = {
        name: $("#recipe-name").val(),
        description: $("#recipe-description").val(),
        time: $("#recipe-time").val(),
        servings: $("#recipe-size").val(),
        imageData: $("#image-preview").attr("src"),
        ingredients: $(".ingredient-input")
          .map((_, el) => $(el).val())
          .get()
          .filter((val) => val),
        instructions: $(".instruction-input")
          .map((_, el) => $(el).val())
          .get()
          .filter((val) => val),
      };
      const success = MODEL.updateRecipe(recipeId, updatedData);
      if (success) {
        alert("Recipe updated successfully!");
        window.location.hash = `recipe-view?id=${recipeId}`;
      } else {
        alert("Failed to update recipe.");
        $("#submit-btn").prop("disabled", false).val("Update Recipe");
      }
    });
  $app.off("click", ".add-ingred-btn").on("click", ".add-ingred-btn", () => {
    $("#ingredients-list").append(
      `<input class="ingredient-input" type="text" placeholder="Another Ingredient" />`
    );
  });
  $app.off("click", ".add-instruc-btn").on("click", ".add-instruc-btn", () => {
    $("#instructions-list").append(
      `<input class="instruction-input" type="text" placeholder="Another Instruction" />`
    );
  });
}

function initRouting() {
  $(window).on("hashchange", route);
  route();
}
$(document).ready(function () {
  initRouting();
  initListeners();
  initAuthListeners();
});
