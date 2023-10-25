// "use strict"

// console.log(this)

// function thiss(){
//     console.log(this)

// }
// thiss()

let obj = {
   firstname:'konain',
   lastname:'kasab',
   show:function(){
   this.fullname()
    
   },
   fullname : function(){

    return this.firstname + " " + this.lastname
   }
   
}


// console.log(obj.fullname())