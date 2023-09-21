import { useState } from "react"
import TextInput from "./TextInput"

export default function NewGameForm({addGame}){
    const [title, setTitle] = useState("")
    const [cover, setCover] = useState("")
  


    const handleSubmit = (e) => {
        e.preventDefault()
        addGame({title, cover})
        setTitle("")
        setCover("")
    }


    return (
        <form onSubmit={handleSubmit}>
            <TextInput id="title" label="Título:" value={title} setValue={setTitle}/>
            <TextInput id="cover" label="Capa:" value={cover} setValue={setCover}/>
            <button type="submit">Adicionar à biblioteca</button>
      </form>
    )
}