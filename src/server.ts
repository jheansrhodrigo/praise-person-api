import 'reflect-metadata'
import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'

import { router } from './routes'

import './database'

const app = express()

/**
 * [Middleware] Use JSON protocol to requests
 */
app.use(express.json())

/**
 * Use routes defined in another file JS
 */
app.use(router)

/**
 * [Middleware] Use error handling
 */
app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof Error) {
        return response.status(400).json({
            error: error.message
        })
    }

    return response.status(500).json({
        status: "error",
        error: "Internal Server Error!"
    })
})

app.listen(3000, () => console.log('✅ Server is running at http://localhost:3000/'))