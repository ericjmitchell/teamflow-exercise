const { Data } = require('./models/data')

const getWelcomeDS = async (id) => {
  return Data.findById(id);
}

const getAllWelcomeDS = async () => {
  return Data.find({})
}

const saveWelcomeDS = async (saveData) => {
  let data = null
  if (saveData._id) {
    data = await Data.findById(saveData._id)
    if (data) {
      data.name = saveData.name
      data.message = saveData.message
    }
  }

  if (!data) {
    data = new Data(saveData)
  }

  return data.save()
}

const deleteWelcomeDS = async (id) => {
  return Data.deleteOne({ _id: id})
}

module.exports = {
  getWelcomeDS,
  getAllWelcomeDS,
  saveWelcomeDS,
  deleteWelcomeDS
}
