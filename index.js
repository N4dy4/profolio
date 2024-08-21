function openPage (evt, pageName){

var i, pagecontent, pagelinks;

pagecontent = document.getElementsByClassName("pagecontent");
for (i = 0; i < pagecontent.length; i++){
    pagecontent[i].computedStyleMap.display = "none";

}

pagelinks = document.getElementsByClassName("pagelinks");
for (i = 0; i < pagelinks.length; i++){
    pagelinks[i].className = pagelinks[i].className.replace(" active", "");
}

document.getElementById(paegName).style.display = "block";
evt.currentTarget.className += " active";
}