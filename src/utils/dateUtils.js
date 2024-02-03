
const parseDdMmYy =(dateString)=>{
  const originalDate = new Date(dateString);
  const day = originalDate.getDate();
  const month = originalDate.getMonth() + 1;
  const year = originalDate.getFullYear() % 100;
  return `${day}/${month}/${year}`;
}

const parseDdMmYyWithTimeAndSeconds = (dateString) => {
  const originalDate = new Date(dateString);
  const day = originalDate.getDate();
  const month = originalDate.getMonth() + 1;
  const year = originalDate.getFullYear() % 100;
  const hours = originalDate.getHours();
  const minutes = originalDate.getMinutes();
  const seconds = originalDate.getSeconds();

  // Padding single digit day, month, hours, minutes, and seconds with a leading zero
  const paddedDay = String(day).padStart(2, '0');
  const paddedMonth = String(month).padStart(2, '0');
  const paddedHours = String(hours).padStart(2, '0');
  const paddedMinutes = String(minutes).padStart(2, '0');
  const paddedSeconds = String(seconds).padStart(2, '0');

  return `${paddedDay}/${paddedMonth}/${year} ${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
}



export default { parseDdMmYy, parseDdMmYyWithTimeAndSeconds }
