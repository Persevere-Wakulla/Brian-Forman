


async function getData(){
    const res = await fetch('http://localhost:3000')
    const data = await res.json()

    console.log(data);

    return(data)
    
}

getData()