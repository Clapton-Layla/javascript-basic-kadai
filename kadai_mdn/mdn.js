//const dateYear=new Date(year);

//console.log(dateYear+"年"+dateMonth+"月"+dateDay+"日");

const date=new Date();
const year=date.getUTCFullYear();

const month=date.getUTCMonth();

const day=date.getUTCDate();

console.log(year+"年"+month+"月"+day+"日");
