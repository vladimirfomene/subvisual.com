import { useEffect, useState } from "react"
import _isFunction from "lodash/isFunction"
import _isUndefined from "lodash/isUndefined"

export default callback => {
  const [location, setLocation] = useState()

  useEffect(() => {
    if (_isUndefined(window)) return

    setLocation(window.location)
  }, [])

  if (_isFunction(callback)) callback(location)

  return location
}
