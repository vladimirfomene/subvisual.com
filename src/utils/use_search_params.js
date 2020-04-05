import useLocation from "./use_location"

export default () => {
  const location = useLocation()

  if (!location || !URLSearchParams) return undefined

  return new URLSearchParams(location.search)
}
