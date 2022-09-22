let message = "voici l'heure : "
const dateTimeNow = new Date();
console.log(dateTimeNow.toLocaleDateString()); // 17/08/2020
console.log(dateTimeNow.toLocaleTimeString()); // 13:26:15


addTime = (message) => {
   return message  =message + dateTimeNow.toLocaleDateString() + " "+dateTimeNow.toLocaleTimeString();

}



alert(addTime(message));