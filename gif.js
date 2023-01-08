let api_key='RcBCA9Tq11SNO7LOMjrdYJctsEqVgfCO';

const details= async ()=>{

    try{
        let id=JSON.parse(localStorage.getItem('details'))

        let res=await fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=${api_key}`)

        let data=await res.json()

        append(data)

        console.log(data)
    }catch(err){
        console.log(err)
    }      
}
details();

const append= (data)=>{

    let details=document.getElementById('details')

    let img=document.createElement('img')
    img.src=data.data.images.original.url

    let p=document.createElement('p')
    p.innerText=data.data.title
    
    details.append(img,p)
}