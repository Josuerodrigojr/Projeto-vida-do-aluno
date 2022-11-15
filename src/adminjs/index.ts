import AdminJs from 'adminjs'
import AdminJsExpress from '@adminjs/express'
import AdminJsSequelize from '@adminjs/sequelize'
import { database } from '../database'
import {locale} from './locale'

AdminJs.registerAdapter(AdminJsSequelize)

export const adminJs = new AdminJs({
  databases: [database],
  rootPath: '/admin',
  branding: {
    companyName: 'VidaAluno',
    logo: '/logo.png',
    theme: {
      colors: {
        primary100: '#166E6A',
	      primary80: '#197D78',
	      primary60: '#20A19B',
	      primary40: '#29D1C9',
		    primary20: '#30F2E9',
	      grey100: '#151515',
	      grey80: '#333333',
	      grey60: '#4d4d4d',
	      grey40: '#666666',
	      grey20: '#dddddd',
	      filterBg: '#333333',
	      accent: '#151515',
	      hoverBg: '#151515',
      }
    }
  },
  locale:locale
})

export const adminJsRouter = AdminJsExpress.buildRouter(adminJs)