const open = function(){
    const url = document.getElementById("input_url").value;

	const regex = /((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(?:-nocookie)?\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|live\/|v\/)?)([\w\-]+)(\S+)?/;
	const matches = url.match(regex);

	if(matches[5]) {
		const videoUrl = "https://www.youtube.com/embed/" + matches[5];
		const chatUrl  = "https://www.youtube.com/live_chat?v=" + matches[5] + "&embed_domain=qofar.github.io";

		document.getElementById("iVideo").src = videoUrl;
		document.getElementById("iChat").src  = chatUrl;
    }
}
const clear = function(){
	document.getElementById("iVideo").src = "";
	document.getElementById("iChat").src = "";
}
document.getElementById("btn_open").onclick  = open;
document.getElementById("btn_clear").onclick = clear;
document.getElementById("input_url").focus();


