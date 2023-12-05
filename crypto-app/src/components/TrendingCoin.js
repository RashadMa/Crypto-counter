import React from 'react'

const TrendingCoin = ({data}) => {
  return (
    <div>{data.item.name}</div>
  )
}

export default TrendingCoin