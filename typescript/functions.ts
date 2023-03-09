    function addNum(num:number):number{   //we have to mesion type of parameter otherwise it will be by default (any) type
        // num.toLowerCase()  //error
        return num+2;
    }
    addNum(5);



  function getUpperCase(val:string){
    return val.toUpperCase();
  }
//   getUpperCase(6) //error
    getUpperCase("rahul"); //correct
    function signUpUser(name: string, email: string, isPaid: boolean){}

    let loginUser = (name: string, email: string, isPaid: boolean = false) => {}
    
    signUpUser("Rahul", "rahul@gmail.com", false)
    loginUser("h", "h@h.com")
    
    // function getValue(myVal: number): boolean{
    //     if (myVal > 5) {
    //         return true
    //     }
    //     return "200 OK"
    // }
    
    const getHello = (s: string):string => {
        return ""
    }
    
    const heros = ["thor", "spiderman", "ironman"]
    // const heros = [1, 2, 3]
    
    heros.map((hero): string => {
        return `hero is ${hero}`
    })
    
    // void type to not return anything
    function consoleError(errmsg: string): void{
        console.log(errmsg);
        
    }

    // never type to handle errors
    function handleError(errmsg: string): never{
        throw new Error(errmsg);
        
    }








export {}