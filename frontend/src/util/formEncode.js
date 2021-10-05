function formEncode(...keyValues) {
  const formBody = [];

  for (let keyValue of keyValues) {
    const key = encodeURIComponent(Object.keys(keyValue));
    const value = encodeURIComponent(Object.values(keyValue));
    formBody.push(key + "=" + value);
  }
  return formBody.join("&");
}

export default formEncode;
