import React from 'react'

const Card = (props) => {
    console.log(props)


  return (
      <div className='parent'>
          <div className='card'>
              <div className="top">
                  <button>Avalaible</button>
                  <p>{props.data}</p>
              </div>
              <div>
                  <img src={props.img} alt="image" />
              </div>
              <div className='medium'>
                  <h1>{ props.user}</h1>
                  <span>{props.tech }</span>
                  <a href="">Epic Coders</a>
              </div>
              <div className='tech'>
                  <button>{props.tool}</button>
                  <button>{props.tools}</button>
                  <button>{props.more}</button>
              </div>
              <div className='experience'>
                  <div className='view'>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis architecto nisi minus sit explicabo, expedita dolores pariatur ipsam quaerat! Sit libero atque aut modi sint velit iure, alias eveniet temporibus!</p>
                  </div>
              </div>
              <button>view profile</button>
          </div>
      </div>
  )
}

export default Card