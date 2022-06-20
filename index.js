import express from "express"
import cors from "cors"
import router from './routes/router.js'

const app = express()
app.use(express.json({ extended: true }))
app.use(cors())
app.use("/api", router)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log("Servidor corriendo en el puerto: " + PORT);
})