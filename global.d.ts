// Use type safe message keys with `next-intl`
type Messages = typeof import('./messages/zh-CN.json')
declare interface IntlMessages extends Messages {}
