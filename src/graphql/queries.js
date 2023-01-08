import gql from 'graphql-tag'

export const GET_EVENTS = gql`
  query GetAllEvents {
    allEvents {
      id
      title
      starts
      image
      description
      location
    }
  }
`
