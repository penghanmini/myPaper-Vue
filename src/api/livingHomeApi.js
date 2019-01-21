/**
 * 作者: ph
 * 日期: 2019-01-17
 * 描述: 首页接口
 */
import apiFactory from "./apiFactory";

const module = {
  moduleName: "livingHome",
  apis: [{
    // 居家走马灯
    method: "get", // 请求方式
    name: "livingHomeCarousel", // 接口名称
    url: "/carousel" // 接口全路径
  },{
    // 居家分类
    method: "get", // 请求方式
    name: "livingHomeCategory", // 接口名称
    url: "/category" // 接口全路径
  },]
};

export default apiFactory(module)
