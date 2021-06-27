import { NextFunction, Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { UserRepository } from '../repositories/UserRepository'

/**
 * [Middleware] Verify user admin
 */
export async function ensureAdmin(request: Request, response: Response, next: NextFunction) {
    /**
     * implements authentication (JWT)
     */
    const { user_id } = request

    const userRepository = getCustomRepository(UserRepository)

    const { admin } = await userRepository.findOne(user_id)

    if (admin)
        return next()

    return response.status(401).json({
        error: 'Unauthorized user!'
    })
}