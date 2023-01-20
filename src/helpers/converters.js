export function bedtimeConverter(num) {
    if (num < 4) {
        return "Early Bird";
    } else if (num < 8) {
        return "Average Bedtime";
    } else {
        return "Night Owl";
    }
}

