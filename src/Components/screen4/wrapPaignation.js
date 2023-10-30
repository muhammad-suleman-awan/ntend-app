import { Pagination } from '@mui/material'
import React from 'react'

const WrapPaignation = () => {
  return (
    <div className='flex justify-center'>
        <Pagination count={3} color="primary" />

    </div>
  )
}

export default WrapPaignation