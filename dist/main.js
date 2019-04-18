"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const response_json_1 = __importDefault(require("./types/response.json"));
const jsonschema_1 = require("jsonschema");
const v = new jsonschema_1.Validator();
v.addSchema(response_json_1.default, '/api');
/**
 * 校验数据
 * @param data - 要校验的数据对象
 * @param type - 接口名，对应 src/types/response.d.ts 文件的接口
 */
const validateResponseData = (data, type) => {
    const result = v.validate(data, {
        $ref: `api#/definitions/${type}`
    });
    // 校验失败，数据不符合预期， 此处应该进行 前端异常上报， 如 sentry 之类的
    if (!result.valid) {
        console.log('data is ', data);
        console.log('errors', result.errors.map((item) => item.toString()));
    }
    return data;
};
/**
 * 获取用户数据请求
 */
exports.getArticle = (id) => {
    // 这里实现异步请求，如 fetch('https://api_server/getUserInfo')
    const mockUser = {
        name: 'xxxx',
        age: 'some string'
    };
    const mockArticle = {
        author: mockUser,
        title: 'ss',
        type: 'code'
    };
    return Promise.resolve(mockArticle)
        .then(response => validateResponseData(response, `ApiRes.Article`));
};
exports.getArticle(23434)
    .then(res => {
    // do something with response
});
