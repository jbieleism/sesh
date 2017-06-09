import User from './user.model'

export const createUser = async (req, res) => {
  const { username, about } = req.body
  const newUser = new User({ username, about })

  try {
    return res.status(201).json({ user: await newUser.save() })
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error with creating user' })
  }
}

export const getUser = async (req, res) => {
  try {
    return res.status(200).json({ user: await User.find({} )})
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error with finding user' })
  }
}

export const getFriends = async (req, res) => {

}