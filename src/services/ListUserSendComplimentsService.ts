import { getCustomRepository } from 'typeorm'
import { ComplimentRepository } from '../repositories/ComplimentRepository'

class ListUserSendComplimentsService {
    async execute(user_id: string) {
        const complimentRepository = getCustomRepository(ComplimentRepository)

        const compliment = await complimentRepository.find({
            where: {
                user_sender: user_id
            }
        })

        return compliment
    }
}

export { ListUserSendComplimentsService }