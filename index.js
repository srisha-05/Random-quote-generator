const api_url = "https://api.quotable.io/random";
async function x(url) {
    const r = await fetch(url);
    var d = await r.json();
    document.getElementById("quote").innerHTML = d.content;
    document.getElementById("name").innerHTML = d.author;
}
x(api_url);
function tweet() {
    window.open("http://twitter.com/intent/tweet?text=Hello%20world " + document.getElementById("quote").innerHTML + "----by  " + document.getElementById("name").innerHTML, "Tweet Window", "width=600, height=300");
}



