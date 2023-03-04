// 定义五十音图音符对应的罗马音数组
const hiraganaPureMap = {
  "あ": "a", "い": "i", "う": "u", "え": "e", "お": "o",
  "か": "ka", "き": "ki", "く": "ku", "け": "ke", "こ": "ko",
  "さ": "sa", "し": "shi", "す": "su", "せ": "se", "そ": "so",
  "た": "ta", "ち": "chi", "つ": "tsu", "て": "te", "と": "to",
  "な": "na", "に": "ni", "ぬ": "nu", "ね": "ne", "の": "no",
  "は": "ha", "ひ": "hi", "ふ": "fu", "へ": "he", "ほ": "ho",
  "ま": "ma", "み": "mi", "む": "mu", "め": "me", "も": "mo",
  "や": "ya", "ゆ": "yu", "よ": "yo",
  "ら": "ra", "り": "ri", "る": "ru", "れ": "re", "ろ": "ro",
  "わ": "wa", "を": "wo", "ん": "n"
};

const katakanaPureMap =  {
  "ア": "a", "イ": "i", "ウ": "u", "エ": "e", "オ": "o",
  "カ": "ka", "キ": "ki", "ク": "ku", "ケ": "ke", "コ": "ko",
  "サ": "sa", "シ": "shi", "ス": "su", "セ": "se", "ソ": "so",
  "タ": "ta", "チ": "chi", "ツ": "tsu", "テ": "te", "ト": "to",
  "ナ": "na", "ニ": "ni", "ヌ": "nu", "ネ": "ne", "ノ": "no",
  "ハ": "ha", "ヒ": "hi", "フ": "fu", "ヘ": "he", "ホ": "ho",
  "マ": "ma", "ミ": "mi", "ム": "mu", "メ": "me", "モ": "mo",
  "ヤ": "ya", "ユ": "yu", "ヨ": "yo",
  "ラ": "ra", "リ": "ri", "ル": "ru", "レ": "re", "ロ": "ro",
  "ワ": "wa", "ヲ": "wo", "ン": "n"
};


const hiraganaRomaMap = {
  "あ": "a", "い": "i", "う": "u", "え": "e", "お": "o",
  "か": "ka", "き": "ki", "く": "ku", "け": "ke", "こ": "ko",
  "さ": "sa", "し": "shi", "す": "su", "せ": "se", "そ": "so",
  "た": "ta", "ち": "chi", "つ": "tsu", "て": "te", "と": "to",
  "な": "na", "に": "ni", "ぬ": "nu", "ね": "ne", "の": "no",
  "は": "ha", "ひ": "hi", "ふ": "fu", "へ": "he", "ほ": "ho",
  "ま": "ma", "み": "mi", "む": "mu", "め": "me", "も": "mo",
  "や": "ya", "ゆ": "yu", "よ": "yo",
  "ら": "ra", "り": "ri", "る": "ru", "れ": "re", "ろ": "ro",
  "わ": "wa", "を": "wo", "ん": "n",
  "が": "ga", "ぎ": "gi", "ぐ": "gu", "げ": "ge", "ご": "go",
  "ざ": "za", "じ": "ji", "ず": "zu", "ぜ": "ze", "ぞ": "zo",
  "だ": "da", "ぢ": "ji", "づ": "zu", "で": "de", "ど": "do",
  "ば": "ba", "び": "bi", "ぶ": "bu", "べ": "be", "ぼ": "bo",
  "ぱ": "pa", "ぴ": "pi", "ぷ": "pu", "ぺ": "pe", "ぽ": "po"
};

const katakanaRomaMap = {
  "ア": "a", "イ": "i", "ウ": "u", "エ": "e", "オ": "o",
  "カ": "ka", "キ": "ki", "ク": "ku", "ケ": "ke", "コ": "ko",
  "サ": "sa", "シ": "shi", "ス": "su", "セ": "se", "ソ": "so",
  "タ": "ta", "チ": "chi", "ツ": "tsu", "テ": "te", "ト": "to",
  "ナ": "na", "ニ": "ni", "ヌ": "nu", "ネ": "ne", "ノ": "no",
  "ハ": "ha", "ヒ": "hi", "フ": "fu", "ヘ": "he", "ホ": "ho",
  "マ": "ma", "ミ": "mi", "ム": "mu", "メ": "me", "モ": "mo",
  "ヤ": "ya", "ユ": "yu", "ヨ": "yo",
  "ラ": "ra", "リ": "ri", "ル": "ru", "レ": "re", "ロ": "ro",
  "ワ": "wa", "ヲ": "wo", "ン": "n",
  "ガ": "ga", "ギ": "gi", "グ": "gu", "ゲ": "ge", "ゴ": "go",
  "ザ": "za", "ジ": "ji", "ズ": "zu", "ゼ": "ze", "ゾ": "zo",
  "ダ": "da", "ヂ": "ji", "ヅ": "zu", "デ": "de", "ド": "do",
  "バ": "ba", "ビ": "bi", "ブ": "bu", "ベ": "be", "ボ": "bo",
  "パ": "pa", "ピ": "pi", "プ": "pu", "ペ": "pe", "ポ": "po"
};

const romaHiraganaMap = {
  "a": "あ", "i": "い", "u": "う", "e": "え", "o": "お",
  "ka": "か", "ki": "き", "ku": "く", "ke": "け", "ko": "こ",
  "sa": "さ", "shi": "し", "su": "す", "se": "せ", "so": "そ",
  "ta": "た", "chi": "ち", "tsu": "つ", "te": "て", "to": "と",
  "na": "な", "ni": "に", "nu": "ぬ", "ne": "ね", "no": "の",
  "ha": "は", "hi": "ひ", "fu": "ふ", "he": "へ", "ho": "ほ",
  "ma": "ま", "mi": "み", "mu": "む", "me": "め", "mo": "も",
  "ya": "や", "yu": "ゆ", "yo": "よ",
  "ra": "ら", "ri": "り", "ru": "る", "re": "れ", "ro": "ろ",
  "wa": "わ", "wo": "を", "n": "ん",
  "ga": "が", "gi": "ぎ", "gu": "ぐ", "ge": "げ", "go": "ご",
  "za": "ざ", "ji": "じ", "zu": "ず", "ze": "ぜ", "zo": "ぞ",
  "da": "だ", "ji": "ぢ", "de": "で", "do": "ど",
  "ba": "ば", "bi": "び", "bu": "ぶ", "be": "べ", "bo": "ぼ",
  "pa": "ぱ", "pi": "ぴ", "pu": "ぷ", "pe": "ぺ", "po": "ぽ"
};

const romaKatakanaMap = {
  "a": "ア", "i": "イ", "u": "ウ", "e": "エ", "o": "オ",
  "ka": "カ", "ki": "キ", "ku": "ク", "ke": "ケ", "ko": "コ",
  "sa": "サ", "shi": "シ", "su": "ス", "se": "セ", "so": "ソ",
  "ta": "タ", "chi": "チ", "tsu": "ツ", "te": "テ", "to": "ト",
  "na": "ナ", "ni": "ニ", "nu": "ヌ", "ne": "ネ", "no": "ノ",
  "ha": "ハ", "hi": "ヒ", "fu": "フ", "he": "ヘ", "ho": "ホ",
  "ma": "マ", "mi": "ミ", "mu": "ム", "me": "メ", "mo": "モ",
  "ya": "ヤ", "yu": "ユ", "yo": "ヨ",
  "ra": "ラ", "ri": "リ", "ru": "ル", "re": "レ", "ro": "ロ",
  "wa": "ワ", "wo": "ヲ", "n": "ン",
  "ga": "ガ", "gi": "ギ", "gu": "グ", "ge": "ゲ", "go": "ゴ",
  "za": "ザ", "ji": "ジ", "zu": "ズ", "ze": "ゼ", "zo": "ゾ",
  "da": "ダ", "ji": "ヂ", "zu": "ヅ", "de": "デ", "do": "ド",
  "ba": "バ", "bi": "ビ", "bu": "ブ", "be": "ベ", "bo": "ボ",
  "pa": "パ", "pi": "ピ", "pu": "プ", "pe": "ペ", "po": "ポ"
};




// 获取 DOM 元素
const promptEl = document.getElementById('prompt');
const answerEl = document.getElementById('answer');
const submitBtn = document.getElementById('submit');
const tipsEl = document.getElementById('tips');
const sucRateEl = document.getElementById('suc_rate');
const leftCountEl = document.getElementById('left_count');
const typeEl = document.querySelector("#sound-type")

let curType = "type-1";
let currentArr = [];
let count = 0;
let success = 0;
let isError = false;
let currentSyllable;


Array.prototype.remove = function(val) {
  var index = this.indexOf(val);
  if (index > -1) {
    this.splice(index, 1);
  }
}


// https://www.freecodecamp.org/chinese/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/
// https://blog.csdn.net/weixin_46112649/article/details/126038160
function map2arr(argument) {
	temp = Object.entries(argument)
	result = []
	for (let index = 0; index < temp.length; index++) {
		result.push({kana:temp[index][0], roma:temp[index][1]})
	}
	return result
}


function initCurMap() {
    if (curType === "type-1") {
        currentArr = map2arr(hiraganaPureMap)
    } else if (curType === "type-2") {
        currentArr = map2arr(katakanaPureMap)
    } else if (curType === "type-3") {
    	currentArr = map2arr(hiraganaRomaMap)
    } else if (curType === "type-4") {
    	currentArr = map2arr(katakanaRomaMap)
    } else if (curType === "type-5") {
    	currentArr = map2arr(romaHiraganaMap)
    } else if (curType === "type-6") {
    	currentArr = map2arr(romaKatakanaMap)
    }
}


// 监听下拉列表的修改事件
typeEl.addEventListener("change", function () {
	curType = this.value;
	initCurMap();
    // 更新下一个音符
    newSyllable();
});



function newSyllable() {
	currentSyllable = currentArr[Math.floor(Math.random() * currentArr.length)];
	currentArr.remove(currentSyllable)
	promptEl.innerText = currentSyllable.kana;
	answerEl.value = '';
	leftCountEl.innerText = currentArr.length;
}



function checkAnswer() {
	count++;
	if (answerEl.value.toLowerCase() === currentSyllable.roma) {
		success++;
		isError = false;
		tipsEl.style.display = 'none';
		newSyllable();
	} else {
		console.log(currentSyllable)
		let findMap = romaHiraganaMap
		if (curType == "type-2" || curType == "type-4") {
			findMap = romaKatakanaMap
		}
		if (findMap[answerEl.value.toLowerCase()]) {
			tipsEl.innerText = '输入错误, 混淆：' + findMap[answerEl.value.toLowerCase()];
		} else {
			tipsEl.innerText = '输入错误!!!';
		}
		tipsEl.style.display = 'block';	
		if (!isError) {
			currentArr.push(currentSyllable)
			isError = true;
		}
	}
	sucRateEl.innerText = success + "/" + count;
	leftCountEl.innerText = currentArr.length;
	if (currentArr.length == 0) {
		alert("完成一轮，重置随机");
		initCurMap(curType);
	}
}


submitBtn.addEventListener('click', () => {
	checkAnswer();
});


answerEl.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    checkAnswer();
  }
});

initCurMap(curType);
newSyllable();