import { getCustomRepository } from 'typeorm'
import { UserRepository } from '../repositories/UserRepository'
import { sign } from 'jsonwebtoken'
import { compare } from 'bcryptjs'

import config from 'config'

interface IAuthenticateRequest {
    email: string
    password: string
}

class AuthenticateUserService {
    async execute({ email, password }: IAuthenticateRequest) {
        const userRepository = getCustomRepository(UserRepository)

        const user = await userRepository.findOne({
            email
        })

        if (!user)
            throw new Error('Incorrect e-mail or password!')

        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch)
            throw new Error('Incorrect e-mail or password!')

        const generateToken = sign(
            {
                email: user.email
            },
            config.get('App.auth.key'),
            {
                subject: user.id,
                expiresIn: config.get('App.auth.tokenExpiresIn')
            }
        )

        return {
            token: generateToken
        }
    }
}

export { AuthenticateUserService }