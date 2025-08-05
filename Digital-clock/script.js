function time(){
const date =new Date();
const hour=date.getHours().toString().padStart(2,'0');
const mintus=date.getMinutes().toString().padStart(2,'0');
const seconds=date.getSeconds().toString().padStart(2,'0');
const string=`${hour}:${mintus} :${seconds} `;
document.querySelector(".clock").textContent=string;
}
setInterval(time,1000);
time();