export const debounce = (cb, delay)=>{
        let timeoutId;
        return function (...args) {
          if (timeoutId) {
            clearTimeout(timeoutId);
          }
          timeoutId = setTimeout(() => {
            cb(...args);
          }, delay);
        };
}

export const convertSecondsToMinuteString=(seconds)=>{
  const hours = Math.floor(seconds / 3600);
  const remainingSeconds = seconds % 3600;
  const minutes = Math.floor(remainingSeconds / 60);
  let result = '';
  if (hours > 0) {
    result += `${hours}H`;
  }
  if (minutes > 0 || hours > 0) {
    result += `${minutes}m`;
  }

  return result || '0m';
}