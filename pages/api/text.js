import { Text } from "@/models/Text"
import { mongooseConnect } from "@/lib/mongoose"

export default async function handle(req, res) {
  const { method } = req
  await mongooseConnect()

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Text.findOne({ _id: req.query.id }))
    } else {
      res.json(await Text.find())
    }
  }

  if (method === "POST") {
    const { text } = req.body
    const textDoc = await Text.create({
      text,
    })
    res.json(textDoc)
  }

  if (method === "PUT") {
    const { text, _id } = req.body
    await Text.updateOne({ _id }, { text })
    res.json(true)
  }

  if (method === "DELETE") {
    if (req.query?.id) {
      await Text.deleteOne({ _id: req.query?.id })
      res.json(true)
    }
  }
}
//erosimcity
//DkNHupG6N3GpiuQg
