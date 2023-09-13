export const orderByPrice = (order,array) =>{
    let newArray = [...array]
   
    newArray.sort((a, b) => {
        
      
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      return newArray
   
    
}