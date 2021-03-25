const { getWelcomeDS } = require('../datasources/mongo')

const getWelcome = async (req, res) => {
  const message = await getWelcomeDS()

  res.json({
    message
  })
}

module.exports = {
  getWelcome
}
