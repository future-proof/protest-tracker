import {useMemo} from 'react'
import {useRoutes} from 'hookrouter'
import Dashboard from './pages/Dashboard'
import Event from './pages/Event'

export type IRouteObject = {
  title?: string,
  page: JSX.Element,
}

export type IRouteFactory = (props: Record<string, any>) => IRouteObject | JSX.Element

function isRouteObject(route: IRouteObject | JSX.Element): route is IRouteObject {
  return (route as IRouteObject).page !== undefined
}

export const routes: Record<string, IRouteFactory> = {
  '/': () => ({
    title: 'Home',
    page: <Dashboard />
  }),
  '/event/:id': ({id}) => ({
    title: 'Event',
    page: <Event id={ id } />
  }),
}

export const useRoute = (): IRouteObject => {
  const routeResult = useRoutes(routes) as (IRouteObject | JSX.Element)
  if(isRouteObject(routeResult)) {
    return routeResult
  }
  else {
    return {
      page: routeResult,
    }
  }
}

export default routes