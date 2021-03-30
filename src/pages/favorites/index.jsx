import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { ArtistCard, Text } from 'components'

const Content = styled.div`
  margin: 36px 0;
  width: 100%;
`

const Favorites = () => {
  const { favorites } = useSelector((state) => state)
  return (
    <Content>
      <Text isBold>My Favorites Artists List</Text>
      <ArtistCard artists={favorites} showEmptyMessage />
    </Content>
  )
}

export default Favorites
