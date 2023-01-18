function arrayToString(arr) {

    if (Array.isArray(arr)) {
        let str = "";
        for (let i = 0; i < arr.length - 1; i++) {
            str += arr[i] + ", ";
        }
        str += arr[arr.length - 1];

        return str;
    }
    else {
        return arr;
    }
}

export default arrayToString;