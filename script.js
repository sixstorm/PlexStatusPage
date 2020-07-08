// Check Plex page

// Set progress to 0%

const Http = new XMLHttpRequest();
const url = 'http://sixstorm.duckdns.org:32400/web/index.html';

Http.open('GET', url);
Http.send();

Http.onreadystatechange = function() {
	if (this.status == 200) {
		document.getElementById('plexStatusText').innerHTML = 'Plex is up!';
		document.getElementById('plexStatusText').style.visibility = 'visible';
		document.getElementById('tempStatusMSG').style.visibility = 'hidden';
		console.log('Plex is up!');
	} else {
		document.getElementById('plexStatusText').innerHTML = 'Plex is down!';
		document.getElementById('plexStatusText').style.visibility = 'visible';
		document.getElementById('tempStatusMSG').style.visibility = 'hidden';
		console.log('Plex is down!');
	}
};

// Check Tautulli
// const tauHttp = new XMLHttpRequest();
// const tauurl='http://192.168.50.4:8181';
// tauHttp.open("GET", tauurl);
// tauHttp.send();

// tauHttp.onreadystatechange = function() {
//     if(this.status==200){
//         // document.getElementById("statusImg").style.visibility = "visible";
//         // document.getElementById("tauStatusText").innerHTML = "Tautulli is up!";
//         // document.getElementById("tauStatusText").style.visibility = "visible";
//         document.getElementById("tempStatusMSG").style.visibility = "hidden"
//         console.log("Tautulli works!");
//     } else {
//         document.getElementById("tauStatusText").innerHTML = "Tautulli is down!";
//         document.getElementById("tauStatusText").style.visibility = "visible";
//         console.log("Tautulli is down!");
//     }
// }
