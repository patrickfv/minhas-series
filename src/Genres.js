import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Genres = () => {
    const [data, setData] = useState([])
    const renderLine = (record) => {
        return (
            <tr key={record.id}>
                <th scope='row'>{record.id}</th>
                <td>{record.name}</td>
                <td><button>+</button></td>
            </tr>
        )
    }
    useEffect(() => {
        axios.get('/api/genres')
        .then((res) => {
            //setData(res.data.data)
        })
    }, [])

    if(data.length === 0) {
        return (
            <div class="alert alert-warning" role="alert">
                Você não possui genêros criados!
            </div>
        )
    }

    return (
        <div>
        <h1>Genêro</h1>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th scope='col'>ID</th>
                    <th scope='col'>Nome</th>
                    <th scope='col'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {data.map(renderLine)}
            </tbody>
        </table>
        </div>
    )
}

export default Genres
