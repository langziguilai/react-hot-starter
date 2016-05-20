export class ClassName{
	constructor(...args) {
       this.nameArr=[];
       for(let arg of args){
       	   if('string' == typeof(arg)){
       	   	  if(false==isInStrArray(this.nameArr,arg)){
                 this.nameArr.push(arg);
       	   	  }
       	   	  continue;
       	   }
       	   if(true==Array.isArray(arg)){
              for(let item of arg){
              	 if('string'== typeof(item)){
              	 	if(false==isInStrArray(this.nameArr,arg)){
                       this.nameArr.push(item);
       	   	        }
              	 }
              }
              continue;
       	   }
           if(null==arg || undefined==arg){
           	  continue;
           }
           for(let key in arg){
           	  if(true==arg[key]){
           	  	 if(false==isInStrArray(this.nameArr,arg)){
                    this.nameArr.push(key);
       	   	     }
           	  }
           }
       }
	}
	append(classNameObj){
        if(classNameObj.constructor==ClassName){
            return new ClassName(this.nameArr,classNameObj.nameArr);
        }else{
        	console.log("error parameter for ClassName.append()");
        	return this;
        }
        
	}
	toString(){
        return this.nameArr.join(" ");
	}
}

function isInStrArray(strArr,str){
	if(true==Array.isArray(strArr)){
         for(let item in strArr){
         	if(item==str){
               return true;
         	}
         }
	}
	return false;
}