import PropTypes from 'prop-types'
import React from 'react'
import { Button, Col, Card } from 'react-bootstrap'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setFavorite } from 'store/actions'
import { Text } from 'components'

const Block = styled.div`
  word-break: break-all;
  text-align: center;
  display: block;
`

const ArtistWrapper = styled.div`
  margin: 50px 0;
  display: block;
`

const SCard = styled(Card)`
  padding: 30px;
  margin: 20px 0;
  @media only screen and (max-width: 768px) {
    padding: 30px 0;
  }
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

const IMG = styled.img`
  border-radius: 25px;
  object-fit: cover;
  width: ${props => (props.isAllInfo ? '150px' : '80px')}
`

const ArtistCard = ({ artists, isAllInfo, showEmptyMessage }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { favorites } = useSelector((state) => state)

  const renderBasicInfo = (artist) => (
    <>
      <Text isBold isCursor onClick={() => history.push(`/artist/${artist?.id}`)}>{artist?.name}</Text>
      <br />
      <Text>
        {artist?.genres?.find(genre => genre?.is_primary)?.name}
      </Text>
    </>
  )

  const renderAllInfo = (artist) => (
    <>
      <Text isBold>{artist?.name}</Text>
      <br />
      <Text>
        Primary Genre:
        {' '}
        {artist?.genres?.find(genre => genre?.is_primary)?.name}
      </Text>
      <br />
      <Text>
        Popularity Score:
        {' '}
        {artist?.popularity}
      </Text>
      <br />
      <br />
      {artist?.genres?.length > 1 && (
        <Text>
          Additional Genres:
          <br />
          {artist?.genres?.map(genre => genre?.name).join(', ')}
        </Text>
      )}
    </>
  )

  return (
    <ArtistWrapper>
      {artists.length > 0 ? artists?.map((artist => (
        <SCard key={artist?.id} data-testid={artist?.id}>
          <Wrapper>
            <Col>
              <IMG src={artist?.image} alt="Cover" isAllInfo={isAllInfo} />
            </Col>
            <Col>
              <Block>
                {isAllInfo ? renderAllInfo(artist) : renderBasicInfo(artist)}
              </Block>
            </Col>
            <Col>
              <Button variant="primary" onClick={() => dispatch(setFavorite(artist))}>{favorites.find(favorite => +favorite?.id === +artist?.id) ? 'Remove' : 'Add'}</Button>
            </Col>

          </Wrapper>
        </SCard>
      )
      )) : showEmptyMessage && <Text>No Artist in list</Text>}
    </ArtistWrapper>
  )
}

ArtistCard.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.object).isRequired,
  isAllInfo: PropTypes.bool,
  showEmptyMessage: PropTypes.bool
}

ArtistCard.defaultProps = {
  isAllInfo: false,
  showEmptyMessage: false
}

export default ArtistCard
