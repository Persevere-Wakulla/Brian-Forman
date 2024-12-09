import { Outlet, useOutletContext } from "react-router-dom";

const ProfileLayout = () => {
  const [adminUser, currentUserProfile, setCurrentUserProfile, isLoggedIn] = useOutletContext()
  return (
    <div>
      <Outlet context={[adminUser, currentUserProfile, setCurrentUserProfile, isLoggedIn]}/>
    </div>
  );
};
export default ProfileLayout;
