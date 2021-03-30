/* eslint-disable no-console */
import React, { useEffect, useState } from 'react'
import { API } from 'api'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { ArtistCard, Text } from 'components'

const Content = styled.div`
  margin: 36px 0;
  width: 100%;
`

const Artist = () => {
  const { id } = useParams()
  const [artistInfo, setArtistInfo] = useState([])
  const [relatedArtists, setRelatedArtists] = useState([])

  useEffect(() => {
    const loadArtist = async () => {
      try {
        const response = await API.get(`/v1/music/artists/${id}`)
        const { data: result } = response

        setArtistInfo(result.data)
      } catch (error) {
        console.error(error)
      }
    }

    const loadRelatedArtist = async () => {
      try {
        const response = await API.get(`/v1/music/artists/${id}/similar`)
        const { data: result } = response

        setRelatedArtists(result?.data?.filter(artist => +artist?.id !== +id) || [])
      } catch (error) {
        console.error(error)
      }
    }

    loadArtist()
    loadRelatedArtist()
  }, [id])

  return (
    <Content>
      <ArtistCard artists={artistInfo} isAllInfo />
      <Text isBold>Related Artists:</Text>
      <ArtistCard artists={relatedArtists} />
    </Content>
  )
}
export default Artist
