import React, {useState} from 'react'

const Busqueda = ({ getQuery }) => {
    const [text, setText] = useState('')

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }

    return (
        <section className="busqueda">
            <form>
                <input type="text" className="form-control"
                        placeholder="Busqueda por personaje"
                        value={text}
                        onChange={(e) => onChange(e.target.value)}
                        autoFocus />
            </form>
        </section>
    )
}

export default Busqueda
