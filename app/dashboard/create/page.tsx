export default function Create() {
  return (
    <div className="flex flex-col items-center max-w-2xl mx-auto p-4">
      <h1>Add Bill</h1>
      <div className="flex flex-col gap-4">
        <form>
          <input placeholder="name" />
          <textarea placeholder="description">
            
          </textarea>
          <input placeholder="amount" type="number" />
          <button type="submit">Add Bill</button>
        </form>
      </div>
    </div>
  )
}