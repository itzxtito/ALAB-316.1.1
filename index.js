



//Part 1
// 1. Select and cache the <main> element
const mainEl = document.querySelector("main");

// 2. Set the background color using the CSS custom property
mainEl.style.backgroundColor = "var(--main-bg)";

// 3. Set the content of mainEl to <h1>DOM Manipulation</h1>
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

// 4. Add a class of flex-ctr to mainEl
mainEl.classList.add("flex-ctr");


//Part 2
// 1. Select and cache the <nav id="top-menu"> element
const topMenuEl = document.getElementById("top-menu");

// 2. Set the height of topMenuEl to 100%
topMenuEl.style.height = "100%";

// 3. Set the background color using the CSS custom property
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// 4. Add a class of flex-around to topMenuEl
topMenuEl.classList.add("flex-around");


//Part 3
// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];
  
  // 1. Select and cache the <nav id="top-menu"> element
  const topMenuEl1 = document.getElementById("top-menu");
  
  // 2. Iterate over the menuLinks array
  menuLinks.forEach(link => {
    // 3. Create a new <a> element
    const aEl = document.createElement("a");
  
    // 4. Set the href attribute
    aEl.setAttribute("href", link.href);
  
    // 5. Set the content to the text property
    aEl.textContent = link.text;
  
    // 6. Append the new element to topMenuEl
    topMenuEl1.appendChild(aEl);
  });
  