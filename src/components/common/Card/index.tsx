import React from 'react'

interface CardProps {
  children: React.ReactNode
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className='relative mb-[30px] flex h-full w-full min-w-0 flex-col break-words rounded-[15px] bg-white shadow-card'>
      <div className='relative p-[25px]'>{children}</div>
    </div>
  )
}

export default Card
