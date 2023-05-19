const form = document.getElementById('form1');
//Edit name
const editName = (str) => {
    let rightCaseName = str.trim();
    rightCaseName = (rightCaseName[0].toUpperCase() + rightCaseName.slice(1).toLowerCase());
    return rightCaseName;
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

// Create comment html structure

const createHTML = (userName, link, text) => {
    const htmlElements = [];
    htmlElements.push('<div class="comment">');

    let srcSrtring = `<img src="${link}" alt="userLogo">`;
    htmlElements.push(srcSrtring);
    htmlElements.push(`<div class="text">`)
    let userNameString = `<strong class='userHeader'>${userName}</p>`;
    htmlElements.push(userNameString);
    let commentString =`<p class='comment-content'>${text}</p>`;
    htmlElements.push(commentString);
    htmlElements.push(`</div></div>`);

    return htmlElements.join('');
};
//структура комментария
// <div class="comment"> есть в массиве
//   <img src="" alt="userLogo"> есть
//   <div class="text"> есть 
//     <strong class='userHeader'></p>усть 
//     <p class='comment-content'></p>tcnm
//   </div>
// </div>

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const name = formData.get('name');
    const url = formData.get('url');
    const comment = formData.get('comment'); 
    const comments = document.getElementById('comments');

    //Its an edited name
    const editedName = editName(name);
    const censoredComment = censor(comment);
    const newCommentHTML = createHTML(editedName, url, censoredComment);
    comments.innerHTML = newCommentHTML;
    console.log(comments.innerHTML);

});