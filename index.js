const nameInput = document.getElementById('name');
const button = document.getElementById('button-blue');
let name = nameInput.value;

const sendComment = (name, url = 'https://yandex.ru/images/search?img_url=https%3A%2F%2Fsun9-45.userapi.com%2Fimpg%2FUxgrTraz0nkYojwMX7u05Nb6lgPBx76Af5BLCA%2Fm0qujw7FsLo.jpg%3Fsize%3D980x980%26quality%3D95%26sign%3D5eb7602756de17bcc4f75b8696180e36%26c_uniq_tag%3DNwB39wn3OXkcN8XzVAhooKgyd5JqE8-Ce2zW9Elz69s%26type%3Dalbum&lr=10716&pos=4&rpt=simage&source=serp&text=%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0%20%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F', comment = 'User hasnt sent any message') => {
    console.log(name);
    console.log(url);
};

button.onclick = sendComment;