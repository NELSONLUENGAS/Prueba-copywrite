import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import reverseText from '../Redux/actions';
import Swal from 'sweetalert2';

export default function Home(){
    const dispatch = useDispatch();
    const [state, setState ] = useState('');
    let text = useSelector(state => state.text);

    function handleOnChange(event){
        event.preventDefault();
        setState(event.target.value);
    }
    function handleOnSubmit(event){
        event.preventDefault();
        dispatch(reverseText(state));
        if(!state){
            Swal.fire({
                title: 'Error!',
                text: 'Text is required',
                icon: 'error',
                showConfirmButton: false,
                toast: true,
                position: 'center-end',
                timer: 2000,
                timerProgressBar: true,
            })
        }
        setState('')
    }

    return(
        <>
            <div className='navbar  bg-light bg-gradient p-2' >
                <span className='text-uppercase fs-2 fw-bolder fst-italic'>
                    App Reverse Text
                </span>
            <form class="d-flex" onSubmit={event => handleOnSubmit(event)}>
                <input class="form-control me-2" type="text" value={state} onChange={event => handleOnChange(event)} placeholder="Reverse Text" />
                <button class="btn btn-outline-success" type="submit" >Enviar</button>
            </form>
            </div>
            <div className='bg-dark text-light'>
                <div className='container text-center '>
                    <span className='nav d-flex justify-content-center p-2 fs-4'>
                        RESULTADOS
                    </span>
                    <div className='container d-flex justify-content-center flex-column '>
                        {
                            text.length ? 
                                text.map(txt => 
                                    <div className='d-flex justify-content-center'>
                                        <div className='d-flex justify-content-around shadow-sm p-3 mb-2 w-50 bg-body rounded text-dark'>
                                            <span>
                                                {txt.id}
                                            </span>
                                            <span>
                                                {txt.name}
                                            </span>
                                            <span>
                                                Palindromo: {txt.palindromo ? 'Si' : 'No'}
                                            </span>
                                        </div>
                                    </div>
                                )
                                : null
                        }
                    </div>
                </div>
            </div>
        </>
    )
}