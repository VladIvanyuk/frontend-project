import { DeepPartial } from '@reduxjs/toolkit'
import { IStateSchema } from 'app/providers/StoreProvider'
import { getLoginPassword } from './getLoginPassword'

describe('getLoginIsLoading.test', () => {
    test('Should return error', () => {
        const state: DeepPartial<IStateSchema> = {
            loginForm: {
                password: '123'
            }
        }
        expect(getLoginPassword(state as IStateSchema)).toEqual('123')
    })

    test('Should return undefined', () => {
        const state: DeepPartial<IStateSchema> = {}
        expect(getLoginPassword(state as IStateSchema)).toEqual('')
    })
})
