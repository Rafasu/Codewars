function nbDig(n, d) {
    let ocurrences = 0;
    for (let i = 0; i <= n; i++){
      const squaredNumberArray = (String(i*i)).split("");
      squaredNumberArray.forEach((digit)=>{
        if (digit == d) { ocurrences++ ;}
      });
    }
    return ocurrences;                      
  }