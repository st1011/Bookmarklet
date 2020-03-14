(function () {
    /**
     * Amazonのサイトから該当するモノレートのページへジャンプする
     */
    const res = document.URL.match(/https?:\/\/.*amazon\..*\/(product|dp)\/([a-zA-Z0-9]+)\/.*/);
    if (!res || res.length !== 3) {
        alert('Amazonの製品URLを見つけられませんでした');
        return;
    }

    const productId = res[2];
    const url = 'https://mnrate.com/item/aid/' + productId;
    window.open(url);
})()
