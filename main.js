let html = "";
let nav = "";
let audio = [];
// var ahang = "";
audio.push(
  new Audio(
    "./Audios/PORSCHEvolution - Experience interactive history of Porsche.ogg"
  )
);
audio.push(
  new Audio(
    "./Audios/PORSCHEvolution - Experience interactive history of Porsche_2.ogg"
  )
);
audio.push(
  new Audio(
    "./Audios/PORSCHEvolution - Experience interactive history of Porsche_3.ogg"
  )
);
audio.push(
  new Audio(
    "./Audios/PORSCHEvolution - Experience interactive history of Porsche_4.ogg"
  )
);
audio.push(
  new Audio(
    "./Audios/PORSCHEvolution - Experience interactive history of Porsche_5.ogg"
  )
);
audio.push(
  new Audio(
    "./Audios/PORSCHEvolution - Experience interactive history of Porsche_6.ogg"
  )
);
audio.push(
  new Audio(
    "./Audios/PORSCHEvolution - Experience interactive history of Porsche_6.ogg"
  )
);
audio.push(
  new Audio(
    "./Audios/PORSCHEvolution - Experience interactive history of Porsche_7.ogg"
  )
);
audio.push(
  new Audio(
    "./Audios/PORSCHEvolution - Experience interactive history of Porsche_8.ogg"
  )
);
audio.push(
  new Audio(
    "./Audios/PORSCHEvolution - Experience interactive history of Porsche_9.ogg"
  )
);
audio.push(
  new Audio(
    "./Audios/PORSCHEvolution - Experience interactive history of Porsche_10.ogg"
  )
);
audio.push(
  new Audio(
    "./Audios/PORSCHEvolution - Experience interactive history of Porsche_12.ogg"
  )
);
audio.push(
  new Audio(
    "./Audios/PORSCHEvolution - Experience interactive history of Porsche_13.ogg"
  )
);
async function fetchPosts() {
  let data = await fetch("https://my-json-server.typicode.com/9nima6/Porsche-DB/posts");
  let res = await data.json();
  html = res.map((elem) => {
    if (elem.mode === "light") {
      return `<div id="${elem.id}" class="section" style="background-image:url(${elem.images})" >
                <h2 id="${elem.karim}" class="light">${elem.title}</h2>
                <hr width="40px" size="1" color="red">
                <p class="light">${elem.body}</p>
                <a href="#${elem.href}" class="button">${elem.button}</a>
                <div class="logo" style="background-image:url(${elem.logo})"></div>
              </div>`;
    } else {
      return `<div id="${elem.id}" class="section" style="background-image:url(${elem.images})" >
                <h2 id="${elem.karim}" class="dark">${elem.title}</h2>
                <hr width="40px" size="1" color="red">
                <p class="dark">${elem.body}</p>
                <a href="#${elem.href}" class="button">${elem.button}</a>
                <div class="logo" style="background-image:url(${elem.logo})"></div>
              </div>`;
    }
  });
  nav = res.map((elem) => {
    return `<a href="#${elem.id}" class="light">${elem.link}<span>s</span></a>`;
  });
  document.querySelector("div.slide").innerHTML += html.join("");
  document.querySelector("nav").innerHTML += nav.join("");
}
fetchPosts();

function nim() {
  let section = document.querySelectorAll("div.section");
  let menu = document.querySelectorAll("nav a");
  window.onscroll = () => {
    section.forEach((i) => {
      let top = window.scrollY;
      let offset = i.offsetTop - 500;
      let height = i.offsetHeight;
      let id = i.getAttribute("id");

      if (top >= offset && top < offset + height) {
        menu.forEach((link) => {
          link.classList.remove("active-light");
          document
            .querySelector("a[href*=" + id + "]")
            .classList.add("active-light");
        });
      }
    });
  };
}

let ram = document.querySelectorAll("nav a");
ram.forEach((elem) => {
  elem.classList.add("active-light");
});
setTimeout(nim, 3000);

function Musicplaying(names) {
  let upperBound = names.length;
  let PersonBuyingLunch = Math.floor(Math.random() * upperBound);
  return names[PersonBuyingLunch];
}

function music() {
  document.querySelector("a.button").addEventListener("click", function () {
    Musicplaying(audio).play();
  });
}
setTimeout(music, 3000);
