function oddEvenTest(request){
    if(request == "odd"){
        return function(n){
            console.log(!(n%2) == 0);
        }
    }
      else if(request == "even"){
       return function(n){
            console.log((n%2) == 0);
        }
      }
      else{
        console.log("wrong request");
      }
}
let request = "even";
let func = oddEvenTest(request);
func(55);//function(n)