import React, { useState } from 'react'
import Show from './Show'

export default function Header() {
  var [data, setData] = useState("")
  var [list, setList] = useState([])


  const getData = (e) => {
    setData(e.target.value)
  }

  const postData = (e) => {
    e.preventDefault();
    const newData = data;
    setList([...list, newData])
    setData('')
  }

  const deletItem = (id) =>{
    const deletItem = list.filter((item,index)=>{
      return index !== id
    })
    setList(deletItem)
  }
  return (
    <>
      <div className="container my-3">
        <form onSubmit={postData}>
          <div className="row">
            <div className="col-md-8">
              <input type="search" name="search" className='w-100 form-control' placeholder="Enter Today's Plane" value={data} onChange={getData} />
            </div>
            <div className="col-md-4">
              <button className='btn btn-primary w-100' type='submit'>Add</button>
            </div>
          </div>
        </form>

      </div>
      <div className="container my-4">

        {
          list.map((item, index) => {
            return <Show
              key={index}
              id={index}
              task={item}
              delete={deletItem}
            />
          })
        }
      </div>


    </>
  )
}
