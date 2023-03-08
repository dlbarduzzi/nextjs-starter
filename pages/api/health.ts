import type { NextApiRequest, NextApiResponse } from "next"

type Response = {
  health: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  res.status(200).json({ health: "ok" })
}
