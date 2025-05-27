export const apiClient = async (method, url, payload = null) => {
  let options = {
    method: method.toUpperCase(),
    headers: {
      "Content-Type": "application/json"
    }
  };

  switch (options.method) {
    case "POST":
      options.body = JSON.stringify(payload);
      break;

    case "GET":
    break;

    default:
      throw new Error(`[apiClient] Unsupported method: ${method}`);
  }

  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (err) {
    console.error(`[${method}] ${url} failed:`, err.message);
    return null;
  }
};
