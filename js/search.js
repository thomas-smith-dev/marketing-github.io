const userInput = document.querySelector('input');
const searchBtn = document.querySelector('.search-github');
const name = document.querySelector('.name');
const avatar = document.querySelector('.avatar');
const user = document.querySelector('.user-name');
const company = document.querySelector('.company');
const repos = document.querySelector('.repos');
const url = document.querySelector('.url');


const videoContainer = document.querySelector('.video-container');
const searchResults = document.querySelector('.search-results');
const searchAgain = document.querySelector('.search-again');
const footerContent = document.querySelector('.footer-content');

// Import these codes and move to untracked file
// Once moved delete these keys and create new ones and secure
const client_id = "Iv1.b7fc4830e136865c";
const client_secret= "c6ce89b306bfda1fe93152f19cfbf8666c5a1a15";

const getUsers = async (user) => {
    const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret${client_secret}`);

    const data = await api_call.json();

    return { data: data};
};

const showResults = () => {
    getUsers(userInput.value).then((results) => {
        // console.log(results);
        videoContainer.classList.add('hide');
        videoContainer.classList.remove('show');
        searchResults.classList.add('show');
        searchResults.classList.remove('hide');
        searchAgain.classList.add('show');
        searchAgain.classList.remove('hide');
        footerContent.classList.add('show');
        footerContent.classList.remove('hide');

        avatar.innerHTML = `<img src="${results.data.avatar_url}" alt="Github User Avatar">`;
        name.innerHTML = `Name: <span>${results.data.name}</span>`;
        user.innerHTML = `User: <span>${results.data.login}</span>`;
        company.innerHTML = `Company: <span>${results.data.company}</span>`;
        repos.innerHTML = `Repos: <span>${results.data.public_repos}</span>`;
        url.innerHTML = `URL: <a class="url" href="${results.data.html_url}" target="_blank"><span>${results.data.html_url}</span></a>`;
    });
};



searchBtn.addEventListener('click', () => {
    showResults();
});





// REGEX (/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i)
