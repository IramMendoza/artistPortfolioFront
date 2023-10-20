// apiConfig.js
export const url = 'http://localhost:8000/'
export const artist = "The Redlights"
export const artistUrl = `${url}api/artist/${artist}/`
export const artistEvents = `${url}api/artist/${artist}/events/`
export const eventDetail = `${url}api/artist/${artist}/events/` // { venue }/
export const artistNextEvents = `${url}api/artist/${artist}/next_events/`