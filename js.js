''

let clear = document.getElementById('clear')
    result = document.getElementById('result')
    buttons = document.getElementById('buttons')
    display = document.getElementById('display')


let btn;
function add_symbol(elem) {
    display.textContent += elem.textContent
}

for (let btn of buttons.children) {
    if (!btn.id) {
        btn.onclick = (event) => add_symbol(event.target);
    }
}

clear.onclick = () => display.textContent = '';
result.onclick = () => {
    display.textContent = eval(display.textContent)
};

del.onclick = () => {
    display.textContent = display.textContent.slice(0, -1)
};