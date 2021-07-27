const carouselText = [
  {text: "Developer"},
  {text: "Innovator"},
  {text: "Creative"},
  {text: "Designer"}
]

$( document ).ready(async function() {
  carousel(carouselText, "#feature-text")
});

async function typeSentence(sentence, eleRef, delay = 100) {
  const letters = sentence.split("");
  let i = 0;
  while(i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++
  }
  return;
}

async function deleteSentence(eleRef) {
  const sentence = $(eleRef).html();
  const letters = sentence.split("");
  let i = 0;
  while(letters.length > 0) {
    await waitForMs(100);
    letters.pop();
    $(eleRef).html(letters.join(""));
  }
}

async function carousel(carouselList, eleRef) {
    var i = 0;
    while(true) {
      await typeSentence(carouselList[i].text, eleRef);
      await waitForMs(1500);
      await deleteSentence(eleRef);
      await waitForMs(500);
      i++
      if(i >= carouselList.length) {i = 0;}
    }
}


function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

var nav = document.body.querySelector('.navbar');
var hero = document.body.querySelector('.photo');
window.addEventListener('scroll', function (event) {
  if (window.pageYOffset > hero.scrollHeight) {
    if ($(".nav-link").hasClass("text-light")) {
    $(".nav-link").toggleClass("text-light");
    $(".nav-link").toggleClass("text-dark");
    $("#logo").attr("src","./images/logo2 (2).png");

    }
  } 
  else if (window.pageYOffset < hero.scrollHeight) {
    if ($(".nav-link").hasClass("text-dark")) {
    $(".nav-link").toggleClass("text-dark");
    $(".nav-link").toggleClass("text-light");
    $("#logo").attr("src","./images/logo.png");
    }
  }// else if (window.pageYOffset < hero.scrollHeight) {
   // $("h2").fadeIn(fast);
  //}
});

$('.myImg').click(function() {
  $(".modal").css("display", 'block');
  var src = $(this).attr("src");
  $('.img01').attr("src", src);
  var caption = $('.myImg').attr("alt");
  $('.caption').html(caption);
});

$('.close').click(function() {
  $(".modal").css("display", 'none')
});
