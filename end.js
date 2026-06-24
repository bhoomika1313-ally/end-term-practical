function CheckPrime() {
    let n = Number(document.getElementById("noInput").value);
    let prime = true;
    if (n<=1) {
        prime = false;
    } else {
        for(let i = 2; i<=n/2; i++){
            if(n%i==0){
                prime = false;
                break;
            
            }
        }
    }
    if(prime) {
        document.getElementById("result").innerHTML = n + "  is a prime number";
    } else {
        document.getElementById("result").innerHTML = n + " is not a prime number";
    }
    }
    
    
