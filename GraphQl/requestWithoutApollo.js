export default async function requestWithoutApollo(query, variables) {
  try {
    const url = "https://insectos-back.herokuapp.com/";
    //    const url = "http://localhost:4000";

    let { errors, data } = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables }),
    }).then((res) => {
      return res.json();
    });

    return data;
  } catch (error) {
    console.log("error", error);
    return [];
  }
}
