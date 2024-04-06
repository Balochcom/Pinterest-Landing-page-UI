let flawer = [
  {
    name: "gulab",
    image:
      "https://images.unsplash.com/photo-1658397503007-6e0f5a668f0f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "roz",
    image:
      "https://images.unsplash.com/photo-1696911315698-b5c52f4fbd23?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "chambali",
    image:
      "https://images.unsplash.com/photo-1614542946965-a614df531a7a?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "sunflawer",
    image:
      "https://images.unsplash.com/photo-1616940081616-26ded866bdb2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Red",
    image:
      "https://images.unsplash.com/photo-1614452031847-f855d9bb9f6c?q=80&w=1380&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "whiteroz",
    image:
      "https://images.unsplash.com/photo-1604304194650-3ba3cfa752fd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "orange",
    image:
      "https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "myflawer",
    image:
      "https://images.unsplash.com/photo-1607087010232-f3489a9f75d4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function showTheCards() {
  let clutter = "";
  flawer.forEach(function (obj) {
    clutter += `<div class="box">
        <img class="cursor-pointer" src="${obj.image}">
        <div class="caption">Lorem ipsum</div>
        </div>`;
  });
  document.querySelector(".container").innerHTML = clutter;
}
function searchHendle() {
  var input = document.querySelector("#searchinput");
  input.addEventListener("focus", function () {
    document.querySelector(".overlay").style.display = "block";
  });
  input.addEventListener("blur", function () {
    document.querySelector(".overlay").style.display = "none";
  });
  input.addEventListener("input", function () {
    clutter = "";
    const filteredArray = flawer.filter((obj) =>
      obj.name.toLowerCase().startsWith(input.value)
    );
    filteredArray.forEach(function (obj) {
      clutter += `<div class="res flex px-8 py-3"><i class="ri-search-line font-semibold mr-5"></i><h3 class="font-semibold">${obj.name}</h3></div>`;
    });
    document.querySelector(".searchdata").style.display = "block";
    document.querySelector(".searchdata").innerHTML = clutter;
  });
}
searchHendle();
showTheCards();
