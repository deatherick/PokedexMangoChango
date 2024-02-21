import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from './store'
import React from 'react'
import { useFocusEffect } from '@react-navigation/native'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export function useRefreshByUser(refetch: () => Promise<unknown>) {
    const [isRefetchingByUser, setIsRefetchingByUser] = React.useState(false)

    async function refetchByUser() {
        setIsRefetchingByUser(true)
        try {
            await refetch()
        } finally {
            setIsRefetchingByUser(false)
        }
    }
    return {
        isRefetchingByUser,
        refetchByUser,
    }
}
export function useRefreshOnFocus(refetch: () => void) {
    const enabledRef = React.useRef(false)
    useFocusEffect(
      React.useCallback(() => {
        if (enabledRef.current) {
          refetch()
        } else {
          enabledRef.current = true
        }
      }, [refetch]),
    )
}
  