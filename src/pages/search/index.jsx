/* eslint-disable no-console */
import React, { useState } from 'react'
import { Form, FormControl } from 'react-bootstrap'
import styled from 'styled-components'

import { API } from 'api'
import { ArtistCard } from 'components'

const SearchForm = styled.div`
  margin: 36px 0;
  width: 100%;
`

const GenreWrapper = styled.div`
  border: 1px solid lightgray;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top: none;
`

const Label = styled.div`
  font-size: 12px;
  padding: 10px 16px;
  cursor: pointer;
  &:hover {
    background-color: darkgray;
  }
`

const Search = () => {
  const [genres, setGenres] = useState([])
  const [genreArtists, setGenreArtists] = useState([])

  const loadGenreArtists = async (id) => {
    try {
      const response = await API.get(`/v1/music/genres/${id}/artists`)

      const { data: result } = response

      setGenreArtists(result.data)
      setGenres([])
    } catch (error) {
      console.error(error)
    }
  }

  const loadGenres = async (e) => {
    if (e?.target?.value.length < 3) {
      return null
    }

    try {
      const response = await API.get(`/v1/music/genres?q=${e?.target?.value}`)

      const { data: result } = response

      setGenres(result.data)
      return true
    } catch (error) {
      console.error(error)
      return false
    }
  }

  const renderSearchResults = () => (
    <Form>
      <Form.Label>Enter a genre to find artists</Form.Label>
      <FormControl type="text" placeholder="Search" size="lg" onChange={loadGenres} onClick={loadGenres} />
      {genres.length > 0 ? (
        <GenreWrapper>
          {genres.map(genre => (
            <Label key={genre?.id} onClick={() => loadGenreArtists(genre?.id)}>{genre?.name}</Label>
          ))}
        </GenreWrapper>
      ) : null}
    </Form>
  )

  return (
    <SearchForm>
      {renderSearchResults()}
      <ArtistCard artists={genreArtists} />
    </SearchForm>
  )
}

export default Search
