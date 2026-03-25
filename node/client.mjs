const base = "http://localhost:3000";

setTimeout(async () => {
  const response = await fetch(base + "/curso/javascript");

  console.log(response.ok, response.status);

  const data = await fetch(base + "/");
  
  console.log(data.ok, data.status);
}, 200);
