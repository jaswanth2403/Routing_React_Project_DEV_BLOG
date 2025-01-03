# Blog Application with React Router

This is a React-based blog application that demonstrates the use of `react-router-dom` for client-side routing. The app includes pages for listing blogs, viewing blog details, and general informational pages like "About" and "Contact."

## Features

- **Dynamic Routing**: Navigate between Home, About, Contact, and Blog Details pages.
- **404 Handling**: Displays a `NotFound` component for undefined routes.
- **Modular Components**: Organized and reusable components for scalability.
- **User-Friendly Navigation**: A consistent `Header` component for seamless navigation.

## Pages

- **Home (`/`)**: Displays a list of blogs.
- **About (`/about`)**: Contains information about the application.
- **Contact (`/contact`)**: A page to reach out to the app's developers or admins.
- **Blog Details (`/blogs/:id`)**: Displays details of a specific blog based on its ID.
- **404 Page (`*`)**: Renders when a user navigates to an undefined route.

## Technologies Used

- **Frontend**: React
- **Routing**: React Router DOM
- **Styling**: CSS
- **Language**: JavaScript (ES6+)

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/blog-app-router.git

Navigate to the project directory:
```bash
cd blog-app-router
```
Install dependencies:
```bash
npm install
```
Start the development server:
```bash
npm start
```
Open the application in your browser:
```bash
http://localhost:3000
```

Project Structure
```bash
blog-app-router/
├── public/                # Public assets and HTML template
├── src/
│   ├── components/        # Reusable React components
│   │   ├── Header.js      # Navigation bar
│   │   ├── Contact.js     # Contact page
│   │   ├── About.js       # About page
│   │   ├── BlogsList.js   # Displays the list of blogs
│   │   ├── BlogItemDetailsWrapper.js  # Dynamic blog details page
│   │   ├── NotFound.js    # Fallback for undefined routes
│   ├── App.js             # Main application component
│   ├── index.js           # Application entry point
├── package.json           # Project dependencies and scripts
```
