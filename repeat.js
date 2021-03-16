function customPrint(n,message) {
    if (n < 0) {
      return "";
    }
    if (n === 1) {
      return message;
    }
    else {
      return `${message}\n${ customPrint(n-1,message)}` 
    }
  }
console.log(customPrint(5, "Hello,World"));