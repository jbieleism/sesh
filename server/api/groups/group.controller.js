import Group from './group.model'

export const createGroup = async (req, res) => {
  const { name, description, category } = req.body

  if (!name) {
    return res.status(400).json({ error: true, message: 'Name must be provided!' })
  }

  const group = new Group({ name, description })

  try {
    res.status(201).json({ error: false, group: await group.save() })
  } catch(e) {
    res.status(400).json({ error: true, message: 'Error creating group' })
  }
}

export const createGroupSesh = async (req, res) => {

  const { title, description } = req.body
  const { groupId } = req.params

  if (!title) {
    return res.status(400).json({ error: true, message: 'Title must be provided!' })
  }

  if (!description) {
    return res.status(400).json({ error: true, message: 'Description must be provided!' });
  }

  try {
    const [sesh, group] = await Group.addSesh(groupId, { title, description })
    return res.status(201).json({ error: false, meetup, group });
  } catch (e) {
    return res.status(400).json({ error: true, message: 'Sesh cannot be created!' })
  }

}