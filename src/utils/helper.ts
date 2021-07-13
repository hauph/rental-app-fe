/**
 * Add commas to number
 *
 * @export
 * @param {*} x
 * @return {*}
 */
export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
