var participants_r = [
    ["佐藤元紀", "NAIST 松本研"],
    ["能地宏", "NAIST 松本研"],
    ["宮澤彬", "NII 宮尾研"],
    ["海野裕也", "PFN"],
    ["亀田尭宙", "京大 地域研究統合情報センター"],
    ["村岡雅康", "日本IBM"],
    ["Maharjan Sumit", "東北大 乾・岡崎研"],
    ["乾健太郎", "東北大 乾・岡崎研"],
    ["松林優一郎", "東北大 乾・岡崎研"],
    ["周双双", "東北大 乾・岡崎研"],
    ["小林颯介", "東北大 乾・岡崎研"],
    ["岡崎直観", "東北大 乾・岡崎研"],
    ["松田耕史", "東北大 乾・岡崎研"],
    ["横井祥", "東北大 乾・岡崎研"],
    ["高瀬翔", "東北大 乾・岡崎研"],
    ["矢田竣太郎", "東大 影浦研"],
    ["菅原朔", "東大 相澤研"],
    ["包含", "東大(研究室配属前)"],
    ["亀甲博貴", "東大 鶴岡研"],
    ["瀧本洋喜", "東工大 奥村・高村研"],
    ["牧諒亮", "東工大 徳永・藤井研"],
    ["江原遥", "産業技術総合研究所 人工知能研究センター"],
    ["持橋大地", "統計数理研究所"],
    ["三輪誠", "豊田工業大学 知能数理研究室"],
    ["外山洋太", "豊田工業大学 知能数理研究室"],
    ["辻村有輝", "豊田工業大学 知能数理研"],
    ["小町守", "首都大 小町研"],
    ["梶原智之", "首都大 小町研"],
];

var participants_n = [
    ["徳永拓之", "スマートニュース"],
    ["森元彩華", "NAIST 松本研"],
    ["SHENG SHAOHUA", "NII 宮尾研"],
    ["吉川克正", "日本IBM"],
    ["坪井祐太", "日本IBM"],
    ["清野舜", "東北大 乾・岡崎研"],
    ["岩井美樹", "東大 影浦研"],
    ["田口直弥", "東大 鶴岡研"],
    ["衣川和尭", "東大 鶴岡研"],
    ["鈴木諒", "東大 鶴岡研"],
    ["人見雄太", "東工大 奥村・高村研"],
    ["山城颯太", "東工大 徳永・藤井研"],
    ["山田拓実", "東工大 徳永・藤井研"],
    ["木村大吾", "東工大 徳永・藤井研"],
    ["野沢健人", "筑波大 若林研／産総研"],
    ["小林一郎", "お茶大 小林研"],
    ["松尾映里", "お茶大 小林研"],
    ["樺山絵里", "お茶大 小林研"],
    ["熊谷香織", "お茶大 小林研"],
    ["鈴木由衣", "首都大 小町研"],
    ["石原響太", "PKSHA Technology"],
    ["澤井裕一郎", "NAIST 松本研"],
    ["長谷川駿", "東工大 奥村・高村研"],
    ["内海慶", "Denso IT Laboratory"],
    ["田森秀明", "朝日新聞"]
];

var reserves = [
];

var committee = [
["横井祥", "東北大 乾・岡崎研", "M"],
["小林颯介", "東北大 乾・岡崎研", "M"],
["鈴木由衣", "首都大 小町研", "D"],
["宮澤彬", "NII 宮尾研", "M"],
["亀甲博貴", "東京大 鶴岡研", "D"]
];

$(function () {
	$('.talk').each(function(i){
		var data = $(this).text().split(/,/);
		$(this).text("");
		$(this).append('<a href="http://www.google.com/search?q='+$.trim(data[0])+' inurl:aclweb.org'+'&btnI=whatever">'+$.trim(data[0])+'</a>');
		$(this).append('<div class="right">('+$.trim(data[1])+', <a href="'+$.trim(data[2])+'">slide</a>)')
	});
	$('#num_participants').text(participants_r.length + participants_n.length);
	$('#participants_r').append(nameList(participants_r, ', '));
	$('#participants_n').append(nameList(participants_n, ', '));
	$('#committee').append(nameList(committee, '<br />'));

});

function nameList(names, splitter){
	var list = [];
	for (var i = 0; i < names.length; i++) {
		list.push(names[i][0] + '('+names[i][1]+')');
	}
	return list.join(splitter);
}
