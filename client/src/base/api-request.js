function handleResponse(res) {
  if (!res.ok) {
    return Promise.reject(res)
  }
  return res.json()
}

export const postRequest = async (url, body) => {
  const params = {
    method: 'POST',
    body: JSON.stringify({
      ...body,
    }),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  }
  const data = await fetch(`${url}`, params).then((res) => {
    return handleResponse(res)
  })

  return data
}
