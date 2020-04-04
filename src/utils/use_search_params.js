import _isFunction from "lodash/isFunction"

import useLocation from "./use_location"

export default callback => {
  const location = useLocation()

  if (!location || !URLSearchParams) return undefined

  const searchParams = new URLSearchParams(location.search)

  if (_isFunction(callback)) callback(searchParams)

  return searchParams
}
