// recursion

function expo(a, b, cb) {
    if (b === 0) return 1
    return a * expo(a, b - 1, cb)
}

const resultExpo = expo(5, 3, (a) => a   )
console.log(resultExpo);


// Fetch

function postCard(data) {
    const postElement = document.createElement('div')
    postElement.classList.add('post')
    
    const titleElement = document.createElement('h2')
    titleElement.textContent = data.title
    const bodyElement = document.createElement('p')
    bodyElement.textContent = data.body
    
    postElement.appendChild(titleElement)
    postElement.appendChild(bodyElement)
    
    return postElement
}

async function fetchData() {
    try {
        const rawData = await fetch("https://jsonplaceholder.typicode.com/posts")
        if (!rawData.ok) {
            throw Error('not a good request')
        }
        const data = await rawData.json()
        
        data.forEach((postData) => {
            const post = postCard(postData)
            document.body.append(post)
        });
    } catch (error) {
        console.log(error.message)
    }
}

fetchData()


// deep copy - async

// დაწერე ასინქრონული ფუნქცია, რომელიც
// არგუმენტად იღებს ობიექტს და აკეთებს
// deep copy-ს
// ● ფუნქციამ უნდა გამოიძახოს reject თუ
// არგუმენტი არ არის ობიექტი. თუ ყველაფერი
// კარგად არის, გამოიძახოს resolve
// კოპირებული ობიექტით


 
user2 = {
  name: "davit",
  age: {
    adult: "28"
  }
};

const deepCopy = (user2) => {

    new Promise((resolve, reject) => {
        
    })

   
}


user2.age.adult = 40
console.log(user2);
const resultCopy = deepCopy(user2)
console.log(resultCopy);