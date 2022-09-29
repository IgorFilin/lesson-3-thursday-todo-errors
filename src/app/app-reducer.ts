//app-reducer.tsx


export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    status: 'loading' as RequestStatusType,
    error: null as null | string
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case "APP/SET-ERROR":
            return {...state,error: action.errorValue}
        default:
            return state
    }
}

type ActionsType = setStatusACType | setAppErrorACType
export type setStatusACType = ReturnType<typeof setStatusAC>
export type setAppErrorACType = ReturnType<typeof setAppErrorAC>

export const setStatusAC = (status: RequestStatusType) => {
    return {type: 'APP/SET-STATUS', status} as const
}

export const setAppErrorAC = (errorValue: string | null) => {
    return {type: 'APP/SET-ERROR', errorValue} as const
}