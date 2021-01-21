import fetch from "node-fetch";

export default async ({ query: { page } }, res) => {
  try {
    let { GOOGLE_API_KEY } = process.env;
    let sheetId = "1-Y-ssjQHLyMn7Oox3cw5Wruj-Gkj_Ban42CQuszUvrc";

    let startCell = Number(page) * 10 + 2;
    let endCell = startCell + 9;

    let adress = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/facts!A${startCell}:$G${endCell}?key=${GOOGLE_API_KEY}`;

    let theRes = await fetch(adress).then((theRes) => theRes.json());
    res.statusCode = 200;
    res.json({ values: theRes.values ? theRes.values : [], success: true });
  } catch (error) {
    console.log(error);
    res.json({ values: [], success: false });
  }
};
