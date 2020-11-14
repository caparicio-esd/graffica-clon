




let postsHTML = "";

for (let i = 0; i < grafficaData.posts.length; i++) {
    const post = grafficaData.posts[i];
    postsHTML += `
        <article class="post ${post.size}">
            <div class="post_picture">
                <img src="${post.picture}" alt="${post.title}">
            </div>
            <div class="post_content">
                <div class="category">${post.category}</div>
                <h3 class="title"><a href="${post.link}">${post.title}</a></h3>
                <div class="author">Por <span class="${post.author}">Gráffica</span><span class="fa fa-minus"></span>
                </div>
            </div>
        </article><!-- /post -->
    `;
}

document.querySelector('.posts').innerHTML = postsHTML;









const nums = [1, 5, 6, 7, 9];
let suma = 0; // 28

for (let i = 0; i < nums.length; i++) {
    suma += nums[i];
}


const sumaR = nums.reduce((suma, num) => {
    return suma + num;
}, 0);

const sumaR2 = nums.reduce((suma, num) => suma + num , 0);


suma; // 28



// const menuItems = [
//     'shop', 
//     'ilustración',
//     'typo', 
//     'branding', 
//     'packaging', 
//     'opinión', 
//     'gràffica+'
// ];

// tienda - ilustración - tipografía -...
let menuItemsAsString = ""; // "tienda - ilustración - tipografía - "

for (let i = 0; i < grafficaData.menuItems.length; i++) {
    menuItemsAsString += grafficaData.menuItems[i] + " - ";
}


let menuItemsAsP = "";

/**
<li>tienda</li>
<li>ilustración</li>
<li>tipografía</li>
...
*/

for (let i = 0; i < grafficaData.menuItems.length; i++) {
    menuItemsAsP += `
        <li><a href="#">${grafficaData.menuItems[i]}</a></li>
    `;
}

const ulPrueba = document.querySelector('.main_navigation ul');
ulPrueba.innerHTML = menuItemsAsP;











/**
 * 
 * EJ 9
 */

const numNat = [0, 3, 6, 2, 12, 5, 7, 21];
let max = 0; // 12
let min = 0;

for (let i = 0; i < numNat.length; i++) {
    if (numNat[i] >= max && numNat % 2 == 0) {
        max = numNat[i];
    }

    if (numNat[i] <= min) {
        min = numNat[i];
    }
}

const sortedNumNat = numNat.sort(); // [0, 2, 3, 5, 6, 7, 12, 21];
sortedNumNat[0]; 
sortedNumNat[sortedNumNat.length - 1]; 

const messageMax = `Un array con los siguientes valores: ${numNat}`



/**
 * 
 */

const numNatB = [0, 3, 6, 2, 12, 2, 5, 7, 21];
const repeated = false;
const repeatedNums = [];

for (let i = 0; i < numNatB.length; i++) {
    // numNatB[i];
    numNatB.filter(num => num == numNatB[i]).length > 1; // t
}




/**
 * 
 */
const randomArray = (min, max, amount) => {
    let arrayOut = [];
    for (let i = 0; i < amount; i++) {
        arrayOut.push(Math.floor(Math.random() * max + (max-min)));
    }
    return arrayOut;
};

randomArray(0, 100, 50);
