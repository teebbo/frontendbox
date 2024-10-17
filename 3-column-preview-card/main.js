(
    () => {
        const container = document.body.querySelector(".container")

        data().reverse()
            .forEach(value => {
            const card = document.createElement('div')
            card.classList.add('card', `${value.classModifier}`)
            card.append(
                createImg(value.src),
                createHeading(value.heading),
                createParagraph(value.text),
                createCta()
            )
            container.prepend(card)
        })

    }
)()

function createImg(src) {
    const element = document.createElement('img')
    element.setAttribute('src', src)
    element.setAttribute('alt', '')
    return element
}

function createHeading(value) {
    const element = document.createElement('h1');
    element.setAttribute('class', 'category')
    element.innerText = value
    return element
}

function createParagraph(value) {
    const element = document.createElement('p');
    element.innerText = value
    return element
}

function createCta() {
    const element = document.createElement('a');
    element.setAttribute('class', 'cta')
    element.innerText = 'Learn more'
    return element
}

function data() {
    return [
        {
            src: "images/icon-sedans.svg",
            heading: "Sedans",
            classModifier: "sedans",
            text: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'
        },
        {
            src: "images/icon-suvs.svg",
            heading: "Suvs",
            classModifier: "suv",
            text: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'
        },
        {
            src: "images/icon-luxury.svg",
            heading: "Luxury",
            classModifier: "luxury",
            text: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.'
        }
    ]
}