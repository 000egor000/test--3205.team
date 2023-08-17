import { Dna } from 'react-loader-spinner'

import React from 'react'
import './Loader.scss'

const Loader = ({ statusloader }) => {
  return (
    statusloader && (
      <div className="loader">
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{
            position: 'fixed',
            bottom: '-10px',
            right: '30px',
          }}
          wrapperClass="dna-wrapper"
        />
      </div>
    )
  )
}

export default Loader
