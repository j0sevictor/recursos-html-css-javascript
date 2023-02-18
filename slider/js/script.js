document.addEventListener('DOMContentLoaded', () => {
    const slideNext = function (index) {
        const radioElem = document.querySelector(`#img${index}`)
        if (radioElem) radioElem.checked = true
    }
    
    let index = 0

    const slideInterval = setInterval(() => {
        index >= 5 ? index = 1 : index++
        slideNext(index)
    }, 5000)

    document.getElementsByName('slide').forEach((elem) => {
        elem.addEventListener('click', (e) => {
            clearInterval(slideInterval)
        })
    })

})

