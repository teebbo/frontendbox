(() => {
    const publicationActive = 'publication--active';
    const display_container = document.querySelector(".publication .author-container")
    const share_container = document.querySelector(".socials-container")
    const share_btn_author = document.querySelector(".publication .author__content .share-btn")

    const onEnter = () => {
        display_container.classList.remove(publicationActive)
        share_container.classList.add(publicationActive)
    };

    share_btn_author.onmouseenter = onEnter
    share_btn_author.onpointerover = onEnter

    const onLeave = () => {
        display_container.classList.add(publicationActive)
        share_container.classList.remove(publicationActive)
    };

    share_container.onmouseleave = onLeave
    share_container.onpointerout = onLeave

})()