// Store/configureStore.js

import { createStore } from 'redux';
import toggleFavorite from './FavoriteReducer'

export default createStore(toggleFavorite)