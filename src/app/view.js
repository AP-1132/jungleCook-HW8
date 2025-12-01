export const homePage = `
<div class="home-background">
  <div class="home-orbs">
    <div class="little-circle">
      <p>Want to be a Jungle Cook? Go ahead and the kitchen is yours!</p>
    </div>
    <div class="big-circle">
      <h1>The Jungle Cook</h1>
      <p>
        The home to various recipes of your choice. Add your own recipe today
      </p>
    </div>
  </div>
</div>
`;

export const accountPage = `
<div class="account-content">
  <div class="auth-content hidden">
    <h1>Hello, <span id="username-display">Welcome to Jungle Cook!</span></h1>
    <div class="signOut-button" id="signOut-btn">Sign Out</div>
  </div>
  <div class="login-section">
    <div class="login-holder">
      <h1>Login Here!</h1>
      <input id="login-email" type="text" placeholder="Email Address:" />
      <input id="login-password" type="password" placeholder="Password:" />
      <div id="login-btn" class="login-button">Login</div>
    </div>
  </div>
  <div class="sign-up-section">
    <div class="sign-up-holder">
      <p>don't have an account?</p>
      <h1>Sign Up!</h1>
      <input id="signup-fname" type="text" placeholder="First Name:" />
      <input id="signup-lname" type="text" placeholder="Last Name:" />
      <input id="signup-email" type="text" placeholder="Email Address:" />
      <input id="signup-password" type="password" placeholder="Password:" />
      <div id="signup-btn" class="sign-up-button">Sign Up</div>
    </div>
  </div>
</div>
`;

export const createRecipePage = `
<div class="create-recipe">
  <h1>Hey <span id="user-firstname"></span>, create your recipe!</h1>
  <form id="create-recipe-form">
    <label for="recipe-image">Recipe Image:</label>
    <input type="file" id="recipe-image" accept="image/*" />
    <img id="image-preview" src="#" alt="Image Preview" style="display: none; max-width: 200px; margin-top: 10px;"/>
    <input name="recipe-name" id="recipe-name" type="text" placeholder="Recipe Name" required />
    <input name="recipe-description" id="recipe-description" type="text" placeholder="Recipe Description" required />
    <input name="recipe-time" id="recipe-time" type="text" placeholder="Recipe Total Time" required />
    <input name="recipe-size" id="recipe-size" type="text" placeholder="Recipe Serving Size" required />
    <h3>Enter Ingredients:</h3>
    <div class="add-ingred" id="ingredients-list">
      <input name="ingred0" class="ingredient-input" type="text" placeholder="Ingredient #1" required />
    </div>
    <div class="add-ingred-btn">+</div>
    <h3>Enter Instructions:</h3>
    <div class="add-instruc" id="instructions-list">
      <input name="instruc0" class="instruction-input" type="text" placeholder="Instruction #1" required />
    </div>
    <div class="add-instruc-btn">+</div>
    <input id="submit-btn" class="submit-btn" type="submit" value="Create Recipe" />
  </form>
</div>
`;

export const yourRecipesPage = `
<div class="recipes-background">
  <div class="recipes-content">
    <h1 class="browse-title">Hey <span id="user-firstname"></span>, here are your recipes!</h1>
    <div class="recipes-holder" id="your-recipes-holder">
    </div>
  </div>
</div>
`;

export const recipeViewPage = `
<div class="recipe-view">
  <div class="recipe-header">
    <div class="recipe-view-img-holder">
      <div class="vert-title" id="recipe-view-title-vert"></div>
      <div class="recipe-view-img"></div>
    </div>
    <div class="recipe-view-text-holder">
      <h1 class="rvt-title" id="recipe-view-title"></h1>
      <h1>Description:</h1>
      <p id="recipe-view-desc"></p>
      <h1>Total Time:</h1>
      <p id="recipe-view-time"></p>
      <h1>Servings:</h1>
      <p id="recipe-view-servings"></p>
    </div>
  </div>
  <div class="recipe-data-holder">
    <div class="ingredients-holder">
      <h1>Ingredients:</h1>
      <ul id="recipe-view-ingredients"></ul>
    </div>
    <div class="instructions-holder">
      <h1>Instructions:</h1>
      <ol id="recipe-view-instructions"></ol>
    </div>
  </div>
  <div id="edit-recipe-btn-container"></div>
</div>
`;

export const editRecipePage = `
<div class="edit-recipe">
  <h1>Hey <span id="user-firstname"></span>, edit your recipe!</h1>
  <form id="edit-recipe-form">
    <input type="hidden" id="edit-recipe-id" />
    <label for="recipe-image">Recipe Image:</label>
    <input type="file" id="recipe-image" accept="image/*" />
    <img id="image-preview" src="#" alt="Image Preview" style="display: none; max-width: 200px; margin-top: 10px;"/>
    <input name="recipe-name" id="recipe-name" type="text" placeholder="Recipe Name" required />
    <input name="recipe-description" id="recipe-description" type="text" placeholder="Recipe Description" required />
    <input name="recipe-time" id="recipe-time" type="text" placeholder="Recipe Total Time" required />
    <input name="recipe-size" id="recipe-size" type="text" placeholder="Recipe Serving Size" required />
    <h3>Enter Ingredients:</h3>
    <div class="add-ingred" id="ingredients-list"></div>
    <div class="add-ingred-btn">+</div>
    <h3>Enter Instructions:</h3>
    <div class="add-instruc" id="instructions-list"></div>
    <div class="add-instruc-btn">+</div>
    <input id="submit-btn" class="submit-btn" type="submit" value="Update Recipe" />
  </form>
</div>
`;

export const recipesPage = `
<div class="recipes-background">
  <div class="recipes-content">
    <h1 class="browse-title">Recipes: Try some today!</h1>
    <div class="recipes-holder">
      <div class="recipe">
        <div class="recipe-img-pizza"></div>
        <div class="recipe-text-content">
          <h1>Supreme Pizza</h1>
          <p class="recipe-desc">
            Make pizza night super duper out of this world with homemade pizza.
            This recipe is supreme with vegetables and two types of meat. Yum!
          </p>
          <div class="time"><p>1h 24min</p></div>
          <div class="servings"><p>4 servings</p></div>
        </div>
      </div>
      <div class="recipe">
        <div class="recipe-img-burger"></div>
        <div class="recipe-text-content">
          <h1>Classic Burger</h1>
          <p class="recipe-desc">
            Sink your teeth into a delicious restaurant-style, hamburger recipe
            made from lean beef. Skip the prepackaged patties and take the extra
            time to craft up your own, and that little extra effort will be
            worth it.
          </p>
          <div class="time"><p>30min</p></div>
          <div class="servings"><p>4 servings</p></div>
        </div>
      </div>
      <div class="recipe">
        <div class="recipe-img-biryani"></div>
        <div class="recipe-text-content">
          <h1>Chicken Biryani</h1>
          <p class="recipe-desc">
            Chicken Biryani is a bold and flavorful Indian dish with crazy
            tender bites of chicken with bell peppers in a deliciously spiced
            and fragrant rice.
          </p>
          <div class="time"><p>1h 15min</p></div>
          <div class="servings"><p>6 servings</p></div>
        </div>
      </div>
      <div class="recipe">
        <div class="recipe-img-chowmein"></div>
        <div class="recipe-text-content">
          <h1>Ch. Chow Mein</h1>
          <p class="recipe-desc">
            A great Chow Mein comes down to the sauce - it takes more than just
            soy sauce and sugar! Jam packed with a surprising amount of hidden
            vegetables, customize this Chicken Chow Mein recipe using your
            protein of choice!
          </p>
          <div class="time"><p>20min</p></div>
          <div class="servings"><p>4 servings</p></div>
        </div>
      </div>
    </div>
  </div>
</div>
`;
