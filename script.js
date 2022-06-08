const advice = async() => {
    try {
        const data = await axios.get(`https://api.adviceslip.com/advice`)
        console.log(data.data)
        let id = document.getElementById("p");
        id.innerText = `ADVICE #${data.data.slip.id}`
        let advice = document.getElementById("div3");
        advice.innerText = `"${data.data.slip.advice}"`
    } catch (error) {
        console.log(error)
    }
}

advice()

const button = document.querySelector(".div")
button.addEventListener("click", advice)