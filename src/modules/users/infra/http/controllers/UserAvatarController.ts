import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';

export default class UserAvatarController { 
    public async update(request: Request, response: Response): Promise<Response> {
        const updateUserAvatar = container.resolve(UpdateUserAvatarService);

        const user = await updateUserAvatar.execute({
          // await pq o UpdateUserAvatarService é uma promise
          user_id: request.user.id,
          avatarFileName: request.file.filename,
        });
    
        return response.json(classToClass(user));
    }
}