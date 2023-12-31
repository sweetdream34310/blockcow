import { TypedUseSelectorHook /*, useDispatch*/, useSelector } from 'react-redux'
import { /*AppDispatch,*/ AppState } from 'state'

// export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector

export * from '@src/custom/state/hooks'
