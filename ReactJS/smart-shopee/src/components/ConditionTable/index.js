import React from 'react';
import { validFactorTypes } from '../Form';

// const findFactoryValue = (factorValue) => {
//   for (let index = 0; index < validFactorTypes.length; index++) {
//     if (validFactorTypes[index].value === factorValue) {
//       return validFactorTypes[index].label
//     }
//   }
// }

export const ConditionTable = ({ factors = [], onDelete, onEdit }) => {

  // return (

  //   <div className="relative overflow-x-auto">
  //     <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
  //       <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
  //         <tr>
  //           <th scope="col" className="px-6 py-3">
  //             Product name
  //           </th>
  //           <th scope="col" className="px-6 py-3">
  //             Color
  //           </th>
  //           <th scope="col" className="px-6 py-3">
  //             Category
  //           </th>
  //           <th scope="col" className="px-6 py-3">
  //             Price
  //           </th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
  //           <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
  //             Apple MacBook Pro 17"
  //           </th>
  //           <td className="px-6 py-4">
  //             Silver
  //           </td>
  //           <td className="px-6 py-4">
  //             Laptop
  //           </td>
  //           <td className="px-6 py-4">
  //             $2999
  //           </td>
  //         </tr>
  //         <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
  //           <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
  //             Microsoft Surface Pro
  //           </th>
  //           <td className="px-6 py-4">
  //             White
  //           </td>
  //           <td className="px-6 py-4">
  //             Laptop PC
  //           </td>
  //           <td className="px-6 py-4">
  //             $1999
  //           </td>
  //         </tr>
  //         <tr className="bg-white dark:bg-gray-800">
  //           <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
  //             Magic Mouse 2
  //           </th>
  //           <td className="px-6 py-4">
  //             Black
  //           </td>
  //           <td className="px-6 py-4">
  //             Accessories
  //           </td>
  //           <td className="px-6 py-4">
  //             $99
  //           </td>
  //         </tr>
  //       </tbody>
  //     </table>
  //   </div>

  // )

  return factors.length > 0 && (
    <div className="result ">
      <h2>Submitted Data</h2>













      {/* Testing */}
      <div>
        <label for="country" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
          Country
        </label>
        <div className="mt-1 sm:mt-0 sm:col-span-2">
          <select id="country" name="country" autocomplete="country-name" className="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>
        </div>
      </div>
      {/* End of Testing */}






      <table className="w-full text-sm text-left dark:text-gray-400 ">
        <tbody>
          <tr>
            <th scope="col" className="px-6 py-4 bg-slate-400">Name</th>
            <th scope="col" className="px-6 py-4 bg-slate-400">Factor type</th>
            <th scope="col" className="px-6 py-4 bg-slate-400">Factor value type</th>
            <th scope="col" className="px-6 py-4 bg-slate-400">Weight</th>
            <th scope="col" className="px-6 py-4 bg-slate-400">Actions</th>
          </tr>

          {factors.map((data, index) => (
            <tr className="border-b dark:border-neutral-500" key={index}>
              <td className="whitespace-nowrap px-6 py-4 ">{data.name}</td>
              <td className="whitespace-nowrap px-6 py-4 ">
                {/* {findFactoryValue(data.factorType)} */}
                {validFactorTypes.find((factor) => factor.value === "impact").label}
              </td>
              <td className="whitespace-nowrap px-6 py-4 ">{data.factorValueType}</td>
              <td className="whitespace-nowrap px-6 py-4 ">{data.weight}%</td>
              <td className="whitespace-nowrap px-6 py-4 ">
                <button onClick={() => onDelete(index)}>
                  <svg className="w-6 h-6 text-red-500" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 20">
                    <path fill="currentColor" d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z" />
                  </svg>
                </button>
                <button onClick={() => onEdit(index, data)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                  </svg>

                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
