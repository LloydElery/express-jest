function formatMessages(message: string[] | string): string {
  let msg = '';
  if (typeof message === 'string') {
    msg = message.toUpperCase();
  } else {
    msg = message.join(' ').toLocaleLowerCase();
  }
  return msg;
}
console.log(formatMessages('Hello There!'));
console.log(formatMessages(['Hello There!', 'Obi-wan']));
