# project demo link

https://mbsjokesapp.netlify.app

# Dependencies Used

 * This project was bootstrapped with create-react-app (react,react-dom,react-scripts etc;)
 * react-router-dom
 * react-icons
 * bootstrap

# Routes in the Application
  * Login Route (/login): It consists of a dummy login form with form-level-validations
  * HomeRoute (/): It consists of Header, List of Jokes and Footer

# Assumptions Made
 Used javascript regular expression (RegExp) for validation
 username - It must be between 5 to 10 characters and only alphabets are allowed.
 password - It must be between 8 to 15 characters and must include atleast one digit ,one letter,and one special character from these !,@,#,$,%
 (Sample credentials : username - bhavani, password - shankar@7) 
 Since this is a dummy login form user can give any username and password that satisfies form level validations.
 (we can change the regular expression as per our requirement)

 # Project Description

 Unauthenticated User cannot access other routes in the application and loggedIn user will be redirected to 
 the home route when tried to access login route. This is done by storing username  and checking whether key exists in local storage.
 If user tries to get into an non-existing route, he will be taken to Error page where error details are displayed and a link to navigate to home is avaiable.
 When users clicks on Login button, form level validations will be performed and if everything is fine,he will be navigated to Home page, otherwise corresponding errors will be displayed.
 In home page, based on API response, different views will be shown (Initially, a shimmer will be displayed when it is in loading state and when response is success list of jokes are displayed and a failure view is also maintained)
 From the API data obtained , jokes are displayed.
 Jokes Card consist of category of joke, flags (if any (true)), if safe value is false then card background color is pinkish(bg-danger-subtle) and if there are any flags, joke text color is orange(text-warning).

 # Key Concepts Used :

 react18 , react-router v6 , bootstrap V5.3
 Functional components , Hooks
 react : useState, useEffect
 react-router-dom : createBrowserRouter, RouterProvider, Link, Navigate, useNavigate, Outlet
 conditional rendering : if-else , ternary operators , logical && operator
 optional chaining
 shimmer
 rest api - fetch 
 wrapper component (protected route)
 cloudinary image cdn's ,  react-icons
responsive web design with bootstrap grid system
rendering based on api response

 






