$(function(){
    // ヘッダー下のテキストを浮かび上がらせる
    $('.name-top').fadeIn(3000);
    $('.name-bottom').fadeIn(3000);
    $('.subname').fadeIn(3000);
    // Aboutのテキストを浮かび上がらせる
    $('.about-texts').fadeIn(6000);
    // サービス概要に触れるとテキストが現れるようにする
    $('.gohan-hover').hover(
        function() {
          // 子要素の「.gohan-texts」の要素を取得し、text-activeクラスをつける
          $(this).find('.gohan-texts').addClass('text-active');
          
        },
        function() {
          // 子要素の「.gohan-texts」の要素を取得し、text-activeクラスを外す
          $(this).find('.gohan-texts').removeClass('text-active');
          
        }
      );
      $('.dna-hover').hover(
        function() {
          // 子要素の「.dna-texts」の要素を取得し、text-activeクラスをつける
          $(this).find('.dna-texts').addClass('text-active');
          
        },
        function() {
          // 子要素の「.dna-texts」の要素を取得し、text-activeクラスを外す
          $(this).find('.dna-texts').removeClass('text-active');
          
        }
      );

      $('.peer-hover').hover(
        function() {
          // 子要素の「.com-texts」の要素を取得し、text-activeクラスをつける
          $(this).find('.peer-texts').addClass('text-active');
          
        },
        function() {
          // 子要素の「.com-texts」の要素を取得し、text-activeクラスを外す
          $(this).find('.peer-texts').removeClass('text-active');
          
        }
      );
      $('.kanri-hover').hover(
        function() {
          // 子要素の「.kan-texts」の要素を取得し、text-activeクラスをつける
          $(this).find('.kanri-texts').addClass('text-active');
          
        },
        function() {
          // 子要素の「.kan-texts」の要素を取得し、text-activeクラスを外す
          $(this).find('.kanri-texts').removeClass('text-active');
          
        }
      );
      // スライドショーの設定をする
      $(document).ready(function(){
        $('.slider').bxSlider({
            auto: true,
            pause: 3000,
        });
    });
       // 
     
});

// bmiの計算
let weight; //変数 体重
let height; //変数 身長

//関数作成
function fun() {
    weight = document.getElementById('weight').value; //体重の値を取得
    height = document.getElementById('height').value; //身長の値を取得

    //入力した値が0以上の場合計算処理する
    if (parseFloat(weight) > 0 && parseFloat(height) > 0) {  //parseFloat(文字列変数)⇒数値に変換

        //BMI計算
        let bmi = weight / (height * height);

        //計算式表示
        document.getElementById("bmi_weight_value").value = weight;
        document.getElementById("bmi_height_value1").value = height;
        document.getElementById("bmi_height_value2").value = height;

        //BMI結果表示
        document.getElementById("bmi_value").value = Math.round(bmi * 100) / 100;  //小数点桁数指定で四捨五入の場合、桁数をずらしてあげる.

        // 適正体重の計算
        document.getElementById("bmi_height_value3").value = height;
        document.getElementById("bmi_height_value4").value = height;
        document.getElementById("bmi2_value").value = Math.round(height*height*20*100)/ 100;  
        // 適正エネルギー量の計算
        var work = document.getElementById('work').value; //職業の番号を取得
        switch(work){
          case "①":
            document.getElementById("bmi3_value").value = Math.round(height*height*20*100)/ 100 *25; 
            document.getElementById("bmi4_value").value = Math.round(height*height*20*100)/ 100 *30; 
            break;
          case "②":
            document.getElementById("bmi3_value").value = Math.round(height*height*20*100)/ 100 *30; 
            document.getElementById("bmi4_value").value = Math.round(height*height*20*100)/ 100 *35; 
            break; 
          case "③":
            document.getElementById("bmi3_value").value = Math.round(height*height*20*100)/ 100 *35; 
            document.getElementById("bmi4_value").value = Math.round(height*height*20*100)/ 100 *40; 
            break;
            
        }


    }
    //入力された値が0以上でない場合エラー
    else {
        //エラー表示
        alert("値エラー");
    }
    $('#bmi_value').addClass('bmi_value_action');
    $('#bmi2_value').addClass('bmi_value_action');
    $('#bmi3_value').addClass('bmi_value_action');
    $('#bmi4_value').addClass('bmi_value_action');
}

