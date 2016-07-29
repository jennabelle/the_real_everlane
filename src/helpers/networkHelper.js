const url = 'https://api.particle.io/v1/devices'
const access_token = 'd6576383889e1526c95853391923584b508071c4'

// can also pass as props too
export default {
  
  getUrl() {
    return url
  },
  getAccessToken() {
    return access_token
  }
}