var colors = [
    '#DFFF00',
    '#FFBF00',
    '#FF7F50',
    '#DE3163',
    '#9FE2BF',
    '#40E0D0',
    '#6495ED',
    '#CCCCFF',
    '#CD5C5C',
    '#F08080',
    '#FA8072',
    '#E9967A',
    '#FFA07A',
];

function getCardTemplate(color) {
    var cardTemplate = `
        <div class="card" data-color="${color}">
            <div class="card__color" style="background: ${color}"></div>
            <div class="card__color-code">
                <div>${color}</div>
                <div>rgba(${toRgba(color).join(', ')})</div>
            </div>
        </div>`;

    return cardTemplate;
}

function htmlToElement(html) {
    var template = document.createElement('template');
    template.innerHTML = html.trim();
    return template.content.firstChild;
}

function toRgba(color) {
    return [parseInt(color.slice(1, 3), 16), parseInt(color.slice(3, 5), 16), parseInt(color.slice(5), 16)];
}

_.sortBy(colors, (a, b) => {
    const [a1, a2, a3] = toRgba(a);
    const [b1, b2, b3] = toRgba('#FFFFFF');
    const [d1, d2, d3] = [a1 - b1, a2 - b2, a3 - b3];

    return Math.sqrt(Math.pow(d1, 2), Math.pow(d2, 2), Math.pow(d3, 2));
}).forEach(color => {
    var t = getCardTemplate(color);
    document.body.appendChild(htmlToElement(t));
});

let snakeBarTimeout = null;
function showSnakeBar() {
    if (snakeBarTimeout) {
        clearTimeout(snakeBarTimeout);
    }

    var x = document.getElementById("snackbar");
    x.className = "show";

    snakeBarTimeout = setTimeout(function () {
        x.className = x.className.replace("show", "");
        snakeBarTimeout = null;
    }, 3000);
}

function copyToClipboard(value) {
    var textarea = document.querySelector('#textarea');
    textarea.value = value;
    textarea.focus();
    textarea.select();
    return document.execCommand('copy');
}

document.body.addEventListener('click', (e) => {
    const card = e.target.closest('.card');

    if (!card) return;

    const color = card.getAttribute('data-color');
    if (copyToClipboard(color)) {
        showSnakeBar();
    }
})
