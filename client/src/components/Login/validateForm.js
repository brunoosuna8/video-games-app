export const validateForm = (obj) =>{
    const regExpPassword = /^(?=.*[A-Z])[a-zA-Z0-9]{5,10}$/;
    const regExpEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const regExpNames = /^[a-zA-Z]{3,20}$/;
    let result = {
        email:false,
        email2:false,
        password:false,
        password2:false,
        age:false,
        name:false,
        lastName:false,
        igualityEmail:false,
        igualityPw:false
    }

    if(regExpEmail.test(obj.email)){
        result[`email`] = true
        
    }else{
        
        result[`email`] = false
        
    }
    if(regExpEmail.test(obj.email2)){
        
        result.email2 = true
       

    }else{
        
        result.email2 = false
        
    }
    if(obj.email === obj.email2){
        result.igualityEmail = true
    }else{
        result.igualityEmail = false

        
    }
    if(regExpPassword.test(obj.password)){
        result.password = true
        
       

    }else{
        result.password = false

        
    }
    if(regExpPassword.test(obj.password2)){
        result.password2 = true
        
        


    }else{
        result.password2 = false
 
    }
    if(obj.password === obj.password2) 
    {result.igualityPw = true}
    else{
    result.igualityPw = false

    }
    if(regExpNames.test(obj.name)){
        result.name = true
       
    }else{
        result.name = false

    }
    if(regExpNames.test(obj.lastName)){
        result.lastName = true
    }else{
        result.lastName = false

    }
    if(obj.age >= 18){
        result.age = true
    }else{
        result.age = false
        
    }

    
    return result
}