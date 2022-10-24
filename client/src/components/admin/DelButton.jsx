import React from 'react'

const DelButton = ({ id, click }) => {
    return (
        <div>
            <button className="btn btn-danger"
                onClick={() => { click(id) }}
            >
                Delete
            </button>
        </div>
    )
}

export default DelButton