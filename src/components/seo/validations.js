export const validateDescription = value => {
  const maxLength = 180

  if (!value) {
    return null
  }

  if (!(typeof value == "string" || value instanceof String)) {
    return new Error("SEO Description must be a string")
  }

  if (value.length > maxLength) {
    return new Error(
      `SEO Description can only be ${maxLength} characters long (as per Google's recommendation)`
    )
  }
}
