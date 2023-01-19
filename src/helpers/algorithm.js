//This is a basic approach to ranking other users based on a certain user's preferences
//The preferences are an array of integers (i.e [1, 2, 3])
//The user is a JSON object with the following structure:
// {
//     uid: "123",
//     name: "John Doe",
//     authProvider: "google",
//     email: "",
//     description: "",
//     preferences: ["1", "2", "3"]
// }
//The algorithm will iterate through the preferences and check which users have the closest matches

function algorithm(currentUser, users) {
    const preferences = ["clubs", "intendedConcentrations", "cleanlinessLevel", "sleepTime", "hobbies", "roomLoudness", "typeOfPerson"];
    users.forEach(
        (user) => {
            user.score = 0;
            for (let i = 0; i < preferences.length; i++) {
                if (Array.isArray(currentUser[preferences[i]])) {
                    const length1 = currentUser[preferences[i]].length;
                    const length2 = user[preferences[i]].length;

                    for (let j = 0; j < length1; j++) {
                        for (let k = 0; k < length2; k++) {
                            if (currentUser[preferences[i][j]] == user[preferences[i][k]]) {
                                user.score += -1;
                            }
                        }
                        user.score += 1;
                    }
                    
                }
                if (typeof currentUser[preferences[i]] == "string") {
                    if (currentUser[preferences[i]] != user[preferences[i]]) {
                        user.score += 5;
                    }
                }

                else {
                    const difference = Math.abs(currentUser[preferences[i]] - user[preferences[i]]);
                    user.score += difference;
                }
            }
        }
    )
    users.sort((a, b) => a.score - b.score);
    return users;
}

export default algorithm;