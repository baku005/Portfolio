// ギャラリーに表示する画像のリストを定義
const images = [
    { src: 'image_illust/illust (1).png', caption: '武装したメイド' },
    { src: 'image_illust/illust (2).png', caption: 'くらげ' },
    { src: 'image_illust/illust (3).png', caption: '朝の光景' },
    { src: 'image_illust/illust (4).png', caption: '不思議のポケモンダンジョン20XX ポスター風ファンアート' },
    { src: 'image_illust/illust (5).png', caption: 'ポケットモンスターシリーズより「マリィ」' },
    { src: 'image_illust/illust (6).png', caption: 'ポケットモンスターシリーズより「メッソン」' },
    { src: 'image_illust/illust (7).png', caption: 'ポケットモンスターシリーズより「ミズゴロウ」' },
    { src: 'image_illust/illust (8).png', caption: 'ポケットモンスターシリーズより「シロナ」' },
    { src: 'image_illust/illust (9).png', caption: '呪術廻戦より「五条 悟」' },
    { src: 'image_illust/illust (10).png', caption: 'ずっと真夜中でいいのに。より「ニラちゃん（お勉強しといてよ）」' },

    // 画像を追加するだけで反映されます
];

// ギャラリーを生成する
function loadGallery() {
    const gallery = document.getElementById('gallery');

    images.forEach(image => {
        const thumbnail = document.createElement('div');
        thumbnail.className = 'thumbnail';
        thumbnail.onclick = () => showPopup(image.src, image.caption);

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.caption;

        thumbnail.appendChild(img);
        gallery.appendChild(thumbnail);
    });
}

// ポップアップを表示する
function showPopup(imageSrc, caption) {
    const popup = document.getElementById('popup');
    const popupImage = document.getElementById('popup-image');
    const popupCaption = document.getElementById('popup-caption');

    // 画像のロード完了後にリサイズ
    popupImage.onload = () => resizeImage(popupImage);

    popupImage.src = imageSrc;
    popupCaption.textContent = caption;
    popup.style.display = 'flex';
}

// ポップアップを閉じる
function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

// 画像のリサイズ処理
function resizeImage(img) {
    const maxWidth = window.innerWidth * 0.9; // 画面幅の90%
    const maxHeight = window.innerHeight * 0.9; // 画面高さの90%

    // 画像の元のサイズ
    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;

    // アスペクト比を維持しながらリサイズ
    if (imgWidth > maxWidth || imgHeight > maxHeight) {
        const widthRatio = maxWidth / imgWidth;
        const heightRatio = maxHeight / imgHeight;
        const ratio = Math.min(widthRatio, heightRatio);

        img.style.width = `${imgWidth * ratio}px`;
        img.style.height = `${imgHeight * ratio}px`;
    } else {
        // 元のサイズで表示
        img.style.width = `${imgWidth}px`;
        img.style.height = `${imgHeight}px`;
    }
}

// ページ読み込み時にギャラリーをロード
document.addEventListener('DOMContentLoaded', loadGallery);