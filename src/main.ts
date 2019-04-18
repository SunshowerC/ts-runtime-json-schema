import schema from './types/response.json'

import { Validator } from 'jsonschema'

const v = new Validator()
v.addSchema(schema, '/api')


/** 
 * 校验数据
 * @param data - 要校验的数据对象
 * @param type - 接口名，对应 src/types/response.d.ts 文件的接口
 */
const validateResponseData = (data: any, type: string) => {
 
  const result = v.validate(data, {
    $ref: `api#/definitions/${type}`
  })

  // 校验失败，数据不符合预期， 此处应该进行 前端异常上报， 如 sentry 之类的
  if (!result.valid) {
    console.log('data is ', data)
    console.log('errors', result.errors.map((item) => item.toString()))
  }

  return data
}


/** 
 * 获取用户数据请求
 */
export const getArticle = (id:number): Promise<ApiRes.Article>=>{
  // 这里实现异步请求，如 fetch('https://api_server/getUserInfo')
  const mockUser = {
    name: 'xxxx',
    age: 'some string'
  }

  const mockArticle  = {
    author: mockUser,
    title: 'ss',
    type: 'code'
  }
  return Promise.resolve(mockArticle)
  .then(response => validateResponseData(response, `ApiRes.Article`))
}


getArticle(23434)
.then(res => {
  // do something with response
})