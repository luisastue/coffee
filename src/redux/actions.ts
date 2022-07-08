import { ADD_DRINKER, DRINK, NEW_GROUP } from './constants'
import { CoffeeAction, Drinker } from './reducer'
import { AppDispatch } from './store'

export const drink = (drinker: Drinker) => (dispatch: AppDispatch) => {
  const action: CoffeeAction = {
    type: DRINK,
    drinker,
  }
  return dispatch(action)
}

export const newGroup = (name: string) => (dispatch: AppDispatch) => {
  const action: CoffeeAction = {
    type: NEW_GROUP,
    name,
  }
  return dispatch(action)
}

export const addDrinker = (name: string) => (dispatch: AppDispatch) => {
  const action: CoffeeAction = {
    type: ADD_DRINKER,
    name,
  }
  return dispatch(action)
}
