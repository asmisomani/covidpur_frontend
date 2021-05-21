

function checkPhone(txt){
    
    var reg=/^[1-9]{1}[0-9]{9}$/
       if(reg.test(txt)===false)
           return false
          else if 
           (reg.length>10) {
               return false
           }
          
           else
         return true
            }
   
   
   
   export {checkPhone}