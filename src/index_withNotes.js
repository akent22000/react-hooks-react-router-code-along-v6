//Reference https://react.dev/reference/react-dom/client/createRoot

//React Router: a routing library for React that allows us to link to specific URLs and conditionally render components depending on which URL is displayed.

//React Router enables client-side routing
//Client-side routing renders different sections of the webpage instead of making requests to our server for a new webpage
//Client-side routing renders a new component, and client-side JavaScript requests the data we want to display in that component
//This is essential for routing in any React application, as we only have a single HTML file to serve — that's the nature of an SPA.

//The index.html file displays the Single Page App by including a div with the id of root

//The index.js file imports ReactDOM from react library
//The index.js file imports React Router from react library
//The index.js file decalre router as a function (const router =)
//The index.js file calls the React Router function createBrowserRouter
//The index.js file defines the router path extension (what path does it need to use to access the section it needs)
//The index.js file defines the section that will be displayed in the DOM (in the single index.html page)
//The index.js file declares const root
//The index.js file creates the index.js root
//The index.js file calls the html element div by id "root"
//The index.js file renders the decalred router function


//STEPS
//1 - Import react and react library hooks
//
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./sections/Home";

//First, call url router react function
//url = const router = react createBrowserRouter

//Next add url path (when this url link is clicked, the function navigates to the defined element directory using the "/" symbol

//where can the function file path  the in the  directory)
//Add element, (what section do we want to display on the url page when the element is selected) 


//pass <Home /> section  array of objects from server (db.json)
//doing this will render the home section html elements
//
//as www.something.com/Home
//opens up section with built in component templates
//adds a url to end of app page url link

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes.js";

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
