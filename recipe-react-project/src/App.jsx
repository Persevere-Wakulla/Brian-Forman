
import './Styles/App.css'
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
//Pages
import Home from "../Home";
import About from '../About';
import FAQ from "./Pages/Help/FAQ"
import Contact, { contactAction } from "./Pages/Help/Contact";
import RecipeDetails, { recipesDetailsLoader} from "./Pages/Recipes/RecipeDetails";
import Recipes, { recipesLoader } from "./Pages/Recipes/Recipes"
//LayOuts
import RootLayout from './Layouts/RootLayout';
import RecipeLayout from "./Layouts/RecipeLayout";
import HelpLayout from './Layouts/HelpLayout';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<FAQ />} />
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>

      <Route path="recipes" 
      element={<RecipeLayout />}
     
      >
        <Route 
        index 
        element={<Recipes />} 
        loader={recipesLoader}
       
         />
        <Route 
        path=":id"
        element={<RecipeDetails/>}
        loader={recipesDetailsLoader}
        
         />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}






export default App
