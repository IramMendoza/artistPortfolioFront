// apiConfig.js
export const url = 'http://localhost:8000/'
export const artist = "The Redlights"
export const artistUrl = `${url}api/artist/${artist}/`
export const artistHeader = `${url}api/artist/${artist}/header/`
export const artistPictures = `${url}/api/artist/${artist}/pictures`
export const artistEvents = `${url}api/artist/${artist}/events/`
export const artistMembers = `${url}/api/artist/${artist}/members/`
export const eventDetail = `${url}api/artist/${artist}/events/` // { venue }/
export const artistNextEvents = `${url}api/artist/${artist}/events/next_events/`