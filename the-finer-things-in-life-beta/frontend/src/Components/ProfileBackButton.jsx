import { Link } from 'react-router-dom'

const ProfileBackButton = ({ destination = '/profile'}) =>{

    return (
        <div className='flex p-4'>
            <Link
            to={destination}
            className='bg-red-600 text-white px-4 py-1 rounded-lg w-fit' 
            >
             <h3 className='text-2xl'>🔙</h3>   
            </Link>
        </div>
    )
}

export default ProfileBackButton