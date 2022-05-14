class client 
{
    constructor(socket)
    {
        this.stream = socket
        this.id = socket.remotePort
        this.init()
    }

    init()
    {
        this.stream.on('data',(buf)=>{
            console.log(this.id,'receive data',buf.toString())
        })
    }
}

module.exports = client