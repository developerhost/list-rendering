//表示させる部分のdiv要素
const display = document.getElementById('display');
//生徒データのの初期データ
let studentsData = [
    {
        name: '田中太郎',
        sex: '男性',
        age: 21,
    },
    {
        name: '田中次郎',
        sex: '男性',
        age: 19,
    },
    {
        name: '田中花子',
        sex: '女性',
        age: 14,
    }
]

//最初に画面が読み込まれた際に画面を更新する関数
window.document.addEventListener('DOMContentLoaded', function(){
    refreshDisplay(studentsData);
})

//渡された学生データを画面に表示する関数
function refreshDisplay(data) {
    //渡された学生データを画面に表示させる処理を記述
    for(let itemIndex = 0; itemIndex < data.length; itemIndex++){
        display.insertAdjacentHTML('beforeend',`
	
		<ul class="container">
		<li>名前:${data[itemIndex].name}</li>
		<li>性別:${data[itemIndex].sex}</li>
		<li>年齢:${data[itemIndex].age}歳</li>
		</ul>
`)
    }
}
