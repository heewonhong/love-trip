function formatTime(ms: number) {
  const minute = 60 * 1000
  const hour = 60 * minute
  const day = 24 * hour

  const days = Math.floor(ms / day)

  // 핫딜 종료
  if (days < 0) {
    return ''
  }

  const remainTime = Math.floor((ms - days * day) / hour)
  const remainMinute = Math.floor(
    (ms - days * day - remainTime * hour) / minute,
  )
  const remainSec = Math.floor(
    (ms - days * day - remainTime * hour - remainMinute * minute) / 1000,
  )

  const HH = `${remainTime}`.padStart(2, '0')
  const mm = `${remainMinute}`.padStart(2, '0')
  const SS = `${remainSec}`.padStart(2, '0')

  return days > 0 ? `${days}일 ${HH}:${mm}:${SS}` : `${HH}:${mm}:${SS}`
}

export default formatTime
