import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import config from 'config'

interface IPayload {
    sub: string
}

/**
 * [Middleware] Verify user authentication
 */
export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authToken = request.headers.authorization

    if (!authToken)
        return response.status(401).json({ error: 'Unauthorized user!' })

    const [schema, token] = authToken.split(' ')

    try {
        const { sub } = verify(token, config.get('App.auth.key')) as IPayload

        request.user_id = sub

        return next()
    } catch (error) {
        return response.status(401).json({ error: 'Unauthorized user!' })
    }
}
