var body=document.getElementsByTagName('body');
bg.addEventListener('click', function() {
    if (bg.style.backgroundImage === "") {
        bg.style.backgroundImage = "url('../land.png')";
    } else {
        bg.style.backgroundImage = "";
    };
});

var steklo = document.querySelectorAll('.steklo');
[].forEach.call(steklo, e=> {
	var t =[Math.floor(Math.random() * 220), Math.floor(Math.random() * 220), Math.floor(Math.random() * 220)];
	e.style.backgroundColor = `rgba(${t[0]},${t[1]},${t[2]},0.2)`;
});

[].forEach.call(document.querySelectorAll('a'), (e) => {
	e.onclick = ()=>{return false;}
});