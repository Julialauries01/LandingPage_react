import { list } from '@mui/material'
import React, { useState } from 'react'
import { portfolio } from '../data/dummydata'


export const Portfolio = () => {
  const [list, setList] = useState(portfolio)
  console.log({portfolio})
  return (
    <>
    <article>   
      <div className="container">
        <div className="catButton">text</div>
      </div>
      <div className="content grid3">
        {list.map((items) => {
          console.log({items})
         return ( <div className="box">
            <div className="img">
              <img src={items.cover} alt="" />
            </div>
          </div> )
})}
      </div>
    </article>
    </>
  )
}

