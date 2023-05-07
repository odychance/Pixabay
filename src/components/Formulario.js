import React from 'react'
import {useState} from 'react'
import Error from './Error'

const Formulario = ({setBusqueda}) => {

    const [termino, setTermino] = useState('')
    const [error, setError] = useState(false)

    const buscarImagenes = e => {
        e.preventDefault();

        if(termino.trim() === '') {
            setError(true)
            return;

        }
        setError(false)
        setBusqueda(termino)
    }

  return (
    <form
        onSubmit={buscarImagenes}
    >
        <div className='row'>
            <div className='form-group col-md-8'>
                <input
                    className='form-control form-control-lg'
                    type="text"
                    placeholder="Busca una imagen, Ejm.: Carros"
                    onChange={ e => setTermino(e.target.value)}
                />
            </div>
            <div className='form-group col-md-4'>
                <input
                    className='btn btn-lg btn-danger btn-block'
                    type='submit'
                    value='buscar'
                />
            </div>
        </div>

        {error ? <Error mensaje='Agrega un termino de busqueda' /> : null}
    </form>
    )
}

export default Formulario