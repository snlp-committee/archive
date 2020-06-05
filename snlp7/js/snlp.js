var participants = [
["持橋大地","統数研","S"],
["亀田尭宙", "京都大 CIAS", "S"],
["小町守","首都大 小町研","S"],
["梶原智之","首都大 小町研","D"],
["立花竜一","首都大 小町研","M"],
["叶内晨","首都大 小町研","M"],
["宮崎亮輔","首都大 小町研","M"],
["橋本和真","東大 鶴岡研","D"],
["江里口瑛子","東大 鶴岡研","D"],
["中須賀謙吾","東大 鶴岡研", "M"],
["村上優樹","東大 鶴岡研", "M"],
["渡邉有祐","SONY","S"],
["岩井美樹", "東大 景浦研", "M"],
["星野翔","NII 宮尾研","D"],
["宮澤彬","NII 宮尾研","M"],
["Ye Kyaw Thu", "NICT 多言語翻訳研究室", "S"],
["牧 諒亮","東工大 徳永研","M"],
["西川 仁","東工大 徳永研","S"],
["原忠義", "東大 坂田・森研", "S"],
["瀧本洋喜","東工大 奥村・高村研","D"],
["甲斐駿介", "東工大 奥村・高村研", "B"],
["小林一郎", "お茶大 小林研", "S"],
["岡崎直観", "東北大 乾・岡崎研", "S"],
["松林優一郎", "東北大 乾・岡崎研", "S"],
["松田耕史", "東北大 乾・岡崎研", "S"],
["井之上直也", "東北大 乾・岡崎研", "S"],
["高瀬翔", "東北大 乾・岡崎研", "D"],
["佐々木彬", "東北大 乾・岡崎研", "D"],
["渡邉研斗", "東北大 乾・岡崎研", "D"],
["稲田和明", "東北大 乾・岡崎研", "D"],
["横井祥", "東北大 乾・岡崎研", "M"],
["小林颯介", "東北大 乾・岡崎研", "M"],
["村岡雅康", "東北大 乾・岡崎研", "M"],
["マハルジャン・スミット", "東北大 乾・岡崎研", "M"],
["佐藤翔悦", "東大 喜連川研", "M"],
["海野裕也", "PFI", "S"],
["中路紘平", "SmartNews", "S"],
["相澤彰子","NII 相澤研","S"],
["橋本捷人","東京大 相澤研", "M"],
["須田山強真","東京大 高野研", "M"],
["菅原朔","東京大 相澤研","M"]
];

var reserves = [
];

var committee = [
["髙瀬翔", "東北大 乾・岡崎研", "D"],
["林正頼", "東工大 奥村・高村研", "D"],
["人見雄太", "東工大 奥村・高村研", "M"],
["牧諒亮", "東工大 徳永研", "M"],
["梶原智之", "首都大 小町研", "D"],
["江里口瑛子", "東京大 鶴岡研", "D"],
["橋本和真", "東京大 鶴岡研", "D"]
];

$(function () {
	$('.talk').each(function(i){
		var data = $(this).text().split(/,/);
		$(this).text("");
		$(this).append('<a href="http://www.google.com/search?q='+$.trim(data[0])+' inurl:aclweb.org'+'&btnI=whatever">'+$.trim(data[0])+'</a>');
		$(this).append('<div class="right">('+$.trim(data[1])+', <a href="'+$.trim(data[2])+'">slide</a>)')
	});
	$('#num_participants').text(participants.length);
	$('#participants').append(nameList(participants, ', '));
	$('#committee').append(nameList(committee, '<br />'));

});

function nameList(names, splitter){
	var list = [];
	for (var i = 0; i < names.length; i++) {
		list.push(names[i][0] + '('+names[i][1]+')');
	}
	return list.join(splitter);
}