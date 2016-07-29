const url = 'https://api.particle.io/v1/devices'
const access_token = '15787539-ETzhXMENTMOT6g5UD4VK8W2sxHMVMTfTXi5t5z6EL'
const owner_id = 15787539

// can also pass as props too
export default {
	
  getUrl() {
    return url
  },
  getAccessToken() {
    return access_token
  },
  getOwnerId() {
  	return owner_id
  }
}