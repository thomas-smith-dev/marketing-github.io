

// Import these codes and move to untracked file
// Once moved delete these keys and create new ones and secure
const client_id = "Iv1.b7fc4830e136865c";
const client_secret= "c6ce89b306bfda1fe93152f19cfbf8666c5a1a15";

const getUsers = async (user) => {
    const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret${client_secret}`);

    const data = await api_call.json();

    return { data: data };
};