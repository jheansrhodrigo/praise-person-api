import { getCustomRepository } from 'typeorm'
import { ComplimentRepository } from '../repositories/ComplimentRepository'

class ListUserReceiveComplimentsService {
    async execute(user_id: string) {
        const complimentRepository = getCustomRepository(ComplimentRepository)

        const compliment = await complimentRepository.find({
            where: {
                user_receiver: user_id
            }
        })

        return compliment
    }
}

export { ListUserReceiveComplimentsService }