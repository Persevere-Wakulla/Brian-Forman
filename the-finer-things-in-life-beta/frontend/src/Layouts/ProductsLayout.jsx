import { Outlet, useOutletContext } from "react-router-dom"


const ProductsLayout =()=>{
    const [adminUser, currentUserProfile, setCurrentUserProfile, isLoggedIn] = useOutletContext()
    return(
        <div className="products-layout">
            <Outlet context={[adminUser, currentUserProfile, setCurrentUserProfile, isLoggedIn]} />
        </div>
        
    )
}

export default ProductsLayout