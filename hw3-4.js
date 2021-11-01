String.prototype.removeSpecialCharacters=function(){
    return this.replace(/[^a-zA-Z ]/g, "");
  };

  console.log('HE!!LL??OO'.removeSpecialCharacters());