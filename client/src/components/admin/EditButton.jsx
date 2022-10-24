import React from 'react'

const EditButton = ({ click, singleData }) => {
  return (
    <div>
        <button className="btn btn-primary"  onClick={() => {click(singleData)}}>
            Edit
        </button>
    </div>
  )
}

export default EditButton