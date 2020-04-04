import { useState, useEffect } from "react"
import _get from "lodash/get"

export default () => {
  const [location, setLocation] = useState()

  useEffect(() => {
    const newLocation = _get(window, "location")

    setLocation(newLocation)
  }, [])

  return location
}
