// Creare una griglia formata da 8x8 quadratini tutti bianchi.
// 15 di questi quadratini (scelti a caso all’inizio)
//  se cliccati diventano rossi, gli altri diventano verdi
console.log("inizio script");

$(document).ready(function(){
  $(".quadrato").click(function(){
    $(this).toggleClass("greencolor");
  });
});
