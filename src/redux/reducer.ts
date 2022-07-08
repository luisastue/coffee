import { createReducer } from '@reduxjs/toolkit'
import { ADD_DRINKER, DRINK, NEW_GROUP } from './constants'

export interface Drinker {
  id: string
  name: string
  coffees: Coffee[]
}

export interface Coffee {
  id: string
  time: Date
  drinker: Drinker
}

export interface Group {
  id: string
  name: string
  members: Array<Drinker>
}

type CoffeeState = {
  currentGroup?: Group
  currentDrinkers: Record<string, Drinker>
  groups: Record<string, Group>
}

export type CoffeeAction = {
  type: string
  drinker?: Drinker
  name?: string
}

const initialState: CoffeeState = {
  currentDrinkers: {},
  groups: {},
}

const coffeeReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(DRINK, (state: CoffeeState, action: CoffeeAction) => {
      if (action.drinker) {
        const newCoffee: Coffee = {
          id: Math.random() * 1000 + action.drinker.name, // not really unique
          time: new Date(),
          drinker: action.drinker,
        }
        const newDrinker: Drinker = {
          ...action.drinker,
          coffees: [...action.drinker.coffees, newCoffee],
        }
        state.currentDrinkers[action.drinker.id] = newDrinker
      }
    })
    .addCase(NEW_GROUP, (state: CoffeeState, action: CoffeeAction) => {
      if (action.name) {
        const newGroup: Group = {
          id: Math.random() * 1000 + action.name, //not really unique
          name: action.name, //not really unique
          members: [],
        }
        state.groups[newGroup.id] = newGroup
        state.currentGroup = newGroup
      }
    })
    .addCase(ADD_DRINKER, (state: CoffeeState, action: CoffeeAction) => {
      if (action.name) {
        const name = action.name
        if (
          Object.keys(state.currentDrinkers).filter((id) => id.includes(name))
            .length <= 0
        ) {
          const newDrinker: Drinker = {
            id: Math.random() * 1000 + action.name, //not really unique
            name: action.name, //not really unique
            coffees: [],
          }
          state.currentDrinkers = {
            ...state.currentDrinkers,
            [newDrinker.id]: newDrinker,
          }
          if (state.currentGroup) {
            const changedGroup = {
              ...state.currentGroup,
              members: [...state.currentGroup.members, newDrinker],
            }
            state.groups[changedGroup.id] = changedGroup
          }
        }
      }
    })
})
export default coffeeReducer
