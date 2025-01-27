import React from 'react'

const Title = (props) => {
  return (
    <>
      <div className={`text-3xl font-semibold text-blue-600 ${props.className}`}>{props.label}</div>
    </>
  )
}

export default Title
