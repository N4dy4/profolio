function openPage(evt, pageName) {
    var i, pagecontent, pagelinks;

    // Hide all page content elements
    pagecontent = document.getElementsByClassName("pagecontent");
    for (i = 0; i < pagecontent.length; i++) {
        pagecontent[i].style.display = "none";
    }

    // Remove the 'active' class from all page links
    pagelinks = document.getElementsByClassName("pagelinks");
    for (i = 0; i < pagelinks.length; i++) {
        pagelinks[i].className = pagelinks[i].className.replace(" active", "");
    }

    // Show the selected page content and add 'active' class to the clicked link
    document.getElementById(pageName).style.display = "block";
    evt.currentTarget.className += " active";
}
