let api_key='RcBCA9Tq11SNO7LOMjrdYJctsEqVgfCO'

    const Trending= async ()=>{

        try{

            let res= await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${api_key}&limit=25&rating=g`)

            let data=await res.json()

            let actualData=(data.data)
            // console.log(data.data)
            appendData(actualData)
        }catch(err){
            console.log(err)
        }
    }
    Trending();

    
    const appendData= async (data)=>{

        const container=document.getElementById('container')

        data.forEach((el)=>{


            let img=document.createElement('img')
            img.src=el.images.downsized.url
            img.addEventListener('click',()=>{

                detailGif(el.id)
            })       
            
            container.append(img)

        })

    }
    const detailGif= (id)=>{
        localStorage.setItem('details',JSON.stringify(id))
        window.location.href="gif.html"
    }

    const random= async ()=>{
        const container=document.getElementById('container')
        container.innerHTML=null

        try{
            let res=await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}&rating=g`)

            let data=await res.json()

            let actualData=data.data
            console.log(data)

            let img=document.createElement('img')
            img.src=actualData.images.downsized.url
            img.addEventListener('click',()=>{
                detailGif(actualData.id)
            })
            // window.location.href="gif.html"

            container.append(img)

        }catch(err){
            console.log(err)
        }
        
    }

    const categories=async ()=>{
        let container=document.getElementById('container')
        container.innerHTML=null

        let sorting=document.getElementById('sorting')
        sorting.innerHTML=null

        try{
            let res= await fetch(`https://api.giphy.com/v1/gifs/categories?api_key=${api_key}`)

            let data=await res.json()

            let actualData=data.data
            // console.log(data)

            localStorage.setItem('categories',JSON.stringify(actualData))

            let sorting_Z_A=document.createElement('button');
            sorting_Z_A.innerText="Z-A"
            sorting.append(sorting_Z_A);

            let sorting_A_Z=document.createElement('button');
            sorting_A_Z.innerText="A-Z"
            sorting.append(sorting_A_Z);
            
            let dum;
            sorting_Z_A.onclick=()=>{
                sorting_cat(dum=false)
            }
            sorting_A_Z.onclick=()=>{
                sorting_cat(dum=true)
            }

            actualData.forEach((e)=>{
                
                let name=document.createElement('p')

                name.innerHTML=e.name
                // console.log(name)

                let img=document.createElement('img')
                img.src=e.gif.images.downsized.url
                img.addEventListener('click',()=>{
                    detailGif(e.gif.id)
                })

                container.append(img,name)
            })
        }catch(err){
            console.log(err)
        }      
    }

    const sorting_cat=(dum)=>{
        let data=JSON.parse(localStorage.getItem('categories'))

        if(dum==true){
            data=data.reverse();
        }
        

        let gif=document.getElementById('container');
        gif.innerHTML=null

        data.forEach((e)=>{

            let name=document.createElement('p')

                name.innerHTML=e.name
                // console.log(name)

                let img=document.createElement('img')
                img.src=e.gif.images.downsized.url
                img.addEventListener('click',()=>{
                    detailGif(e.gif.id)
                })

                container.append(img,name)
        })
    }

    const gif=async()=>{
        try{
            let container=document.getElementById('container')
            container.innerHTML=null

            let query =document.getElementById('search').value
        
            if(query==""){
                alert("Please provide your input")
            }
            let res= await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${query}&limit=25&offset=0&rating=g&lang=en`)

            let data= await res.json()

            let actualData=data.data

            console.log(data)

            actualData.forEach((e)=>{
                
                let name=document.createElement('p')

                name.innerHTML=e.title
                // console.log(name)

                let img=document.createElement('img')
                img.src=e.images.downsized.url
                img.addEventListener('click',()=>{
                    detailGif(e.id)
                })

                container.append(img,name)
            })
        }catch(err){
            console.log(err)
        }
        
    }
    
    const translate=async()=>{
        try{
            let container=document.getElementById('container')
            container.innerHTML=null

            let query =document.getElementById('search').value
        
            if(query==""){
                alert("Please provide your input")
            }
            let res= await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${api_key}&s=${query}`)

            let data= await res.json()

            let actualData=data.data

            console.log(actualData)

            actualData.forEach((e)=>{
                
                let name=document.createElement('p')

                name.innerHTML=e.title
                // console.log(name)

                let img=document.createElement('img')
                img.src=e.images.downsized.url
                img.addEventListener('click',()=>{
                    detailGif(e.gif.id)
                })

                container.append(img,name)
            })
        }catch(err){
            console.log(err)
        }
        
    }