import { useState,useEffect } from 'react'
import { useLocalStorage, useAsyncFn } from 'react-use'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import { format, formatISO } from 'date-fns'

import { Icon, Card, DateSelect } from '~/components'

export const Dashboard = () => {

    const [currentDate, setDate] = useState(formatISO(new Date(2022, 10, 20)))
    const [auth] = useLocalStorage('auth', {})
    
    const [state, doFetch] = useAsyncFn(async (params) => {
        const res = await axios({
            method: 'get',
            baseURL: 'http://localhost:3000',
            url: '/games',
            params
        })
        return res.data
    })

    useEffect(() => {
        doFetch({ gameTime: currentDate })
    }, [currentDate])

    if (!auth?.user?.id) {
        return <Navigate to="/" repalce={true} />
    }

    return (
        <>
            <header className="bg-red-500 text-white p-4">
                <div className="container max-w-3xl flex justify-between ">
                    <img src="/img/logo_vinho.svg" className="w-28 md:w-40" alt="logo" />
                    <a href="/profile">
                        <Icon name="profile" className="w-10" />
                    </a>
                </div>
            </header>

            <main className='space-y-6'>

                <section id='header' className="bg-red-500 text-white p-4">
                    <div className='container max-w-3xl space-y-2'>
                        <span>Olá Eduardo</span>
                        <h3 className='text-2xl font-bold'>Qual é o seu palpite</h3>
                    </div>
                </section>

                <section id='content' className='container max-w-3xl  p-4 space-y-4'>

                    <DateSelect currentDate={currentDate} onChange={setDate}/>

                    <div className='space-y-4'>
                        {state.loading && 'Carregando jogoas...'}
                        {state.error && 'Ops! Algo deu errado.'}

                        {!state.loading && !state.error && state.value?.map(game => (
                            <Card
                                key={game.id}
                                gameId={game.id}
                                homeTeam={ game.homeTeam }
                                awayTeam={ game.awayTeam }
                                gameTime={format(new Date(game.gameTime),'H:mm')}
                            />
                        ))}
                    </div>
                </section>
            </main>
        </>
    )
}