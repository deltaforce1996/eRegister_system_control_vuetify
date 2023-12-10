
const parseDdMmYy =(dateString)=>{
  const originalDate = new Date(dateString);
  const day = originalDate.getDate();
  const month = originalDate.getMonth() + 1;
  const year = originalDate.getFullYear() % 100;
  return `${day}/${month}/${year}`;
}


export default { parseDdMmYy }
