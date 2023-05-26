export default class Api{
   async getCharacter(id){
     const response  = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
     const data =    (await response).json()
     return data

    }
}