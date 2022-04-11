// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
interface ResponseProps {
  name: String;
  job: string;
}
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseProps>
) {
  res.status(200).json({ name: "John Doe", job: "Fullstack Developer" });
}
