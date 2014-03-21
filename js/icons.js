var icons = {
	"hash"					:"0023",
	"question-mark"			:"003f",
	"at"					:"0040",
	"pilcrow"				:"00b6",
	"info"					:"2139",
	"arrow-left"			:"2190",
	"arrow-up"				:"2191",
	"arrow-right"			:"2192",
	"arrow-down"			:"2193",
	"home"					:"2302",
	"sun-stroke"			:"2600",
	"cloud"					:"2601",
	"umbrella"				:"2602",
	"star"					:"2605",
	"moon-stroke"			:"263e",
	"heart-stroke"			:"2764",
	"cog"					:"2699",
	"bolt"					:"26a1",
	"key-stroke"			:"26bf",
	"rain"					:"26c6",
	"denied"				:"26d4",
	"mail"					:"2709",
	"pen"					:"270e",
	"check"					:"2717",
	"check-alt"				:"2718",
	"x"						:"2713",
	"x-alt"					:"2714",
	"left-quote"			:"275d",
	"right-quote"			:"275e",
	"plus"					:"2795",
	"minus"					:"2796",
	"curved-arrow"			:"2935",
	"document-alt-stroke"	:"e000",
	"calendar"				:"e001",
	"map-pin-alt"			:"e002",
	"comment-alt1-stroke"	:"e003",
	"comment-alt2-stroke"	:"e004",
	"pen-alt-stroke"		:"e005",
	"pen-alt2"				:"e006",
	"chat-alt-stroke"		:"e007",
	"plus-alt"				:"e008",
	"minus-alt"				:"e009",
	"bars-alt"				:"e00a",
	"book-alt"				:"e00b",
	"aperture-alt"			:"e00c",
	"beaker-alt"			:"e010",
	"left-quote-alt"		:"e011",
	"right-quote-alt"		:"e012",
	"arrow-left-alt1"		:"e013",
	"arrow-up-alt1"			:"e014",
	"arrow-right-alt1"	:"e015",
	"arrow-down-alt1"		:"e016",
	"arrow-left-alt2"		:"e017",
	"arrow-up-alt2"		:"e018",
	"arrow-right-alt2"	:"e019",
	"arrow-down-alt2"		:"e01a",
	"brush"					:"e01b",
	"brush-alt"				:"e01c",
	"eyedropper"			:"e01e",
	"layers"					:"e01f",
	"layers-alt"			:"e020",
	"compass"				:"e021",
	"award-stroke"			:"e022",
	"beaker"					:"e023",
	"steering-wheel"		:"e024",
	"eye"						:"e025",
	"aperture"				:"e026",
	"image"					:"e027",
	"chart"					:"e028",
	"chart-alt"				:"e029",
	"target"					:"e02a",
	"tag-stroke"			:"e02b",
	"rss"						:"e02c",
	"rss-alt"				:"e02d",
	"share"					:"e02e",
	"undo"					:"e02f",
	"reload"					:"e030",
	"reload-alt"			:"e031",
	"loop-alt1"				:"e032",
	"loop-alt2"				:"e033",
	"loop-alt3"				:"e034",
	"loop-alt4"				:"e035",
	"spin"					:"e036",
	"spin-alt"				:"e037",
	"move-horizontal"		:"e038",
	"move-horizontal-alt1"	:"e039",
	"move-horizontal-alt2"	:"e03a",
	"move-vertical"			:"e03b",
	"move-vertical-alt1"	:"e03c",
	"move-vertical-alt2"	:"e03d",
	"move"					:"e03e",
	"move-alt1"				:"e03f",
	"move-alt2"				:"e040",
	"transfer"				:"e041",
	"download"				:"e042",
	"upload"				:"e043",
	"cloud-download"		:"e044",
	"cloud-upload"			:"e045",
	"fork"					:"e046",
	"play"					:"e047",
	"play-alt"				:"e048",
	"pause"					:"e049",
	"stop"					:"e04a",
	"eject"					:"e04b",
	"first"					:"e04c",
	"last"					:"e04d",
	"fullscreen"			:"e04e",
	"fullscreen-alt"		:"e04f",
	"fullscreen-exit"		:"e050",
	"fullscreen-exit-alt"	:"e051",
	"equalizer"				:"e052",
	"article"				:"e053",
	"read-more"				:"e054",
	"list"					:"e055",
	"list-nested"			:"e056",
	"cursor"				:"e057",
	"dial"					:"e058",
	"new-window"			:"e059",
	"trash-stroke"			:"e05a",
	"battery-half"			:"e05b",
	"battery-empty"			:"e05c",
	"battery-charging"		:"e05d",
	"chat"					:"e05e",
	"mic"					:"e05f",
	"movie"					:"e060",
	"headphones"			:"e061",
	"user"					:"e062",
	"lightbulb"				:"e063",
	"cd"					:"e064",
	"folder-stroke"			:"e065",
	"document-stroke"		:"e066",
	"pin"					:"e067",
	"map-pin-stroke"		:"e068",
	"book"					:"e069",
	"book-alt2"				:"e06a",
	"box"					:"e06b",
	"calendar-alt-stroke"	:"e06c",
	"comment-stroke"		:"e06d",
	"iphone"				:"e06e",
	"bars"					:"e06f",
	"camera"				:"e070",
	"volume-mute"			:"e071",
	"volume"				:"e072",
	"battery-full"			:"e073",
	"magnifying-glass"		:"e074",
	"lock-stroke"			:"e075",
	"unlock-stroke"			:"e076",
	"link"					:"e077",
	"wrench"				:"e078",
	"clock"					:"e079",
	"paperclip"				:"e08a"
};

function generate-iconic-hTML(){
	var html = '';
	for(var i in icons){
		html += '<span class="iconic iconic-'+i+'"></span>';
	}

	document.write(html);
}