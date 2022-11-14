import { createReducer, on } from '@ngrx/store'
import { pageActiveChanging, numberOfRecordChanging, sortingKeyChanging, keyWord1Changing, keyWordBy1Changing, keyWord2Changing, keyWordBy2Changing} from './store.action'

export const pageActive = 1
export const numberOfRecord = 5
export const numberOfData = 0
export const sortingKey = ""
export const keyWord1 = ""
export const keyWordBy1 = "username"
export const keyWord2 = ""
export const keyWordBy2 = "firstName"

export const pageActiveChanger = createReducer(
  pageActive,
  on(pageActiveChanging, (state,{pageActive}) => pageActive)
)

export const numberOfRecordChanger = createReducer(
  numberOfRecord,
  on(numberOfRecordChanging, (state,{numberOfRecord}) => numberOfRecord)
)

export const sortingKeyChanger = createReducer(
  sortingKey,
  on(sortingKeyChanging, (state, {sortingKey}) => sortingKey)
)

export const keyWord1Changer = createReducer(
  keyWord1,
  on(keyWord1Changing, (state, {keyWord1}) => keyWord1)
)

export const keyWordBy1Changer = createReducer(
  keyWordBy1,
  on(keyWordBy1Changing, (state, {keyWordBy1}) => keyWordBy1)
)

export const keyWord2Changer = createReducer(
  keyWord2,
  on(keyWord2Changing, (state, {keyWord2}) => keyWord2)
)

export const keyWordBy2Changer = createReducer(
  keyWordBy2,
  on(keyWordBy2Changing, (state, {keyWordBy2}) => keyWordBy2)
)