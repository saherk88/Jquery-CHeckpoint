// var myTextarea=document.getElementById("textme").innerHTML;
// var selectSize=document.getElementById("size").innerHTML;
// function sizes() {
//     myTextarea.style.fontSize=selectSize.value;
// }

function changeBold() {
    if (document.getElementById('textme').style.fontWeight != 'bold') {
        document.getElementById('textme').style.fontWeight = 'bold';
    } else {
        document.getElementById('textme').style.fontWeight = 'normal';

    }
}
function changeSty() {
    if (document.getElementById('textme').style.fontStyle != 'italic') {
        document.getElementById('textme').style.fontStyle = 'italic';
    } else {
        document.getElementById('textme').style.fontStyle = 'normal';

    }
}
function changeunder() {
    if (document.getElementById('textme').style.textDecoration != 'underline') {
        document.getElementById('textme').style.textDecoration = 'underline';
    } else {
        document.getElementById('textme').style.textDecoration = 'none';

    }
}
function changesize(){
    textme.style.fontSize=size.value;
}

function changePolice(){
    textme.style.fontFamily=police.value;
}
// $(document).ready(function(){
//     $(".Cb1").click(function(){
//         $("#fade").modal({
//                     fadeDuration: 100
//                   });
        
//     })
// }
// )
// $(".Cb1").click(function(){
//     $("#fade").modal({
//         fadeDuration: 100
//       });
//     })
