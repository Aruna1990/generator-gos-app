export type RouteItem = {
  name: string,
  path: string,
  component: any,
  icon?: string,
  exact?: boolean
  redirect?: string,
  hidden?: boolean,
}