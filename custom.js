window.addEventListener("load",()=>{
    document.querySelector("#gtslry").addEventListener("click", sayHello);
    });

function sayHello(){
    var bs=parseInt(document.querySelector("#basicsalary").value);
    var hra=bs*0.3;
    var da=bs*0.2;
    var ta=bs*0.1;
    var pf=bs*0.05;

    document.querySelector("#p1").innerText = `basic salary=${bs} House Rent Allowance=${hra} Daily Allowance=${da} ta=${ta} PF=${pf}`;

     var gs=bs+hra+da+ta-pf;
     document.querySelector("#p2").innerText = `Rupees ${gs}`;

     
     var tax;
     if(gs>5000 && gs<8000){
          tax=gs*0.2;
     }
     else if(gs>9000){
         tax=gs*0.3;
     }
     document.querySelector("#p3").innerText = `Rupees ${tax}`;

     var ns=gs-tax;
     document.querySelector("#p4").innerText = `Rupees ${ns}`;


}