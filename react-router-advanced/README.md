Advanced Routing in React with React Router
Objective

Implement advanced routing techniques in a React application using React Router.
The project demonstrates nested routes, protected routes, and dynamic routing to manage complex navigation and access control in React applications.

Project Setup

1. Create the project using Vite

npm create vite@latest react-router-advanced -- --template react
cd react-router-advanced


2. Install dependencies

npm install react-router-dom


3. Start the development server

npm run dev

File Structure
react-router-advanced/
│
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── components/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Profile.jsx
│   │   ├── ProfileDetails.jsx
│   │   ├── ProfileSettings.jsx
│   │   ├── BlogPost.jsx
│   │   └── ProtectedRoute.jsx
│
└── index.html

Features Implemented
1. Nested Routes

Implemented under the Profile component.

ProfileDetails and ProfileSettings are accessible via /profile/details and /profile/settings.

Nested routes are rendered using the <Outlet /> component.

2. Dynamic Routing

Implemented with the BlogPost component.

Each post page uses a dynamic URL such as /posts/:postId.

The post ID is accessed using React Router’s useParams hook.

3. Protected Routes

Implemented in ProtectedRoute.jsx.

Routes such as /profile are only accessible when the user is authenticated.

If not authenticated, the user is redirected to the home page.

Example Routes and Expected Output
Route	Description	Output
/	Home page	Displays navigation links
/about	About page	Shows information about the project
/profile	Protected route	Redirects to / if unauthenticated
/profile/details	Nested route	Displays “Profile Details” section
/profile/settings	Nested route	Displays “Profile Settings” section
/posts/5	Dynamic route	Displays “Blog Post ID: 5”
Protected Route Logic
const isAuthenticated = false;

if (!isAuthenticated) {
  return <Navigate to="/" replace />;
}


Change isAuthenticated to true in ProtectedRoute.jsx to access the protected pages.

Testing and Evaluation

Check functionality

Navigation between routes works correctly.

Nested routes render under the Profile component.

Dynamic routes update based on the URL.

Protected routes block unauthenticated access and redirect to home.

Tools

Use browser navigation and React Developer Tools to verify route behavior.

Confirm URL updates correspond to displayed content.

Key Concepts Demonstrated

React Router v6 routing architecture.

Nested routing with <Outlet />.

Dynamic route parameters with useParams().

Route protection and redirection using <Navigate />.