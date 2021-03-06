const siteContent = {
  "nav": {
    "nav-item-0": 'GitHub',
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


// Example: Update the img src for the logo
// group h4 tags separately.





/* Element selector methods
document.getElementById
document.getElementsByClassName
document.getElementsByName
document.getElementsByTagName
document.querySelector
document.querySelectorAll
*/

/* List of elements captured in variables. */

let logoImg = document.getElementById("logo-img");
let header = document.querySelector('header');
let anchors = Array.from(document.getElementsByTagName('a'));
let ctaImg = document.getElementById('cta-img');
let button = document.getElementsByTagName('button');
let buttonText = Array.from(button);
let paragraphs = document.getElementsByClassName('text-content');
let pArr = Array.from(paragraphs);
let midImg = document.getElementsByClassName('middle-img')
let imgElement = Array.from(midImg)[0];
let ctaText = Array.from(document.getElementsByClassName('cta-text'));
let h4List = Array.from(document.getElementsByTagName('h4'));
let footerH = document.querySelector('section.contact h4');
let midH = Array.from(document.querySelectorAll('h4'));
let footerText = Array.from(document.querySelectorAll('footer > p'));
let infoSet = siteContent.footer.copyright ;
let contactText = Array.from(document.querySelectorAll('section.contact > p'));
let contactAddress = siteContent.contact.address ;
let contactPhone = siteContent.contact.phone ;
let contactEmail = siteContent.contact.email ;
let navBar = document.querySelectorAll('nav');
let gitLink = document.createElement('a');
let navItem = Array.from(document.querySelectorAll('div.container header nav'));



ctaText[0].innerHTML = 'DOM Is Awesome' ;
ctaText[0].style.fontFamily = 'Bangers' ;


/* ^ Not sure why the button isn't displaying, it was but something broke it, and I have no idea what. */

/* Header anchor tag variables */

anchors[0].innerHTML = 'Services';
anchors[1].innerHTML = 'Product' ;
anchors[2].innerHTML = 'Vision';
anchors[3].innerHTML = 'About' ;
anchors[4].innerHTML = 'Contact' ;
anchors[5].innerHTML = 'LinkedIn' ;
anchors[5].setAttribute('href', 'https://www.linkedin.com/in/lorenzo-evans-887364a7/');
gitLink.setAttribute('href', 'https://github.com/LorenzoEvans');
gitLink.innerHTML = 'GitHub' ;
navItem[0].prepend(gitLink);


/* Text-content variables */
let featTxt = siteContent["main-content"]["features-content"];

let aboutTxt = siteContent["main-content"]["about-content"];

let servText = siteContent["main-content"]["services-content"]; 

let prodText = siteContent["main-content"]["product-content"];

let visText = siteContent["main-content"]["vision-content"]; 

 pArr[0].innerHTML = featTxt ;
 pArr[1].innerHTML = aboutTxt ;
 pArr[2].innerHTML = servText ;
 pArr[3].innerHTML = prodText;
 pArr[4].innerHTML = visText ;

 /* For loop setting width on bottom three paragraphs. */
 for (let i = 2 ; i <= pArr.length - 1; i++){
   pArr[i].style.width = '27%' ; 
 }




/* Changes registered via DOM manipulation. */

/* LogoImg effects */

logoImg.src = 'img/logo.png';
logoImg.setAttribute('src', siteContent["nav"]["img-src"])

/* Header effects */

header.className = 'header-class'; // How to add class name to element.

ctaImg.src = 'img/header-img.png' ;



/* Middle image effects */

imgElement.src = 'img/mid-page-accent.jpg' ;


/* To Do

Add paragraph headers. 1 of 6 done.

Debug 'Get Started' button.


*/

// Experiment with .map/reduce/filter.


footerH.innerHTML = 'Contact';
footerText[0].innerHTML = infoSet ;
contactText[0].innerHTML = contactAddress ;
contactText[1].innerHTML = contactPhone ;
contactText[2].innerHTML = contactEmail ;

/* Console logs for testing variable accuracy.
console.log(gitLink);
console.log(contactPhone);
console.log(contactAddress);
console.log(contactText);
console.log(midH);
console.log(footerH);
console.log(infoSet);
console.log(footerText);
console.log(logoImg);
console.log(header)
console.log(anchors)
console.log(ctaImg)

console.log(paragraphs)
console.log(pArr) // Array of the array like object logged above it.
console.log(midImg)
*/

buttonText[0].innerHTML = 'Get Started.' ;
buttonText[0].style.fontFamily = 'Bangers' ;
buttonText[0].style.border = '1px solid black';
console.log(button)
console.log(buttonText[0])