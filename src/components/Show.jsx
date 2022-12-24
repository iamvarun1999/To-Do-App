import React from 'react'

export default function Show(props) {
    return (
        <>
            <div className="row my-2 ">
                <div className="col-md-7">
                    <h6>{props.task}</h6>
                </div>
                <div className="col-md-5">
                    <button className='btn btn-primary w-50' onClick={()=>props.delete(props.id)}>Delete</button>
                </div>
            </div>

        </>
    )
}
