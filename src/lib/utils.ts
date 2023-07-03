export const serializeNonPOJOs = (obj) => {
  return structuredClone(obj);
};

export const generateUsername = (name) => {
  return `${name}${Math.ceil(Math.random() * 99999)}`;
  // const id = crypto.randomBytes(2).toString('hex');
  // return `${name.slice(0, 5)}${id}`;
};
