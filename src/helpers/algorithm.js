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