import useSearchParams from "./use_search_params"

export default () => {
  const params = useSearchParams()

  return !params || !params.has("skipAnimations")
}
