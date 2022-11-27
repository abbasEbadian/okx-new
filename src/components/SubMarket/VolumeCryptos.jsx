import React from 'react'
import Styled from '@emotion/styled'
const VolumeBody = Styled.div`
  display:flex;
  align-items:center;
  .unit-volume,.volume{
    color:var(--white200);
    font-size:15px;
  }
`
function VolumeCryptos({amount}) {
  return (
    <VolumeBody>
        <span className="volume">{amount}</span>
        <span className="unit-volume">M</span>
    </VolumeBody>
  )
}

export default VolumeCryptos