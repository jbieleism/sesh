import Sesh from './sesh.model'
import Promise from 'bluebird'

export const createSesh = async (req, res) => {
  const { title, description } = req.body
  const newSesh = new Sesh({ title, description })

  try {
    return res.status(201).json({ sesh: await newSesh.save() })
  } catch (e) {
    return res.status(500).json({ error: true, message: 'Error with creating sesh' })
  }
}

export const getAllSeshes = async (req, res) => {
  try {
    return res.status(200).json({ seshes: await Sesh.find({}) })
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error with finding Seshes' })
  }
}