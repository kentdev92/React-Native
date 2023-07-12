import * as React from 'react'
import {StackActions} from '@react-navigation/native'

export const navigationRef = React.createRef()

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params)
}

export const checkRouteOrigin = () => navigationRef.current.getRootState().routeNames[0]

export function navigationPop() {
  navigationRef.current?.dispatch(StackActions.pop(1))
}

export function popToTop() {
  navigationRef.current?.dispatch(StackActions.popToTop())
}

export function replace(name, params) {
  navigationRef.current?.dispatch(StackActions.replace(name, params))
}

export function goBack() {
  navigationRef.current?.goBack()
}
