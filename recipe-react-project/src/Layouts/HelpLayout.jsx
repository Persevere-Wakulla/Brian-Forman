import { NavLink, Outlet } from "react-router-dom";

const HelpLayout = () => {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>
       If you have any questions about our recipes click the FAQ button below. If you have any new recipes you want to share hit the contact us button below then leave your email address and leave us a comment.
      </p>
      <nav>
        <NavLink to="faq">FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};
export default HelpLayout;