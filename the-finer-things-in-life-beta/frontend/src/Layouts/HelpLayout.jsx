import { NavLink, Outlet } from "react-router-dom"
const HelpLayout = () => {
    return (
      <div className="help-layout">
        <h2 className="g">Website Help</h2>
        <p>
       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident natus, possimus obcaecati hic cumque rerum officia aliquam, aliquid vero nemo praesentium velit! Aut placeat, modi accusantium neque accusamus culpa cupiditate iusto ducimus alias laboriosam provident vero quas optio aspernatur temporibus fuga est pariatur nostrum doloremque quibusdam iure dolorem molestias. Repudiandae.
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