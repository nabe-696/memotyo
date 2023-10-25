$("#next").click(function(){ 
  
  $(".ana").html("怒られてもやりたいこと");
  
});
$("#next").click(function(){ 
  
  $(".ana").html("ddd");
  
});

$(function(){
  
  //ボタンクリックでテキスト変更
  $("#next").click(function(){
    //17未満=16までをカウント
    for( $i=1; $i<17; $i++ ){
      //16までいくと1に戻る
      if( $i == 16 ){$j = 1;}
      else{$j = $i + 1;}
      //ID番号でループさせてテキスト切り替え
      if( $( ".text" + $i ).css( "display" ) != "none" ){
        $( ".text" + $i ).hide();
        $( ".text" + $j ).show();
        //切り替え処理後にループ処理を中断させる
        break;
      }
    }
  });

});






