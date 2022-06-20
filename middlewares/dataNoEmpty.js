
const dataNoEmpty = (req, res, next) => {

  const { n, c, m } = req.query
  if (!n || !c || !m) {
    return res.status(400).json({
      error: "Faltan datos en la solicitud"
    })
  }
  next()
}

export default dataNoEmpty