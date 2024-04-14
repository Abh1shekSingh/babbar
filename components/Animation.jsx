import React from 'react'
const Animation = (props) => {
    const ref = `.${props.className}`
     
  return (
    <span aria-hidden="true">
          {
            props.word.map((letter, index) => {
              if(letter !== ' '){
                return <span className='inline-flex overflow-hidden'>
                  <span className={`${props.className} relative`}>{letter}</span>
                </span>
              }else {
                return <span>&nbsp;</span>
              }
            })
          }
    </span>
  )
}

export default Animation