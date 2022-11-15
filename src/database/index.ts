import { Sequelize } from 'sequelize'

export const database = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'vidaAluno_development',
  username: 'postgres',
  password: '3301',
  //Define é utilizado para que converta dessa forma tipo_1 para tipo1
	define: {
    underscored: true
  }
})