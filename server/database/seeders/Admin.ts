import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Admin from 'App/Models/Admin'

export default class extends BaseSeeder {
  public async run() {
    await Admin.create({
      email: 'admin@gmail.com',
      password: 'password'
    })
  }
}
