import React from 'react'
import{ Link } from 'react-router-dom'
import BackToTop from '../../Components/BackToTop'

const MerchandisesTable = ({ merchandises })=> {
    return (
      <div className='flex justify-center'>
        <table className="max-md:w-[350px]  border-separate w-fit border-spacing-2">
        <thead>
          <tr>
            <th className="border text-center border-slate-600 rounded-md">No</th>
            <th className="border text-center border-slate-600 rounded-md">Name</th>
            <th className="border text-center border-slate-600 rounded-md max-sm:hidden">
              Category
            </th>
            <th className="border text-center border-slate-600 rounded-md max-sm:hidden">
              Price
            </th>
            <th className="border text-center border-slate-600 rounded-md">Operation</th>
          </tr>
        </thead>
        <tbody>
          {merchandises.map((merchandise, index) => (
            <tr key={merchandise._id} className="h-8">
              <td className="border border-slate-700 rounded-md text-center">
                {index + 1}
              </td>
              <td className="border border-slate-700 rounded-md text-center">
                {merchandise.name}
              </td>
              <td className="border border-slate-700 rounded-md text-center max-sm:hidden">
                {merchandise.category}
              </td>
              <td className="border border-slate-700 rounded-md text-center max-sm:hidden">$
                {merchandise.price}
              </td>
              <td className=" border-slate-700 rounded-md text-center">
                <div className="flex  justify-center gap-2">
                  <Link to={`merchandises/details/${merchandise._id}`}>
                  <h3 id='info' className="text-2xl">ℹ️ Info</h3>
                  </Link>
                  <Link to={`merchandises/edit/${merchandise._id}`}>
                  <h3 id='hand' className="text-2xl">✍️ Edit</h3>
                  </Link>
                  <Link to={`merchandises/delete/${merchandise._id}`}>
                  <h3 id='trash' className="text-2xl">🗑️ Delete</h3>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <BackToTop />
      </div>
    )
}

export default MerchandisesTable