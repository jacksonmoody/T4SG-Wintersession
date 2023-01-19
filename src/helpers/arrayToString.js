function arrayToString(arr) {

    if (Array.isArray(arr)) {
        if (arr.length > 0){
            let str = "";
            for (let i = 0; i < arr.length - 1; i++) {
                str += arr[i] + ", ";
            }
            str += arr[arr.length - 1];
    
            return str;
        }
        else {
            return "None";
        }
    }
    else {
        return arr;
    }
}

export default arrayToString;