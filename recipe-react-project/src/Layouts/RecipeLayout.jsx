import { Outlet } from "react-router-dom"

const RecipeLayout =()=>{
    return(
        <div className="recipes-layout">
            <Outlet />
        </div>
        
    )
}

export default RecipeLayout