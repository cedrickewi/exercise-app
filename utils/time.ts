export const secToMin = (sec: number): string => {
  return (sec / 60).toFixed(1);
};

export function formatSec(sec: number) {
  let _min = Math.floor(sec / 60);
  let _sec = sec % 60;
  let result = `${_min} min and ${_sec} sec`;
  if (_sec === 0) {
    result = `${_min} min`;
  } else if (_min < 1) {
    result = `${_sec} sec`;
  }
  return result;
}
