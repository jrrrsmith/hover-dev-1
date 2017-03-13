//random splash video

var peopleVideoSD = [
// "https://player.vimeo.com/external/143269456.sd.mp4?s=2d489daf9a36b4275339afaa58501b381ac55d72&profile_id=112",
// "https://player.vimeo.com/external/142940348.sd.mp4?s=6f4d914d6c3b462bad7fcb59ecfbdd030ef4ce48&profile_id=112",
// "https://player.vimeo.com/external/142915688.sd.mp4?s=f78b5b2f699840a7f3a41079e650868a2e68b93b&profile_id=112"
"https://player.vimeo.com/external/202275400.hd.mp4?s=e72d81450e06c965b073c42a1bad11815a910da8&profile_id=174",
"https://player.vimeo.com/external/202275892.hd.mp4?s=77746cc924baafb7a4177502d9bb507bb6e978c9&profile_id=174",
"https://player.vimeo.com/external/202276319.hd.mp4?s=b9fe22cea92b929acbc956b0c4a08b358ef430fa&profile_id=174"
];

var landscapeVideoSD = [
"https://player.vimeo.com/external/143271719.sd.mp4?s=28b685cf54f141b8da863427a4113b5b760a9207&profile_id=112",
"https://player.vimeo.com/external/143430422.sd.mp4?s=697f1d5d54ef521b27a48c130207f94eb8ab82f3&profile_id=112",
"https://player.vimeo.com/external/143430423.sd.mp4?s=67c22414585c7ad896c435595746c51236d31ade&profile_id=112"
];

var r = Math.floor(Math.random() * (3)) + 0;

$("#people-player").html("<source src="+peopleVideoSD[r]+"type='video/mp4'>");

$("#landscape-player").html("<source src="+landscapeVideoSD[r]+"type='video/mp4'>");

//if mobile

if( /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) || $(window).width() < 600 ) {
	
    $( ".splash-video" ).remove();

} else {

	var cardHeight = $(window).height();
	var titleHeight = cardHeight/3;
	var aboutHeight = cardHeight/2.5;

	$(".splash").css({"min-height": cardHeight});
	$(".splash-title").css({"top": titleHeight});
	$(".about-title").css({"top": aboutHeight});
}

