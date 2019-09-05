const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

const Logo2 = document.querySelector("#cta-img");
Logo2.setAttribute("src", siteContent["cta"]["img-src"]);

let Logo3 = document.querySelector("#middle-img");
Logo3.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

let Nav = document.querySelectorAll("nav a");

Nav[0].innerHTML = siteContent.nav["nav-item-1"];
Nav[1].innerHTML = siteContent.nav["nav-item-2"];
Nav[2].innerHTML = siteContent.nav["nav-item-3"];
Nav[3].innerHTML = siteContent.nav["nav-item-4"];
Nav[4].innerHTML = siteContent.nav["nav-item-5"];
Nav[5].innerHTML = siteContent.nav["nav-item-6"];

let CTA_h1 = (document.querySelector(".cta-text h1").innerHTML =
  "DOM<br>Is<br>Awesome<br>");

let CTA_Btn = (document.querySelector(".cta-text button").innerHTML =
  "Get Started");

let toptext = document.querySelectorAll(".top-content .text-content p");

toptext[0].innerText = siteContent["main-content"]["features-content"];

let toph4 = document.querySelectorAll(".top-content .text-content h4");
toph4[0].innerText = siteContent["main-content"]["features-h4"];

toph4[1].innerText = siteContent["main-content"]["about-h4"];

toptext[1].innerText = siteContent["main-content"]["about-content"];

let bottext = document.querySelectorAll(".bottom-content .text-content p");
let both4 = document.querySelectorAll(".bottom-content .text-content h4");

bottext[0].innerText = siteContent["main-content"]["services-content"];
both4[0].innerText = siteContent["main-content"]["services-h4"];

bottext[1].innerText = siteContent["main-content"]["product-content"];
both4[1].innerText = siteContent["main-content"]["product-h4"];

bottext[2].innerText = siteContent["main-content"]["vision-content"];
both4[2].innerText = siteContent["main-content"]["vision-h4"];

let contactsectionh4 = document.querySelector(".contact h4");
let contactsectionp = document.querySelectorAll(".contact p");

contactsectionh4.innerText = siteContent.contact["contact-h4"];
contactsectionp[0].innerHTML = "<p>123 Way 456 Street<br>Somewhere, USA</p>";
contactsectionp[1].innerText = siteContent.contact.phone;
contactsectionp[2].innerText = siteContent.contact.email;

let footerp = document.querySelector("footer p");

footerp.innerText = siteContent.footer.copyright;
