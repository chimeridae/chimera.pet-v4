window.onload = dailyvid();
let thoughts = "i feel like all i ever do is post sgr amvs here now, but THEY'RE SO GOOD!!! THIS IS SO GOOD!!! WHAT THE FUCK!!!";
document.getElementById("thoughts").innerHTML = "" + thoughts + "";

function dailyvid() {

document.getElementById('youtube').srcdoc = '<style>*{background-image:url("https://i.ytimg.com/vi/kLBRZ1C_FW0/sddefault.jpg");background-size:cover;background-position:center;padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/kLBRZ1C_FW0?autoplay=1><span>▶</span></a>';

}

document.getElementById('mood').setAttribute("style","width:80%");

document.getElementById('energy').setAttribute("style","width:50%");

// this script is under the MIT license (https://max.nekoweb.org/resources/license.txt)
											
const username = "chimera"; // Put your Nekoweb username here
					
const getStats = async () => {
  const request = await fetch(`https://nekoweb.org/api/site/info/${username}`);
  const json = await request.json();

  const updated = new Date(json.updated_at).toLocaleDateString(); // Formats Last Updated text
  const created = new Date(json.created_at).toLocaleDateString(); // Formats Creation Date text

  document.getElementById("created").innerHTML = `<em>Created</em>: ${created}`;
  document.getElementById("updated").innerHTML = `<em>Updated</em>: ${updated}`;
  document.getElementById("visitors").innerHTML = `<em>Visits</em>: ${json.views}`;
  document.getElementById("followers").innerHTML = `<em>Followers</em>: ${json.followers}`;
};
getStats();

const facts = [
"many bodies form a strange creature",
"looks like faces blooming into nature",
"everything bleeds into everything else...",
"i just wanna live!",
"i just wanna be whatever i am!",
"i'm not asking to be human, i’m just asking to be loved",
"i'm a quiet bitch i just do my own thing :)",
"dehumanize yourself and face to bloodshed",
"i am a therapy dog!",
"step away from my dr pepper!",
"let's play outside!",
"watch digimon adventure 02!",
"what kind of pokemon are you?",
"i am so jealous of dogss life i want to cryy...",
"dragon energy coursing through my veins",
"don't localize mother 3!",
];

!function newFact() {
  const randomFact = Math.floor(Math.random() * facts.length);
  document.getElementById('ticker').innerHTML = facts[randomFact];
}();

window.onscroll = function() {myFunction()};

var navigation = document.getElementById("nav");
var sticky = navigation.offsetTop;

function myFunction() {
  if (window.scrollY >= sticky) {
    navigation.classList.add("sticky")
  } else {
    navigation.classList.remove("sticky");
  }
}

	// Mouseover/ Click sound effect- by JavaScript Kit (www.javascriptkit.com)
	// Visit JavaScript Kit at http://www.javascriptkit.com/ for full source code
	
	//** Usage: Instantiate script by calling: var uniquevar=createsoundbite("soundfile1", "fallbackfile2", "fallebacksound3", etc)
	//** Call: uniquevar.playclip() to play sound
	
	var html5_audiotypes={ //define list of audio file extensions and their associated audio types. Add to it if your specified audio file isn't on this list:
    "mp3": "audio/mpeg",
    "mp4": "audio/mp4",
    "ogg": "audio/ogg",
    "wav": "audio/wav"
    }
    
    function createsoundbite(sound){
    var html5audio=document.createElement('audio')
    if (html5audio.canPlayType){ //check support for HTML5 audio
    for (var i=0; i<arguments.length; i++){
    var sourceel=document.createElement('source')
    sourceel.setAttribute('src', arguments[i])
    if (arguments[i].match(/\.(\w+)$/i))
    sourceel.setAttribute('type', html5_audiotypes[RegExp.$1])
    html5audio.appendChild(sourceel)
    }
    html5audio.load()
    html5audio.playclip=function(){
    html5audio.pause()
    html5audio.currentTime=0
    html5audio.play()
    }
    return html5audio
    }
    else{
    return {playclip:function(){throw new Error("Your browser doesn't support HTML5 audio unfortunately")}}
    }
    }
    
    //Initialize two sound clips with 1 fallback file each:
    
  var mouseoversound=createsoundbite("https://file.garden/ZgSP2Yo9YF7Ec9o7/hover.mp3")
  var clicksound=createsoundbite("https://file.garden/ZgSP2Yo9YF7Ec9o7/click.mp3")





  

