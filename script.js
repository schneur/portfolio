function checkScroll(){
  var startY = $('.hero').height() - $('.navbar').height();

  if($(window).scrollTop() > startY){
      $('.navbar').addClass("scrolled");

  }else{
      $('.navbar').removeClass("scrolled");

  }
}

if($('.navbar').length > 0){
  $(window).on("scroll load resize", function(){
      checkScroll();
  });
}

const carouselText = [
  {text: "Developer"},
  {text: "designer"},
  {text: "artistic"}
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



var hero = document.body.querySelector('.portfolios');

/*$(function () {
  $(document).scroll(function () {
    var nav = $(".navbar");
    nav.toggleClass('scrolled', $(this).scrollTop() > nav.height());
    if (window.pageYOffset > hero.scrollHeight) {
      $('.pic').attr("src", "./images/lauren-mancke-aOC7TSLb1o8-unsplash a (6).jpg");
    } else {
      $('.pic').attr("src", "./images/portfolio picture (4).jpg");
    }
  });
}); */



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