
const isQueryNumbers = (req, res, next) => {

  const query = req.query

  for (const key in query) {
    if (Number.isNaN(Number(query[key]))) {
      return res.status(400).json({
        error: "Los datos enviados no son numericos"
      })
    }
  }
  next()

}

export default isQueryNumbers