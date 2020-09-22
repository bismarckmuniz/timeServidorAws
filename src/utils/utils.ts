import { FindConditions } from "typeorm";

export function removeUndefinedKey<T>(filter?: FindConditions<T>): FindConditions<T> {
  filter = filter || {}
  Object.keys(filter).forEach((key: string) => {
    /* eslint-disable */
    // @ts-ignore
    if (filter[key] === undefined) {
      // @ts-ignore
      delete filter[key];
    }
    /* eslint-enable */
  });

  return filter;
}

export function validateRepeatedNFe(nfeArray: Array<string>): Boolean {
  const newNFeArray: Array<string> = nfeArray.filter((nfe, index) => (nfeArray.indexOf(nfe) !== index) )

  return !newNFeArray.length
}

export function validateNFeLength(nfeArray: Array<string>): Boolean {
  const newNFeArrayLengthError: Array<string> = nfeArray.filter(nfe => (nfe.length > 44))

  return !newNFeArrayLengthError.length
}