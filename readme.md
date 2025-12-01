# Jungle Cook

A modern web application for sharing and discovering plant-based recipes. Jungle Cook allows users to create accounts, post their own recipes, and explore recipes from the community.

## Link to Web 4

https://in-info-web4.luddy.indianapolis.iu.edu/~palmeroa/jungle-cook-final-deploy/

## Features

- **User Authentication**: Secure login and signup functionality powered by Firebase
- **Recipe Management**: Create, view, edit, and manage your own recipes
- **Community Recipes**: Browse and view recipes shared by other users
- **Responsive Design**: Mobile-friendly interface built with modern CSS and SASS
- **Dynamic Routing**: Single-page application with hash-based routing

## Project Structure

```
jungleCook/
├── index.html              # Main HTML entry point
├── package.json            # Project dependencies and scripts
├── vite.config.js          # Vite build configuration
├── readme.md               # This file
│
├── public/                 # Static assets
│   ├── fonts/
│   │   └── Lato/          # Lato font family for typography
│   ├── images/            # Static image assets
│   └── pages/             # HTML page templates
│       ├── account.html
│       ├── create-recipe.html
│       ├── edit-recipe.html
│       ├── home.html
│       ├── recipe-view.html
│       ├── recipes.html
│       └── your-recipes.html
│
└── src/                    # Source code
    ├── style.css          # Compiled CSS (generated from SASS)
    ├── app/
    │   ├── app.js         # Main application logic and routing
    │   └── view.js        # View management and DOM manipulation
    ├── lib/
    │   └── jquery-3.7.1.min.js  # jQuery library
    ├── model/
    │   └── model.js       # Data model and business logic
    └── sass/              # SASS stylesheets
        ├── styles.scss    # Main SASS entry point
        ├── account.scss
        ├── create-recipe.scss
        ├── edit-recipe.scss
        ├── fonts.scss
        ├── footer.scss
        ├── home.scss
        ├── nav.scss
        ├── recipe-view.scss
        ├── recipes.scss
        ├── structure.scss
        ├── your-recipes.scss
        └── ... (more style files)
```

## Technology Stack

- **Frontend**: HTML5, CSS3, SASS, JavaScript (ES6+)
- **Build Tool**: Vite
- **Backend Services**: Firebase (Authentication & Firestore)
- **Libraries**:
  - jQuery 3.7.1
  - Firebase 12.5.0
- **Styling**: SASS with compiled CSS

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/AP-1132/jungleCook-HW7.git
cd jungleCook
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment variables:
   - Firebase configuration is already included in `src/app/app.js`

### Development

To start the development server with hot module reloading:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port Vite specifies).

To compile SASS files in watch mode:

```bash
npm run compile:sass
```

This command watches for changes in `src/sass/styles.scss` and automatically compiles to `src/style.css`.

### Building for Production

To build the project for production:

```bash
npm run build
```

This creates an optimized build in the `dist/` directory.

### Previewing Production Build

To preview the production build locally:

```bash
npm run preview
```

## Usage

### Navigation

The application uses hash-based routing. Available pages include:

- `#home` - Home page with featured recipes
- `#recipes` - Browse all community recipes
- `#account` - User login and registration
- `#create-recipe` - Create a new recipe (requires login)
- `#your-recipes` - View your created recipes (requires login)
- `#recipe-view?id={recipeId}` - View a specific recipe
- `#edit-recipe?id={recipeId}` - Edit your recipe

### Authentication

- Users must create an account or log in to access recipe creation and management features
- Authentication is handled via Firebase Authentication
- User profile information is displayed on the account page

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run compile:sass` - Compile SASS to CSS with watch mode

## Styling

The project uses SASS for styling with a modular structure:

- **fonts.scss** - Custom font definitions
- **structure.scss** - Layout and structural styles
- **nav.scss** - Navigation styles
- **home.scss** - Home page styles
- **recipes.scss** - Recipes listing styles
- **recipe-view.scss** - Single recipe view styles
- **create-recipe.scss** - Recipe creation form styles
- **edit-recipe.scss** - Recipe editing form styles
- **account.scss** - Authentication and account page styles
- **footer.scss** - Footer styles

Run `npm run compile:sass` to watch SASS files for changes and automatically compile them to CSS.

## Deployment

The project is configured for deployment with a base path of `/~palmeroa/jungle-cook-deploy/` (see `vite.config.js`). Modify this path in `vite.config.js` if deploying to a different location.

## Firebase Configuration

Firebase is integrated for user authentication and data storage. The configuration is included in `src/app/app.js`:

- **Project ID**: mobile-class-2b641
- **Authentication**: Email/password authentication enabled
- **Firestore**: Used for storing recipes and user data

## File Organization

### App Structure

- **app.js**: Main application entry point with routing logic and Firebase initialization
- **view.js**: View layer managing DOM updates and user interactions
- **model.js**: Data model layer handling business logic and Firebase interactions

### Pages

Each page in `public/pages/` corresponds to a route and contains the HTML structure for that page.

## Browser Support

This project supports all modern browsers that support ES6 JavaScript and CSS3.

## License

This project is part of the N315 curriculum at [Your School Name].

## Author

Created by Alonso Palmero

---

For questions or issues, please contact the project maintainer or open an issue on the repository.
