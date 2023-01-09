import moment from "moment";

export const truncateString = (string, front, back) =>
  `${string.substr(0, front)}...${string.substr(
    string.length - back,
    string.length
  )}`;

export const lowercaseFirstLetter = (string) => {
  return string.charAt(0).toLowerCase() + string.slice(1).toUpperCase();
};

export const unixToGMTTime = (time) => {
  let newTime = Math.floor(time / 1000000000);
  var timestamp = moment.unix(newTime);
  timestamp = timestamp.format("DD/MMMM/YYYY")
  return timestamp;
}
export const unixToGMTTimeWithTime = (time) => {
  let newTime = Math.floor(time / 1000000000);
  var timestamp = moment.unix(newTime);
  timestamp = timestamp.format("DD-MM-YYYY hh:mm:ss")
  return timestamp;
}