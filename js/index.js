const siteContent = { 
  "nav": {
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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', 'img/logo.png')


// let entirePage = document.querySelector('html');
// entirePage.append(siteContent);
// console.log(entirePage)

let container = document.getElementsByClassName('container');
// console.log(container);

let header = document.getElementsByTagName('header');

let navBar = document.getElementsByTagName('nav');
// console.log(navBar);
let navArr = Array.from(navBar);
// console.log(navArr);

let anchorTags = document.getElementsByTagName('a');
let anchorArr = Array.from(anchorTags);
anchorArr[0].textContent =  'Service'
anchorArr[1].textContent = 'Product';
anchorArr[2].textContent = 'Vision';
anchorArr[3].textContent = 'Features';
anchorArr[4].textContent = 'Contact';

console.log(anchorTags);
console.log(anchorArr);

//cta section
let cta = document.getElementsByClassName('cta');
let ctaText = document.getElementsByClassName('cta-text');
let ctaTextH1 = document.querySelector('.cta .cta-text h1');
let ctaTextButton = document.querySelector('.cta .cta-text button');
ctaTextH1.innerHTML = 'DOM<br> Is<br> Awesome';
ctaTextButton.textContent = 'Get Started';

let logoImg = document.getElementById('cta-img');
logoImg.src = 'img/header-img.png';

//top-content section
let topContentF = document.querySelector('.top-content .text-content h4');
let topContentP = document.querySelector('.top-content .text-content p')
topContentF.textContent = 'Features';
topContentP.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
let topContentA = document.querySelectorAll('.top-content .text-content h4')[1];
let topContentAP = document.querySelectorAll('.top-content .text-content p')[1];
topContentA.textContent = 'About';
topContentAP.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

// let middleImg = document.querySelectorAll('.middle-img');
// middleImg.src = 'img/mid-page-accent.jpg';

// bottom content
let bottomContentS = document.querySelectorAll('.bottom-content .text-content h4')[0];
let bottomContentP = document.querySelectorAll('.bottom-content .text-content h4')[1];
let bottomContentV = document.querySelectorAll('.bottom-content .text-content h4')[2];
let bottomContentSP = document.querySelectorAll('.bottom-content .text-content p')[0];
let bottomContentPP = document.querySelectorAll('.bottom-content .text-content p')[1];
let bottomContentVP = document.querySelectorAll('.bottom-content .text-content p')[2];
bottomContentS.textContent = 'Services';
bottomContentSP.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
bottomContentP.textContent = 'Product';
bottomContentPP.textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
bottomContentV.textContent = 'Vision';
bottomContentVP.textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

// contact
let contactH4 = document.querySelector('.contact h4');
let contactP1 = document.querySelectorAll('.contact p')[0];
let contactP2 = document.querySelectorAll('.contact p')[1];
let contactP3 = document.querySelectorAll('.contact p')[2];
contactH4.textContent = 'Contact';
contactP1.innerHTML = '123 Way 456 Street<br> Somewhere, USA';
contactP2.textContent = '1 (888) 888-8888';
contactP3.textContent = 'sales@greatidea.io';

//footer
let footer = document.querySelector('footer');
footer.textContent = 'Copyright Great Idea! 2018';