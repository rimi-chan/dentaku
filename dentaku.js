let is_calc = false;
// // =で計算したかどうか
let dec = false;
// 小数点使用済み用
let result = document.getElementById("result");
let botton = document.getElementById("botton");

function ac_click(){
  result.value = "0";
  is_calc = false;
//   dec = false;
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
        dec = false;
    }else if(result.value == "0"){
        result.value = val;
        dec = false;
    }else{
        result.value += val;
        dec = false;
        // 二桁表示にするための設定
        // += 加算もしくは連結が可能/
    }
    
}



function dotto_click(val){
    if(!dec){
        result.value = result.value + val;
        dec = true;
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
        dec = false;
    }
}


function equal_click(){
    if(is_ope_last()) result.value = result.value.slice(0,-1);
    // 計算列の最後が["+","-","*","/"]いずれかだったら["+","-","*","/"]を取り除く
    var temp = new Function("return " + result.value.replaceAll("x", "*").replaceAll("÷", "/"))();
// 　　計算結果の設定
    if(temp == Infinity || Number.isNaN(temp)){
        result.value = "Error";
        
    }else{
        result.value = temp;
        is_calc = true;
        dec = false;
        
  }
}


function is_ope_last(){
  return ["+","-","*","/"].includes(result.value.toString().slice(-1));
}
//["+","-","×","÷"]と一致するか
// result.value.toString().slice(-1)」は計算式の最後の文字を取得