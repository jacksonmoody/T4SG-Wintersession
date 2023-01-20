export function bedtimeConverter(num) {
    if (num < 4) {
        return "Early Bird";
    } else if (num < 8) {
        return "Average Bedtime";
    } else {
        return "Night Owl";
    }
}

export function roomLoudnessConverter(num) {
    if (num <= 2){
        return "Very quiet";
    }
    else if (num <= 4){
        return "Quiet";
    }
    else if (num <= 6){
        return "Moderate";
    }
    else if (num <= 8){
        return "Loud";
    }
    else {
        return "Very loud";
    }
}

export function lookingForGroupConverter(status) {
    if (status === true) {
        return "Looking for group";
    }
    else{
        return "Looking for blockmates";
    }
}

export function cleanlinessLevelConverter(num) {

    if (num < 3) {
        return "Messy";
    } else if (num < 7) {
        return "Moderate";
    } else {
        return "Clean";
    }
}   

export function typeOfPersonConverter(num) {
    if (num < 3) {
        return "Introverted";
    }
    else if (num < 7) {
        return "Ambivert";
    }
    else {
        return "Extroverted";
    }
}

