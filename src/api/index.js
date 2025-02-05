import request from '@/http/request'

/**
 * @returns 采集数数据
 */
export const gather = () => {
  return request({
    url: '/gather',
    method: 'get'
  })
}

/**
 * 
 * @returns 收费数据
 */
export const charge = () => {
  return request({
    url: '/charge',
    method: 'get'
  })
}

/**
 * 
 * @returns 门诊数据
 */
export const outPatient = () => {
  return request({
    url: '/outPatient',
    method: 'get'
  })
}

/**
 * 
 * @returns 住院数据
 */
export const hospitalization = () => {
  return request({
    url: '/hospitalization',
    method: 'get'
  })
}

/**
 * 
 * @returns 医院位置
 */
export const hospitalPostion = () => {
  return request({
    url: '/hospitalPostion',
    method: 'get'
  })
}
