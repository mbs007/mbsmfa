export const apiUrl = "https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10";

export const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

export const formErrorMessages = {
  userErr: "*username must be 5to10 characters and only alphabets are allowed",
  pwdErr:
    "*password must be 8to15 characters and must include atleast one digit ,one letter,and one special character from these !,@,#,$,%",
  emptyErr: "*Required",
};

export const diffColors = [
  "text-primary",
  "text-secondary",
  "text-success",
  "text-danger",
  "text-warning",
  "text-info",
  "text-dark",
];

export const diffBgColors = [
  "bg-primary",
  "bg-secondary",
  "bg-success",
  "bg-danger",
  "bg-warning",
  "bg-info",
  "bg-dark",
  "bg-transparent",
];

export const bgImag =
  "https://res.cloudinary.com/djdbb0sfe/image/upload/v1686655746/smileybg_ltadfk.png";

export const headLogo =
  "https://res.cloudinary.com/djdbb0sfe/image/upload/v1686641662/face-with-stuck-out-tongue-and-winking-eye-img_g8ajxh.png";