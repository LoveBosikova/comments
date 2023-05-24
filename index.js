const form = document.getElementById('form1');
const anonimus = document.getElementById('hideName');
//Edit name

const editName = (str) => {
    console.log(anonimus.checked);
    if (anonimus.checked) {
        rightCaseName = 'Username';
        return rightCaseName;
    }
    else {
        let rightCaseName = str.trim();
        rightCaseName = (rightCaseName[0].toUpperCase() + rightCaseName.slice(1).toLowerCase());
        return rightCaseName;
    }
};

//Censor comment
const censor = (str) => {

        const words = str.trim().split(' ');
        const cenzoredWords = [];

        for (let word of words) {
            if (word.toLowerCase() === 'viagra') {
                cenzoredWords.push('***');
            }
            else if (word.toLowerCase() === 'xxx') {
                cenzoredWords.push('***')
            }
            else {
                cenzoredWords.push(word);
            }
        }
        const censoredComment = cenzoredWords.join(' ');
        return censoredComment;
};

// Add posting time

const getDate = () => {
    let date = new Date;
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const strTime = `${hour}:${minutes}`;

    return strTime;
}

// Create rendom photo

const setRandomPhoto = () => {
    const photos = ['https://e7.pngegg.com/pngimages/51/949/png-clipart-smiley-computer-icons-emoticon-wink-smiley-miscellaneous-face.png',
'https://w7.pngwing.com/pngs/253/894/png-transparent-computer-icons-smiley-emoticon-laughter-smile-face-people-smiley.png',
'https://w7.pngwing.com/pngs/72/399/png-transparent-computer-icons-smiley-smiley.png', 
'https://w7.pngwing.com/pngs/818/393/png-transparent-emoticon-face-with-tears-of-joy-emoji-smiley-computer-icons-emoji-love-smiley-sadness.png',
'https://e7.pngegg.com/pngimages/110/655/png-clipart-smiley-emoji-computer-icons-happiness-smiley-miscellaneous-smiley.png'];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

const randomIndex = getRandomInt(5);
console.log(photos[2]);

return photos[randomIndex];

};

// Create comment html structure

const createHTML = (userName, link, text) => {
    const htmlElements = [];
    htmlElements.push('<div class="comment">');

    let srcSrtring = `<img class="userphoto" src="${link}" alt="userLogo">`;
    htmlElements.push(srcSrtring);
    let userNameString = `<strong class='userHeader'>${userName}</strong>`;
    htmlElements.push(userNameString);
    let commentString =`<p class='comment-content'>${text}</p>`;
    htmlElements.push(`${commentString}`);
    const currentTime = getDate();
    htmlElements.push(`<div class='posttime'>${currentTime}</div>`);
    htmlElements.push(`</div>`);

    return htmlElements.join('');
};
//структура комментария
// <div class="comment">
//   <img class="userphoto" src="" alt="userLogo">
//   <div class="text"> есть 
//     <strong class='userHeader'></p>
//     <p class='comment-content'></p>
//   </div>
//   <div class='posttime'></div>
// </div>

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const name = formData.get('name');
    let url = formData.get('url');

    // Check if user hasnt photo loaded
    if (url.length === 0) {
        url = setRandomPhoto();
    }

    const comment = formData.get('comment'); 
    const comments = document.getElementById('comments');

    const editedName = editName(name);
    const censoredComment = censor(comment);
    const newCommentHTML = createHTML(editedName, url, censoredComment);

    const divForComment = document.createElement('div');
    divForComment.innerHTML = newCommentHTML;

    comments.prepend(divForComment);

});