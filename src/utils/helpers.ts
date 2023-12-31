export function wait(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

export function inputToMask(input: string, mask: string) {
  let updatedMask = mask;
  input.split('').forEach((el) => {
    updatedMask = updatedMask.replace(/_/, el);
  });
  return updatedMask;
}

export function debounce(func: Function, ms: number) {
  let timeout: number | NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), ms);
  };
}
