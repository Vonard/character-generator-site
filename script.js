let firstNameMale = ['Максим', 'Иван', 'Серафим', 'Роберт', 'Марк', 'Никита', 'Дмитрий', 'Роман'];
let firstNameFemale = ['Анастасия', 'Диана', 'Мария', 'Елизавета', 'Земфира', 'Илона', 'Карина', 'Надежда'];
let surnameMale = ['Лебедев', 'Иванов', 'Никишин', 'Пономарёв', 'Пархоменко', 'Титов'];
let surnameFemale = ['Александрова', 'Антонова', 'Эмирова', 'Серебрянская', 'Рубенцова', 'Пахмутова'];
let profession = ['Строитель', 'Химик', 'Учитель', 'Уборщик', 'Программист', 'Инженер'];
let createButton = document.querySelector('#create');
let result = document.querySelector('.result');
let randomFirstName
let randomSurname 
let randomProfession 
createButton.addEventListener('click', function(){
    let gender = document.querySelector(".checkbox");
    if (gender.checked) {
        randomFirstName = firstNameFemale[Math.floor(Math.random() * firstNameFemale.length)];
        randomSurname = surnameFemale[Math.floor(Math.random() * surnameFemale.length)];
    } else {
        randomFirstName = firstNameMale[Math.floor(Math.random() * firstNameMale.length)];
        randomSurname = surnameMale[Math.floor(Math.random() * surnameMale.length)];
    }
    randomProfession = profession[Math.floor(Math.random() * profession.length)];
    let character = {
        "name": randomFirstName,
        "surname": randomSurname,
        "profession": randomProfession
    };
    let div = document.createElement('div');
    for(let key in character) {
        let p = document.createElement('p');
        p.innerHTML = `${key}: ${character[key]}`
        div.append(p);
    }
    result.append(div);
})