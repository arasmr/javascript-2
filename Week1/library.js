(function () {
    "use strict"

    let bookTitles = [
        "yabanci",
        "ucurtma_avcisi",
        "goge_bakma_duragi",
        "sozler",
        "calikusu",
        "sefkat_gunesi",
        "yolun_kaderi",
        "asrin_getirdigi_tereddutler",
        "acimak",
        "mai_ve_siyah"
    ];

    let bookInfo = {
        yabanci: {
            title:"Yabanci",
            author:"Albert Camus",
            language:"Turkish",
        },
        ucurtma_avcisi: {
            title: "Ucurtma Avcisi",
            author: "Halit Hüseyni",
            language: "Turkish",
        },
        goge_bakma_duragi: {
            title: "Goge Bakma Duragi",
            author: "Turgut Uyar",
            language: "Turkish",
        },
        sozler: {
            title: "Sozler",
            author: "Bediuzzaman Said Nursi",
            language: "Turkish",
        },
        calikusu: {
            title: "Calikusu",
            author: "Resat Nuri Guntekin",
            language: "Turkish",
        },
        sefkat_gunesi: {
            title: "Sefkat Gunesi",
            author: "Resit Haylamaz",
            language: "Turkish",
        },
        yolun_kaderi: {
            title: "Yolun Kaderi",
            author: "M. Fethullah Gulen",
            language: "Turkish",
        },
        asrin_getirdigi_tereddutler: {
            title: "Asrin Getirdigi Tereddutler",
            author: "M. Fethullah Gulen",
            language: "Turkish",
        },
        acimak: {
            title: "Acimak",
            author: "Resat Nuri Guntekin",
            language: "Turkish",
        },
        mai_ve_siyah: {
            title: "Araba Sevdasi",
            author: "Halit Ziya Usakligil",
            language: "Turkish",
        },
        
    }
    
    let bookCov = {
        yabanci: "http://i.dr.com.tr/cache/600x600-0/originals/0000000064464-1.jpg",
        ucurtma_avcisi: "http://i.dr.com.tr/cache/600x600-0/originals/0000000153127-1.jpg",
        goge_bakma_duragi: "http://i.dr.com.tr/cache/600x600-0/originals/0000000264816-1.jpg",
        sozler: "http://kbimages1-a.akamaihd.net/Images/02a2a9bf-933c-45fe-a19c-1a53c4f3b766/600/600/False/image.jpg",
        calikusu: "http://i.dr.com.tr/cache/600x600-0/originals/0000000052566-1.jpg",
        sefkat_gunesi: "http://img.neokur.com/photos/kitap/1388665940_b.jpg",
        yolun_kaderi: "http://is2.mzstatic.com/image/thumb/Publication18/v4/56/1e/1b/561e1bf1-3021-9be0-7247-caad67bea043/source/225x225bb.jpg",
        asrin_getirdigi_tereddutler: "https://kbimages1-a.akamaihd.net/4406085f-91a0-40e4-b93a-31b4f825734c/166/300/False/asrn-getirdigi-tereddutler-1.jpg",
        acimak: "http://www.xn--edebiyatgretmeni-twb.net/wp-content/uploads/2013/01/ac%C4%B1mak.jpg",
        mai_ve_siyah:"http://1.bp.blogspot.com/-GXD8mUEcYxA/UOnNPqk9H9I/AAAAAAAADuA/yLmLPTr6yXg/s1600/mai-ve-siyah.jpg",
    }

    function renderHtml() {
        let div = document.getElementById("myFavBook");

        for (let i = 0; i < bookTitles.length; i++){
            let bookId = bookTitles[i];

            const ul = document.createElement("ul");
            div.appendChild(ul);

            const h1 = document.createElement("h1");
            let bookTitle = bookInfo[bookId].title;
            ul.appendChild(h1);
            h1.innerHTML = bookTitle;

            const li1 = document.createElement("li");
            let bookAuthor = bookInfo[bookId].author;
            ul.appendChild(li1);
            li1.innerHTML = bookAuthor;

            const li2 = document.createElement("li");
            let bookLang = bookInfo[bookId].language;
            ul.appendChild(li2);
            li2.innerHTML = bookLang;

            const img = document.createElement("img");
            img.setAttribute("src", bookCov[bookId]);
            ul.appendChild(img);

            let li = document.createElement("li");
            ul.appendChild(li);
        }
        
    }
    renderHtml();
})();

