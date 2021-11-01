const fs = require("fs");
let data = JSON.parse(fs.readFileSync("hw3/task2/data.json", "utf8"));
//console.log(data);
const removeDuplicates = (data) => {
    data.map((elem)=>elem.unique = true);
    const isObj = (val)=> {
        return typeof val === "object" && val!==null;
    }
    const areEqual = (obj1, obj2) => {
        if(Object.keys(obj1).length !== Object.keys(obj2).length){
            return false;
        }
        for(let key in obj1){
            if(isObj(obj1[key])&&isObj(obj2[key])){
                areEqual(obj1[key], obj2[key]);
            }
            if(!isObj(obj1[key])&&!isObj(obj2[key])&&obj1[key] !== obj2[key]){
                return false;
            }
        }
        return true;
    }
    for(let i = 0; i < data.length-1; i++){
        for(let j = i+1; j < data.length; j++){            
            if(areEqual(data[i], data[j])){
                data[j]["unique"] = false;
            }    
        }
    }
    let dataUnique = data.filter((elem) => elem.unique===true);
    dataUnique.map((elem)=> delete elem["unique"]);
    return dataUnique;
}
console.log(removeDuplicates(data));
