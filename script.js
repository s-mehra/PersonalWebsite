let toggle = document.querySelector('#dark-mode-toggle');
let header = document.querySelector('header');
let btn = document.querySelector('.btn');

toggle.addEventListener('click', () => {
    if (toggle.checked) {
        header.style.setProperty('background', '#253A52');
        document.body.style.setProperty('background','#253A52');
        header.style.setProperty('color', '#FFFFE3');
        document.body.style.setProperty('color','#FFFFE3');
        btn.style.setProperty('background', '#A9FE75');
        btn.style.setProperty('color', '#253A52');
        document.querySelector('.project-work').style.setProperty('color', '#A9FE75');
        document.querySelector('.toggle-switch-dot').style.setProperty('background','#FFFFE3');
        document.querySelector('.toggle-switch-border').style.borderColor =  '#FFFFE3';

    } else {
        header.style.setProperty('background', '#FFFFE3');
        document.body.style.setProperty('background','#FFFFE3');
        header.style.setProperty('color', '#253A52');
        document.body.style.setProperty('color','#253A52');
        btn.style.setProperty('background', '#1348DA');
        btn.style.setProperty('color', '#FFFFE3');
        document.querySelector('.project-work').style.setProperty('color', '#1348DA');
        document.querySelector('.toggle-switch-dot').style.setProperty('background','#253A52');
        document.querySelector('.toggle-switch-border').style.borderColor =  '#253A52';
    }
    
});
