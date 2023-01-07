/**
 * @template T
 * @param {T} x
 * @returns {Promise<T>}
 * @example returnsPromise(17)
 * //=> 17
 * @example returnsPromise(17)
 * //=> Promise.resolve(17)
 */
export function returnsPromise(x) {
  return Promise.resolve(x);
}

/**
 * @template {string | undefined} T
 * @param {T} x
 * @returns {Promise<T>}
 * @example rejectsPromise(17)
 * //=> throw new Error(17)
 * @example rejectsPromise(17)
 * //=> Promise.reject(Error(17))
 */
export function rejectsPromise(x) {
  return Promise.reject(new Error(x));
}
