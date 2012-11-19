//Skate Dice for web 
//
//version 0.2
//
//written by Vincent Masiello in about an hour on 11/18/2012 when he should have been working on an important deadline.
//contact me: vincentmasiello@gmail.com
//
//Neither I nor this project are affiliated with whichever entity owns the official 'SK8 Dice' brand of products in any way. 
//This was written for fun. My [smart phone] was stolen and i had to activate an old flip-phone from 2005 and didn't want to
//ask my friend to buy an app for me on his [smart phone]. 
//
//
//TODO: 
	//add separate player tracking
	//show full trick title or possibilities (i.e. 360 + kickflip + backside == tre flip || backside 360 kickflip)
	//ledge and rail editions
	//difficulty selection for each dice individually
	//exclude certain hard tricks (reg bigspin heelflips still possible for example o_O)
	//make trick output smarter
		//only fakie, switch, regular -> add 'ollie'
		//only  frontside/backside -> add '180' or 'ollie'
	//style extras and trick output

//settings
var difficulty = 6; //if easy, dilute dice with easier tricks
var play_skate = false; //if false, 'x' and 'skate dice' will not be shown if rolled

//Ayo, we just made you 12-sided DIE, mufucka!
var d1 = ["regular", "fakie", "switch", "nollie", "x", "skate\ndice", "regular", "regular", "fakie", "fakie", "x", "skate\ndice"];
var d4 = ["kickflip", "heelflip", "shuvit", "x", "x", "skate\ndice", "shuvit", "shuvit", "x", "skate\ndice", "x", "skate\ndice"];
var d3 = ["180", "180", "360", "bigspin", "x", "skate\ndice", "180", "bigspin", "x", "skate\ndice", "x", "skate\ndice"];
var d2 = ["frontside", "backside", "frontside", "backside", "x", "skate\ndice", "x", "skate\ndice", "x", "skate\ndice", "x", "skate\ndice"];

var dice = [d1, d2, d3, d4];

function roll() {
	console
	var output = '';
	var extra = [0, 0]; //[0] = 'x', [1] = 'skate\ndice'
	for (var x=0; x<dice.length;x++) {
		var o;
		var rand = Math.floor(Math.random()*difficulty);
		o = dice[x][rand];
		
		//console.log(o);
		if (o === 'x' || o === 'skate\ndice') {
			var i = (o === 'x') ? 0 : 1;
			extra[i]++;
		} else {
			output += ('<div class="die"><br /><br /><span>'+o+'</span></div>');
		}
	}
	if (output==='')
		output = 'Pick your own!';
		
	$('#dice_container').html('<br />'+output);
	var str = (play_skate) ? '<br /><span>X: '+extra[0]+'</span><br /><span>Skate Dice: '+extra[1]+'</span>' : '';
	$('#extra_container').html(str);
}

function changeDifficulty(diff) {
	difficulty = diff;
}

function toggleSkate() {
	var cb = document.getElementById('skate_toggle');
	if (cb.checked == true) {
		play_skate = true;
	} else {
		play_skate = false;
	}
}

$(function() {
	play_skate = document.getElementById('skate_toggle').checked;
	if (document.getElementById('radio_easy').checked == true)
		difficulty = 12;
		
	$('#prefs_top').on('click', function() {
		$('#collapse').toggleClass('hidden').toggleClass('show');
	});
});

