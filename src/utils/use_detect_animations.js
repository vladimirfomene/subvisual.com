import _isFunction from "lodash/isFunction"

import useSearchParams from "./use_search_params"

export default callback => {
  const params = useSearchParams()

  if (!params || !params.has("animations")) return true

  const animationsEnabled = !!params.get("animations")

  if (_isFunction(callback)) callback(animationsEnabled)

  return animationsEnabled
}
