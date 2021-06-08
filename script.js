// https://codepen.io/onlyveen/pen/rwvKqb
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
    
    // new

//    "#ED5565", "#DA4453", "#FC6E51", "#E9573F", "#FFCE54", "#FCBB42", "#A0D468", "#8CC152", "#48CFAD", "#37BC9B", "#4FC1E9", "#3BAFDA", "#5D9CEC", "#4A89DC", "#AC92EC", "#967ADC", "#EC87C0", "#D770AD", "#F5F7FA", "#E6E9ED", "#CCD1D9", "#AAB2BD", "#656D78", "#434A54",
//    "#D8334A", "#ED5565", "#FC6E51", "#FFCE54", "#E8CE4D", "#A0D468", "#48CFAD", "#A0CECB", "#4FC1E9", "#5D9CEC", "#8067B7", "#AC92EC", "#EC87C0", "#F5F7FA", "#CCD1D9", "#656D78", "#3C3B3D",

    
];

// colors = `#ff6659,#ff6154,#ff5c4f,#ff574a,#ff5245,#fe4d40,#f9483b,#f44336,#ef3e31,#ea392c,#e53427,#e02f22,#db2a1d,#d62518,#d12013,#FF4186,#FF3C81,#FF377C,#FD3277,#F82D72,#F3286D,#EE2368,#E91E63,#E4195E,#DF1459,#DA0F54,#D50A4F,#D0054A,#CB0045,#C60040,#bf4ad3,#ba45ce,#b540c9,#b03bc4,#ab36bf,#a631ba,#a12cb5,#9c27b0,#9722ab,#921da6,#8d18a1,#88139c,#830e97,#7e0992,#79048d,#8a5dda,#8558d5,#8053d0,#7b4ecb,#7649c6,#7144c1,#6c3fbc,#673ab7,#6235b2,#5d30ad,#582ba8,#5326a3,#4e219e,#491c99,#441794,#6274d8,#5d6fd3,#586ace,#5365c9,#4e60c4,#495bbf,#4456ba,#3f51b5,#3a4cb0,#3547ab,#3042a6,#2b3da1,#26389c,#213397,#1c2e92,#44b9ff,#3fb4ff,#3aafff,#35aaff,#30a5ff,#2ba0fd,#269bf8,#2196f3,#1c91ee,#178ce9,#1287e4,#0d82df,#087dda,#0378d5,#0073d0,#26ccff,#21c7ff,#1cc2ff,#17bdff,#12b8ff,#0db3fe,#08aef9,#03a9f4,#00a4ef,#009fea,#009ae5,#0095e0,#0090db,#008bd6,#0086d1,#23dff8,#1edaf3,#19d5ee,#14d0e9,#0fcbe4,#0ac6df,#05c1da,#00bcd5,#00b7d0,#00b2cb,#00adc6,#00a8c1,#00a3bc,#009eb7,#0099b2,#23b9ab,#1eb4a6,#19afa1,#14aa9c,#0fa597,#0aa092,#059b8d,#009688,#009183,#008c7e,#008779,#008274,#007d6f,#00786a,#007365,#6fd273,#6acd6e,#65c869,#60c364,#5bbe5f,#56b95a,#51b455,#4caf50,#47aa4b,#42a546,#3da041,#389b3c,#339637,#2e9132,#298c2d,#aee66d,#a9e168,#a4dc63,#9fd75e,#9ad259,#95cd54,#90c84f,#8bc34a,#86be45,#81b940,#7cb43b,#77af36,#72aa31,#6da52c,#68a027,#f0ff5c,#ebfa57,#e6f552,#e1f04d,#dceb48,#d7e643,#d2e13e,#cddc39,#c8d734,#c3d22f,#becd2a,#b9c825,#b4c320,#afbe1b,#aab916,#ffff5e,#ffff59,#ffff54,#ffff4f,#fffa4a,#fff545,#fff040,#ffeb3b,#fae636,#f5e131,#f0dc2c,#ebd727,#e6d222,#e1cd1d,#dcc818,#ffbb23,#ffb61e,#ffb119,#ffac14,#ffa70f,#ffa20a,#ff9d05,#ff9800,#fa9300,#f58e00,#f08900,#eb8400,#e67f00,#e17a00,#dc7500,#ff7a45,#ff7540,#ff703b,#ff6b36,#ff6631,#ff612c,#ff5c27,#ff5722,#fa521d,#f54d18,#f04813,#eb430e,#e63e09,#e13904,#dc3400,#9c786b,#977366,#926e61,#8d695c,#886457,#835f52,#7e5a4d,#795548,#745043,#6f4b3e,#6a4639,#654134,#603c2f,#5b372a,#563225,#c1c1c1,#bcbcbc,#b7b7b7,#b2b2b2,#adadad,#a8a8a8,#a3a3a3,#9e9e9e,#999999,#949494,#8f8f8f,#8a8a8a,#858585,#808080,#7b7b7b,#83a0ae,#7e9ba9,#7996a4,#74919f,#6f8c9a,#6a8795,#658290,#607d8b,#5b7886,#567381,#516e7c,#4c6977,#476472,#425f6d,#3d5a68`.split(',');
// colors = generateColors();
function getCardTemplate(color) {
    var cardTemplate = `
        <div class="card" data-color="${color}">
            <div class="card__color" style="background: ${color}"></div>
            <div class="card__color-code" style="color: ${color}">
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

_.sortBy(colors, (a) => {
    const [a1, a2, a3] = toRgba(a);
    const [b1, b2, b3] = toRgba('#FFFFFF');
    const [d1, d2, d3] = [b1 - a1, b2 - a2, b3 - a3];
    return 1;
    return (a1 * 1000000) + (a2 * 1000) + a3;
    return Math.sqrt(Math.pow(d1, 2), Math.pow(d2, 2), Math.pow(d3, 2));
}).forEach(color => {
    var cards = document.querySelector('.cards');
    var t = getCardTemplate(color);
    cards.appendChild(htmlToElement(t));
});

let snakeBarTimeout = null;
function showSnakeBar(color) {
    if (snakeBarTimeout) {
        clearTimeout(snakeBarTimeout);
    }

    var x = document.getElementById("snackbar");
    x.className = "show";
    x.style.background = color;

    snakeBarTimeout = setTimeout(function () {
        x.className = x.className.replace("show", "");
        snakeBarTimeout = null;
    }, 2000);
}

function copyToClipboard(value) {
    var textarea = document.querySelector('#textarea');
    textarea.value = value;
    textarea.focus();
    textarea.select();
    return document.execCommand('copy');
}

document.body.addEventListener('click', (e) => {
    if (!e.target.classList.contains('card__color')) {
        return;
    }

    const card = e.target.closest('.card');
    if (!card) return;

    const color = card.getAttribute('data-color');
    if (copyToClipboard(color)) {
        showSnakeBar(color);
    }
})

function generateColors() {
    const colors = [];
    const rs = getHexArray();
    const gs = getHexArray();
    const bs = getHexArray();

    rs.forEach((r) => {
        gs.forEach((g) => {
            bs.forEach((b) => {
                colors.push(`#${r}${g}${b}`.toUpperCase());
            });
        });
    });

    return colors;
}

function getHexArray() {
    return Array.from({length: 256}, (_, i) => i.toString(16).padStart(2, 0));
}
