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
              {/* TODO: Check this line */}
              <td className="whitespace-nowrap px-6 py-4 ">{data.factorValueType}</td>
              <td className="whitespace-nowrap px-6 py-4 ">{data.weight}%</td>
              <td className="whitespace-nowrap px-6 py-4 ">
                <button onClick={() => onDelete(index)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512">
                    <path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
                  </svg>
                </button>
                &ensp;
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
