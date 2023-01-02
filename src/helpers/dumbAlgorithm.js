//This is a dumb approach to ranking other users based on a certain user's preferences
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

function dumbAlgorithm(preferences, users) {
    users.forEach(
        (user) => {
            user.score = 0;
            for (let i = 0; i < preferences.length; i++) {
                if (preferences[i] === user.preferences[i]) {
                    user.score += 1;
                }
            }
        }
    )
    users.sort((a, b) => b.score - a.score);
    return users;
}

export default dumbAlgorithm;