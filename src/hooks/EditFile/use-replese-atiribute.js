import useGetRegex from "./use-get-regex";

function testSearch(search) {
    if (search[search.length - 1] === ">") {
        return '>'
    } else if (search[search.length - 1] === " ") {
        return ' '
    } else {
        return ''
    }
}

function useRepleseAtiribute(teg, atribute, content, newContentAtribute) {

    let regexpTeg = useGetRegex(teg, 'teg')
    let regexpAtribut = useGetRegex(atribute, 'atribute')
    let newString = content.replace(regexpTeg, (search) => {
        let result = search.replace(regexpAtribut, (search) => {
            return atribute + `="${newContentAtribute}"` + testSearch(search)
        })
        return result
    })
    return newString
}

export default useRepleseAtiribute