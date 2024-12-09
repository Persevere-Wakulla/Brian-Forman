import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import FAQ from "./pages/Help/FAQ";
import Contact, { contactAction } from "./pages/Help/Contact";
import Products from "./pages/Merchandise/Products";
import CreateMerchandise from "./pages/Merchandise/CreateMerchandises";
import ShowMerchandise from "./pages/Merchandise/ShowMerchandise";
import EditMerchandise from "./pages/Merchandise/EditMerchandise";
import DeleteMerchandise from "./pages/Merchandise/DeleteMerchandise";
import CreateUserProfile from "./pages/Client/CreateUserProfile";
import UserProfile from "./pages/Client/UserProfile";

import UserCart from "./pages/Cart/UserCart";
import CheckOut from "./pages/Cart/CheckOut";
import EditUserProfile from "./pages/Client/EditUserProfile";
import DeleteUserProfile from "./pages/Client/DeleteUserProfile";

// Layouts
import RootLayout from "./Layouts/RootLayout";
import ProductLayout from "./Layouts/ProductsLayout";
import HelpLayout from "./Layouts/HelpLayout";
import ProfileLayout from "./Layouts/ProfileLayout";
import UserCartLayout from "./Layouts/UserCartLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="profile" element={<ProfileLayout />}>
        <Route index element={<UserProfile />} />
        <Route path="createUser" element={<CreateUserProfile />} />
        <Route path="profile/editUser/:id" element={<EditUserProfile />} />
        <Route path="profile/deleteUser/:id" element={<DeleteUserProfile />} />
      </Route>

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<FAQ />} />
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>

      <Route path="products" element={<ProductLayout />}>
        <Route index element={<Products />} />
        <Route path="merchandises/create" element={<CreateMerchandise />} />
        <Route path="merchandises/details/:id" element={<ShowMerchandise />} />
        <Route path="merchandises/edit/:id" element={<EditMerchandise />} />
        <Route path="merchandises/delete/:id" element={<DeleteMerchandise />} />
      </Route>

      <Route path="cart" element={<UserCartLayout />}>
        <Route path="usercart" element={<UserCart />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
