/**
 * check value is exits
 * @param id
 * @param array
 */
export const checkValueExits = (id: string, array: any) => {
  const status = array?.includes(id)

  return status
}
