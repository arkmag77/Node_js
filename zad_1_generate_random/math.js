export function randomNumber(min, max) {

    let result;

    min = Math.ceil(min);
    max = Math.floor(max);

    result = Math.floor(Math.random() * (max - min)) + min;

    return result;

}

export function randomChar(num) {

    let text = "";
    let collection= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  
    for (let i = 0; i < num; i++) {
      text += collection.charAt(Math.floor(Math.random() * collection.length));
    }

    return text;

  }

  export function randomArr(min, max, num) {

    let array = [];
    let result;
  
    for (let i = 0; i < num; i++) {
        result = Math.floor(Math.random() * (max - min)) + min;
        array.push(result);
    }

    return array;

  }
