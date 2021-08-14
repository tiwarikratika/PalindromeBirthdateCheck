var birthDate = document.querySelector(".date");
var btn = document.querySelector(".btn");
var output = document.querySelector(".output");

var happy = document.querySelector(".img-1");
var sad = document.querySelector(".img-2");

happy.style.display = "none";
sad.style.display="none";

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
    addimg1();
     output.innerText = "Wow, Congratulations !! Your birthdate is a palindrome !!";
    
     }
     else{
        addimg2();
    output.innerText="Sorry !! Not a palindrome :( ";
   
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



function addimg1() {
    happy.style.display = "block";
}
   
function addimg2(){
    sad.style.display = "block";
    }
    
    



btn.addEventListener("click", clickHandler);
