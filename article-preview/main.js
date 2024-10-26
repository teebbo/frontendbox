(() => {

    const articleMeta = document.querySelector(".article__meta")
    const articleShare = document.querySelector(".article__share")
    const shareBtn = document.querySelector(".article__meta .share-btn")

    const show = (element) => {
        element.classList.add('show')

        if (element.classList.contains('hide')) {
            element.classList.remove('hide')
        }
    }

    const hide = (element) => {
        element.classList.add('hide')
        if (element.classList.contains('show')) {
            element.classList.remove('show')
        }
    }
    let onOver = () => {
        hide(articleMeta)
        show(articleShare)
    };

    const onLeave = () => {
        show(articleMeta)
        hide(articleShare)
    };

    shareBtn.onmouseover = onOver
    shareBtn.onpointerover = onOver
    articleShare.onmouseleave = onLeave
    articleShare.onpointerleave = onLeave

    let mql = window.matchMedia("(min-width: 920px)");
    if (mql.matches) {
        onOver = () => {
            show(articleShare)
            articleMeta.classList.remove('hide')
        };
        shareBtn.onmouseover = onOver
        articleShare.onmouseleave = () => {
            hide(articleShare)
        }
    }

})()