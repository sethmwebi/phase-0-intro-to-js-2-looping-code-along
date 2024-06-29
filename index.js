// Code your solutions in this file
const writeCards = (arr, message) => {
  const messages = [];
  for (let i = 0; i < arr.length; i++) {
    messages.push(`Thank you, ${arr[i]}, for the wonderful ${message} gift!`);
  }
  return messages;
};

const countDown = (value) => {
  while (value >= 0) {
    console.log(value);
    value--;
  }
};
