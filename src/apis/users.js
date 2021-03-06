import {apiHelper} from './../utilities/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  addFavorite ({restaurantId}) {
    return apiHelper.post(`/favorite/${restaurantId}`, null, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },
  deleteFavorite({ restaurantId }) {
    return apiHelper.delete(`/favorite/${restaurantId}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },
  addLiked({ restaurantId }) {
    return apiHelper.post(`/like/${restaurantId}`, null, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },
  deleteLiked({ restaurantId }) {
    return apiHelper.delete(`/like/${restaurantId}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },
  getTopUsers () {
    return apiHelper.get('/users/top', {
      headers: { Authorization: `Bearer ${getToken()}`}
    })
  },
  followingUsers ({userId}) {
    return apiHelper.post(`/following/${userId}`, null, {
      headers: { Authorization : `Bearer ${getToken()}`}
    })
  },
  notFollowingUsers ({userId}) {
    return apiHelper.delete(`/following/${userId}`, {
      headers: {Authorization : `Bearer ${getToken()}`}
    })
  },
  
}