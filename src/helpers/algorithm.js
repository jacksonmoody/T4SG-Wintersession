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
                        const currentUserArray = currentUser[preferences[i]];
                        const otherUserArray = user[preferences[i]];
                        for (let k = 0; k < length2; k++) {
                            if (currentUserArray[j] === otherUserArray[k]) {
                                user.score += -10;
                            }
                        }
                        user.score += 1;
                    }

                }
                else if (typeof currentUser[preferences[i]] == "string") {
                    if (currentUser[preferences[i]] !== user[preferences[i]]) {
                        user.score += 10;
                    }
                }

                else {
                    const difference = Math.abs(currentUser[preferences[i]] - user[preferences[i]]);
                    user.score += difference;
                }
            }
            if (user.numBlockmates + currentUser.numBlockmates > 8) {
                user.score += 1000;
            }
        }
    )
    users.sort((a, b) => a.score - b.score);

    for (let i = 0; i < users.length; i++) {
        if (users[i].uid === currentUser.uid) {
            users.splice(i, 1);
        }
    }

    return users;
}

export default algorithm;