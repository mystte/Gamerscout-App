export async function fetchAsync(func) {
  const response = await func();
  if (response.ok) {
    return await JSON.parse(JSON.stringify(response));
  } else {
    throw new Error("Unexpected error!!!");
  }
}

export default class Api {
  static loadGamerDetails() {
    return {
      response: {
        ok: true,
      }
    };
  }
}
