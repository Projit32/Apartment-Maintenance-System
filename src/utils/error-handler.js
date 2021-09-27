const handleError=(e,res)=>{
    console.log("handler : ",e)
    if(e.status) res.status(e.status).send(e)
    else res.status(500).send()
}

module.exports = {handleError}