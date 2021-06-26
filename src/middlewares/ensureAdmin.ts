import { NextFunction, Request, Response } from "express";

/**
 * [Middleware] Verify user authentication
 */
export function ensureAdmin(request: Request, response: Response, next: NextFunction) {
    /**
     * implements authentication (JWT)
     */
    const admin = true

    if (admin)
        return next()

    return response.status(401).json({
        error: 'Unauthorized user!'
    })
}