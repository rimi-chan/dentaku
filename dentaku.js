let is_calc = false;
// // =で計算したかどうか
let result = document.getElementById("result");

//ACボタンの呼び出し
// function c_click() {
//     result.value = "0";
// //     //リセットなので＝で計算してない
//     is_calc = false;
// }

function ac_click(){
  result.value = "0";
  is_calc = false;
}

function num_click(val){
    if(is_calc)　 result.value = "0";
//     //=で計算済みの場合、表示を０に初期化
     is_calc = false;
    //  is_calcがtrueの場合があるのでfalseにします
    
//     // 小数点の値を入力するための記述
//     //0を入力して.を入力
    if(result.value == "0" && val == "0"){
        result.value = "0";
    }else if(result.value == "0" && val == "."){
        result.value = "0.";
    }else if(result.value == "0"){
        result.value = val;
    }else{
        result.value += val;
        // 二桁表示にするための設定
        // += 加算もしくは連結が可能/
    }
    
}


function ope_click(val){
    if(is_calc) is_calc = false;
    
    if(is_ope_last()){
        result.value = result.value.slice(0,-1) + val;
        // sline()文字列や配列などからデータの一部分だけ取り出せる
        // slice(0,-1) + val;最後は演算子で必ず終わるため＋⇨ーが可能になる。
    }else{
        result.value += val;
    }
}


function equal_click(){
    if(is_ope_last()) result.value = result.value.slice(0,-1);
    var temp = new Function("return " + result.value.replaceAll("x", "*").replaceAll("÷", "/"))();

    if(temp == Infinity || Number.isNaN(temp)){
        result.value = "Error";
        
    }else{
        result.value = temp;
        is_calc = true;
  }
}


function is_ope_last(){
  return ["+","-","x","÷"].includes(result.value.toString().slice(-1));
}
// result.value最後の文字(-1)に["+","-","×","÷"]いずれかがある
// 文字列.includes(検索したい文字列)