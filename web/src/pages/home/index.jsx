import { useLocalStorage } from 'react-use'
import { Navigate } from 'react-router-dom'

export function Home() {
  const [auth] = useLocalStorage('auth', {})

  if (auth?.user?.id) {
    return <Navigate to="/dashboard" repalce={true} />
  }

  return (
    <div className=" h-screen bg-red-700 text-white p-6 flex flex-col items-center space-y-6">

      <header className="container flex justify-center max-w-3xl p-4">
        <img src="/img/logo.svg" className="w-40" alt="logo" />
      </header>


      <div className="container p-4 flex-1 flex flex-col items-center md:flex-row space-y-5 md:space-y-0 md:space-x-6">

        <div className="md:flex-1 flex justify-center">
          <img className="w-full max-w-sm" src="/img/img.png" alt="foto_perfil" />
        </div>

        <div className="md:flex-1 flex flex-col space-y-6">

          <h1 className="text-2xl text-center md:text-left font-bold ">Dê o seu palpite na Copa do Mundo do Catar 2022!</h1>

          <a href="/signup" className="text-center text-red-700 bg-white text-xl px-10 py-3 rounded-xl">
            Criar minha conta
          </a>

          <a href="/login" className="text-center text-white border border-white text-xl px-10 py-3 rounded-xl">
            Fazer login
          </a>
        </div>
      </div>
    </div>
  )
}

