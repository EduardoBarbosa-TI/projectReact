import { Icon, Card } from '~/components'

export const Dashboard = () => (
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
                <div className='flex space-x-4 p-4 items-center justify-center'>
                    <Icon name="arrowLeft" className="w-6 text-red-500" />
                    <span className='font-bold'>20 de novembro</span>
                    <Icon name="arrowRight" className="w-6 text-red-500" />
                </div>
                
                <div className='space-y-4'>
                    <Card
                        timeA={{ slug: 'sui' }}
                        timeB={{ slug: 'cam' }}
                        match={{ time: '7:00' }}
                    />
                    <Card
                        timeA={{ slug: 'uru' }}
                        timeB={{ slug: 'cor' }}
                        match={{ time: '13:30' }}
                    />
                    <Card
                        timeA={{ slug: 'por' }}
                        timeB={{ slug: 'gan' }}
                        match={{ time: '17:00' }}
                    />
                </div>

            </section>
        </main>
    </>
)