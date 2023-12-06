import { NextResponse } from 'next/server'

const checkToken  = async (bearer) =>{

  const response = await fetch("http://127.0.0.1:8000/usuarios/me", {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization" : 'Bearer ' + bearer
    }
  })
  if (response.ok) {
    if (response.status === 200) {
      const resJSON = await response.json();
      return resJSON
    }
    
    if (response.status === 400) {
      const resJSON = await response.json();
      return null
    }
  }
}

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  const cookie = request.cookies.has('auth') 
  console.log(cookie)
  if(cookie){
    console.log('tiene token')
    let token = request.cookies.get('auth');
    console.log(token)
    const usuario = await checkToken(token.value);
    console.log(usuario)

    if (request.nextUrl.pathname.endsWith('/CrearNoticia')) {
        if(usuario == null){
          return NextResponse.rewrite(new URL('/', request.url))
        }
      }

    return NextResponse.next()
  }
  console.log('NO tiene token')
  return NextResponse.rewrite(new URL('/', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/routes/:path*',
}
