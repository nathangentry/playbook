const generateId = (length: number = 20) => {
  let id = "";
  const charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    id += charSet[Math.floor(Math.random() * charSet.length)]
  }

  return id;
}

export default generateId;