import { createAction, props } from '@ngrx/store'

export const numberOfRecordChanging = createAction(
    '[] Number Of Record Changing',
    props<{numberOfRecord : number}>()
)

export const pageActiveChanging = createAction(
    '[] Page Active Changing',
    props<{pageActive : number}>()
)

export const sortingKeyChanging = createAction(
    '',
    props<{sortingKey : string}>()
)

export const keyWord1Changing = createAction(
    '[] Key Word1 Changing',
    props<{keyWord1 : string}>()
)

export const keyWordBy1Changing = createAction(
    '[] Key Word By 1 Changing',
    props<{keyWordBy1 : string}>()
)

export const keyWord2Changing = createAction(
    '[] Key Word2 Changing',
    props<{keyWord2 : string}>()
)

export const keyWordBy2Changing = createAction(
    '[] Key Word By 2 Changing',
    props<{keyWordBy2 : string}>()
)