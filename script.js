// recursion

function expo(a, b, cb) {
  if (b === 0) return 1;
  return a * expo(a, b - 1, cb);
}

const resultExpo = expo(5, 3, (a) => a);
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


const user2 = {
  name: "davit",
  age: {
    adult: "28",
  },
};

const deepCopy = (user) => {
  return new Promise((resolve, reject) => {
    if (typeof user === "object") {
      resolve({ ...user, age: { ...user.age, adult: "28" } });
    } else {
      reject("user is not an OBJECT");
    }
  });
};

deepCopy(user2)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//   check
user2.age.adult = 40;

console.log(user2);

// async await

// const user2 = {
//   name: "davit",
//   age: {
//     adult: "28",
//   },
// };

// const deepCopy = async (user) => {
//   return new Promise((resolve, reject) => {
//     if (typeof user === "object") {
//       resolve({ ...user, age: { ...user.age, adult: "28" } });
//     } else {
//       reject("user is not an OBJECT");
//     }
//   });
// };
// async function copyUser() {
//   try {
//     const result = await deepCopy(user2);
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }

// copyUser();

// user2.age.adult = 40;

// console.log(user2);
