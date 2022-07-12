import { RankType } from './../../interfaces/rank';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { RankFormatter } from '../../interfaces/rank'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const user = {
    id: 1123123,
    name: "Gabriel",
    email: "gxguinho@gmail.com",
    avatar: "https://avatars.githubusercontent.com/u/80070421?v=4",
    xp: 2000,
  }

  const rank = new RankFormatter(
    0
  );

  console.log(rank)

  res.status(200).json({ rank })
}
