(function () {
    /**
     * クリップボードにテキストを格納する
     * Firefox / Edgeあたりで動かせるようにするには
     * ユーザが意図したイベントを発行する必要がある
     * ref. https://uda2.com/blog/makelink/
     * @param {string} message 画面に表示するメッセージ
     * @param {string} text コピーするテキスト
     */
    function CopyToClipboard(message, text) {
        const b = document.createElement('div');
        document.body.appendChild(b);
        b.innerHTML = message;
        b.style.cssText = 'display:flex;align-items:center;justify-content:center;position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(255,255,255,0.8);font-size:24px;z-index:999;color:#333;margin:0;padding:0;';

        document.addEventListener('copy', (e) => {
            e.preventDefault();
            e.clipboardData.setData('text/plain', text);
        }, { once: true });
        b.addEventListener('click', (e) => {
            e.preventDefault();
            document.execCommand('copy');
            document.body.removeChild(b);
        });
    }

    /**
     * クリップボードへテキストを格納する
     */
    function Main() {
        const message = '確認画面に表示するメッセージ';
        const text = 'コピーするテキスト';

        CopyToClipboard(message, text);
    }

    Main();
})()
