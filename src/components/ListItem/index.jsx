import React from 'react'
import * as S from './style'

export default function index({item4, item2, addItem3, addItem4}) {
  return (
    <div style={{display: 'flex'}}>
      <S.Container>
      {item2}
      </S.Container>
      <S.Container>
      {item4}
      </S.Container>
      <br/>
    </div>
  )
}
