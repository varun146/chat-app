import React from 'react'

const GenderCheckbox = ({ onCheckBoxChange, selectedGender }) => {
  return (
    <div className='flex gap-2'>
      <div className="form-control">
        <label className="flex gap-2 label cursor-pointer">
          <span className="label-text">Male</span>
          <input type="checkbox" defaultChecked className="checkbox"
            checked={selectedGender === "male"}
            onChange={() => onCheckBoxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label className="flex gap-2 label cursor-pointer">
          <span className="label-text">Female</span>
          <input type="checkbox" defaultChecked className="checkbox"
            checked={selectedGender === "female"}
            onChange={() => onCheckBoxChange("female")}
          />
        </label>
      </div>
    </div>
  )
}

export default GenderCheckbox

// const GenderCheckbox = () => {
//   return (
//     <div className='flex gap-2'>
//       <div className="form-control">
//         <label className="flex gap-2 label cursor-pointer">
//           <span className="label-text">Male</span>
//           <input type="checkbox" defaultChecked className="checkbox" />
//         </label>
//       </div>
//       <div className="form-control">
//         <label className="flex gap-2 label cursor-pointer">
//           <span className="label-text">Female</span>
//           <input type="checkbox" defaultChecked className="checkbox" />
//         </label>
//       </div>
//     </div>
//   )
// }
//
