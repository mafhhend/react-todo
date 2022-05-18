const FIREBASE_DOMAIN = "https://react-todo-d24b5-default-rtdb.firebaseio.com"


export async function addTodo(title) {
    const res = await fetch(`${FIREBASE_DOMAIN}/todos.json`, {
        method: "POST",
        body: JSON.stringify(title),
        headers: {
            "Content-Type": "application/json"
        }
    })

    if (!res.ok) throw new Error("Couldn't Make new Todo !")
    else return true;

}

export async function getTodos() {
    const res = await fetch(`${FIREBASE_DOMAIN}/todos.json`)
    const data = await res.json()
    if (!res.ok) throw Error("ERROR TO GET DATA FROM SERVER :|")
    const TransformedData = []
    for (let key in data) {
        TransformedData.push({
            id: key,
            title: data[key]
        })
    }
    return TransformedData
}

export async function deleteTodo(id) {
    const res = await fetch(`${FIREBASE_DOMAIN}/todos/${id}.json`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    const data = await res.json()
    console.log(data)
}
export async function updateTodo(id,todoText) {
    const res = await fetch(`${FIREBASE_DOMAIN}/todos/${id}.json`,{
        method:"PUT",
        body:JSON.stringify(todoText)
    })
    const data = await res.json()

    if (!res.ok) throw new Error("Couldn't Update the TODO !")


}