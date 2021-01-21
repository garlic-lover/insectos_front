import fetch from "node-fetch";

export default async ({ query: {} }, res) => {
  let { GOOGLE_API_KEY } = process.env;

  let sheetId = "1-Y-ssjQHLyMn7Oox3cw5Wruj-Gkj_Ban42CQuszUvrc";

  let adress = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/facts!A2:$G5?key=${GOOGLE_API_KEY}`;

  let { values } = await fetch(adress).then((theRes) => theRes.json());

  res.statusCode = 200;
  res.json({ values });
};
