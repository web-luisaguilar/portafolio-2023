// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let data = JSON.parse(req.body);
  console.log(data);
  try {
    let response = await fetch(
      "https://formsubmit.co/ajax/web.luisaguilar@gmail.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(req.body),
      }
    );
    let data = await response.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }

  res.status(200).json(req.body);
}
