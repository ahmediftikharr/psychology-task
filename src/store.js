import { createStore } from 'redux'

const initialState = {
  sidebarShow: 'responsive',
  username: 'admin',
  password: 'admin123'
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return {...state, ...rest }
    case 'updateProfile': 
      return {...state, ...rest}
    default:
      return state
  }
}

const store = createStore(changeState)
export default store