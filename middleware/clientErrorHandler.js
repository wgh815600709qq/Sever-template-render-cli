function clientErrorHandler(err, req, res, next) {
  if (req.xhr) {
    res.status(500).send({ error: 'Server Error!' })
  } else {
    next(err)
  }
}

module.exports = clientErrorHandler