export async function main() {
  return {
    statusCode: 200,
    body: "Hello World",
  };
}

export async function getIp(req: any) {
  const ip = req?.headers?.["x-forwarded-for"];

  try {
    return {
      statusCode: 200,
      header: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ ip }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
