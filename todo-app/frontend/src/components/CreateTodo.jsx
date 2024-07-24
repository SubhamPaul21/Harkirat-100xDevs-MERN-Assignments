export function CreateTodo() {
    return (
        <div>
            <input style={{
                padding: 10,
                margin: 5
            }} type="text" name="title" id="title" placeholder="title" /><br />
            <input style={{
                padding: 10,
                margin: 5
            }} type="text" name="description" id="description" placeholder="description" /><br />

            <button style={{
                margin: 5
            }}>Add a Todo</button>
        </div>
    )
}