const { getWelcomeDS, getAllWelcomeDS, saveWelcomeDS, deleteWelcomeDS } = require('../datasources/mongo')

const getWelcome = async (req, res) => {
  const { dataId } = req.params
  const data = await getWelcomeDS(dataId)

  if (!data) {
    res.status(404)
    throw new Error(`Data ${dataId} not found!`)
  }

  res.json(data)
}

const getAllWelcomes = async (req, res) => {
  const data = await getAllWelcomeDS()

  res.json(data)
}

const saveWelcome = async (req, res) => {
  const { body: data } = req

  const result = await saveWelcomeDS(data)

  res.json(result)
}

const deleteWelcome = async (req, res) => {
  const { dataId } = req.params
  const result = await deleteWelcomeDS(dataId)

  res.json(result)
}

module.exports = {
  getWelcome,
  getAllWelcomes,
  saveWelcome,
  deleteWelcome
}
