const isDataInRange = (req, res, next) => {

  const { n, c, m } = req.query
  let error = []
  if (n < 2 || n > 100000) {
    error.push("Error, la query n debe ser >=2 y <= 100000")
  }
  if (c < 1 || c > n) {
    error.push("Error, la query c debe ser >= 1 y <= n")
  }
  if (m < 2 || m > n) {
    error.push("Error, la query m debe ser >=2 y <= n")
  }
  if (error.length > 0) {
    return res.status(400).json({
      error
    })
  }
  next()
}

export default isDataInRange