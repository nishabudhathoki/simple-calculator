function simpleInterest(){
    var p,t,r,si;
        p=parseFloat(prompt("Enter Principle Amount:"));
        r=parseFloat(prompt("Enter the rate "));
        t=parseFloat(prompt("Enter the time"));
       si=(p*t*r)/100;
     document.write (" The simple Interest is :"+si);
       // document.getElementById("java").innerHTML=(p*t*r)/100;
    }
    function compoundInterest(){
      var p,t,r,ci,p2=0  ;
      p=parseFloat(prompt("Enter the principle amount:"));
      t=parseFloat(prompt("Enter the time :"));
      r=parseFloat(prompt("Enter the rate:"));
    if(t<=0.5)
    ci=(p*t*r)/100;
  
    else (t>=1)
    ci=(p*t*r)/100;
    p=p+ci;
    p2=p;
    ci=(p2*t*r)/100;
    
    document.write ("The compound interest is :" +ci);
    }