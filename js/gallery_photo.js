// ギャラリーに表示する画像のリストを定義
const images = [
    { src: 'image_photo/photo (1).png', caption: '内川（富山県射水市）' },
    { src: 'image_photo/photo (2).png', caption: 'TOYOTA YARIS & DAIHATSU Rocky' },
    { src: 'image_photo/photo (3).png', caption: 'NISSAN NOTE' },
    { src: 'image_photo/photo (4).png', caption: '火水土 HIMITO 1（石川県金沢市）' },
    { src: 'image_photo/photo (5).png', caption: '火水土 HIMITO 2（石川県金沢市）' },
    { src: 'image_photo/photo (6).png', caption: '火水土 HIMITO 3（石川県金沢市）' },
    { src: 'image_photo/photo (7).png', caption: '石川県立図書館 1（石川県金沢市）' },
    { src: 'image_photo/photo (8).png', caption: '石川県立図書館 2（石川県金沢市）' },
    { src: 'image_photo/photo (9).png', caption: '新湊曳山祭り（富山県射水市）' },
    { src: 'image_photo/photo (10).png', caption: '富山城、ライトレール（富山県富山市）' },
    { src: 'image_photo/photo (11).png', caption: 'NISSAN FAIRLADY Z 現行モデル' },
    { src: 'image_photo/photo (12).png', caption: '鼓門（石川県金沢市）' },
    { src: 'image_photo/photo (13).png', caption: '岩崎ノ鼻灯台 1（富山県高岡市）' },
    { src: 'image_photo/photo (14).png', caption: '岩崎ノ鼻灯台 2（富山県高岡市）' },
    { src: 'image_photo/photo (15).png', caption: '帆船海王丸（富山県射水市）' },
    { src: 'image_photo/photo (16).png', caption: '新湊大橋（富山県射水市）' },
    { src: 'image_photo/photo (17).png', caption: '京都駅（京都府京都市）' },
    { src: 'image_photo/photo (18).png', caption: '帰り道の空（富山県射水市）' },

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