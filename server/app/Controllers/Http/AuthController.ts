import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import LoginValidator from 'App/Validators/Auth/LoginValidator'

export default class AuthController {
    public async login({ auth, request, response }: HttpContextContract) {
        const { email, password } = await request.validate(LoginValidator)


        const token = await auth.use('api').attempt(email, password, {
            expiresIn: process.env.TOKEN_EXPIRATION
        })

        return response.ok({
            "token": token,
        })
    }

    public async logout({ auth, response }: HttpContextContract) {
        await auth.use('api').revoke()

        return response.ok({
            revoked: true
        })
    }

    public async me({ auth, response }: HttpContextContract) {
        return response.ok({
            user: auth.user
        })
    }
}
