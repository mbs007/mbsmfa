export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getRandomClassName(...rest) {
  const randomIndex = Math.floor(Math.random() * rest.length);
  return rest[randomIndex];
}
 
export const validatePassword = (value) => {
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%])[A-Za-z\d!@#$%]{8,15}$/;
  return passwordRegex.test(value);
};

export const validateUsername = (value) => {
  const usernameRegex = /^[A-Za-z]{5,10}$/;
  return usernameRegex.test(value);
};



