(function() {
    var btn = document.getElementById('btn');
    
    // ボタンを押したときの処理
    btn.addEventListener('click', function() {
        result();
    });

    // ランダムに値を生成する処理
    function result() {
        var index = Math.floor(Math.random() *5);
        
        switch (index) {
            case 0:
                output.textContent = '“　だめだよ。僕は孤独になりたいんだ。　”';
                break;
            case 1:
                output.textContent = '“　スネ夫の物は俺の物、俺の物は俺の物　”';
                break;
            case 2:
                output.textContent = '“　お前はもう、死んでいる　”';
                break;
            case 3:
                output.textContent = '“　さようなら天さん・・・どうか死なないで　”';
                break;
            case 4:
                output.textContent = '“　あのね、立派な人になんかにならなくてもいいの。　感じの良い人になって下さい。　”';
                break; 
        }
    }
})();