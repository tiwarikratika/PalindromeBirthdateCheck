var birthDate = document.querySelector(".date");
var btn = document.querySelector(".btn");
var output = document.querySelector(".output");

let count=0;
function clickHandler(event) {
    event.preventDefault();
    const dateInput = birthDate.value;
    console.log(dateInput);
    const fulldate = dateInput.split("-");
  
    const year = fulldate[0];
    console.log(year)
    const month = fulldate[1];
    const date = fulldate[2];
    const yyyymmdd = parseInt(year + month + date);
    console.log(yyyymmdd);
    const ddmmyyyy = parseInt(date + month + year);
    console.log(ddmmyyyy);
    const mmddyy = parseInt(month + date + year);
    console.log(mmddyy);
    if((checkPalindrome(yyyymmdd)) || (checkPalindrome(ddmmyyyy) )|| ((checkPalindrome(mmddyy) )))
     {
    addGif1();
     output.innerText = "Wow, Congratulations !! Your borthdate is a palindrome !!";
    
     }
     else{
        addGif2();
    output.innerText="Sorry !! :( ";
   
     }


}



function checkPalindrome(Date) {
    const originalNo = Date;
    let reverseNo = 0;
    let remainder;
    while (Date !== 0) {
      remainder = Date % 10;
      reverseNo = reverseNo * 10 + remainder;
      Date = parseInt(Date / 10);
      
    }
    if(originalNo===reverseNo)
    {
        return true;
    }
    else{
        return false;
    }
}
var styles = {
    "width":"40%",
    "height":"30%",
    "margin-top":"1%",
    "align":"center",
    "margin-left":"33%"
};

// function getnextdate(date){
//     var day = date.day+1;
// }

function addGif1() {
    var img = new Image();
    img.src="https://media.tenor.com/images/3ba2d4b0c94e33d8238994412d21dd2a/tenor.gif" ;
    var obj = document.getElementById('body').appendChild(img);
    Object.assign(obj.style,styles);
    }
   
function addGif2(){
        var img = new Image();
        img.src="https://media2.giphy.com/media/BEob5qwFkSJ7G/giphy.gif" ;
        var obj = document.getElementById('body').appendChild(img);
    Object.assign(obj.style,styles);
    }
    
    



btn.addEventListener("click", clickHandler);
