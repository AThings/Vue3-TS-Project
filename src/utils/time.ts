// 获取中文的时间段
export const getCNTime = () => {
  let message = ''
  const hours = new Date().getHours()
  console.log(hours, 'hours')
  if (hours < 9) {
    message = '早上'
  } else if (hours < 12) {
    message = '上午'
  } else if (hours === 12) {
    message = '中午'
  } else if (hours < 18) {
    message = '下午'
  } else {
    message = '晚上'
  }
  return message
}
