const express = require("express")
const { ExpressPeerServer } = require("peer")

const app = express()

app.get("/", (req: any, res: { send: (arg0: string) => any }, next: any) =>
  res.send("Hi this is a video call!")
)

const server = app.listen(9000)

const peerServer = ExpressPeerServer(server, {
  path: "/video",
})

app.use("/peerjs", peerServer)
