/**
 * The types that are supported by 'just' function
 */
export type justSupportedType = any

/**
 * Uses just API to return just the thing that you want
 * @param me The thing that you want
 * @returns The thing that you want
 * @example
 * // Try this examples and see how justjs works!!!
 * just(3)
 * just("Hello World")
 * just(false)
 * just([1,2,3,4,5])
 * just(() => console.log(just("Hello World Again")))
 * just({foo: "bar", hello: "world"})
 */
const just = (me:justSupportedType):justSupportedType => {
    return me
}

eval('if(window){ window.just = just }')

export default just