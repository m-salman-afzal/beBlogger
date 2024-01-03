import type {TUserSelect} from "@infra/database/models/user.model";

interface IUserEntity extends TUserSelect {}

export interface UserEntity extends IUserEntity {}

export class UserEntity {
    constructor(body: IUserEntity) {
        this.name = body.name;
        this.email = body.email;
        this.password = body.password;
        this.type = body.type;
    }

    static create(body: IUserEntity) {
        return new UserEntity(body);
    }
}
