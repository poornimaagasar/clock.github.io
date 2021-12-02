setInterval(function(){
     currentDate=new Date();
     var hourHand=document.getElementById("hour");
     var minuteHand=document.getElementById("minute");
     var secondHand=document.getElementById("second");
     Hours=currentDate.getHours();
     Minutes=currentDate.getMinutes();
     Seconds=currentDate.getSeconds();
     hrotation=30*Hours+Minutes/2;
     mrotation=6*Minutes;
     srotation=5*Seconds;
    hourHand.style.transform=`rotate(${hrotation}deg)`;
    minuteHand.style.transform=`rotate(${mrotation}deg)`;
    secondHand.style.transform=`rotate(${srotation}deg)`;
},1000);