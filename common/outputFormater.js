module.exports = {
  jsonOut: data => res => {
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(data.data))
  }
}
