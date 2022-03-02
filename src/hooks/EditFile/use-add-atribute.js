// Add atribute in content in teg if he do not have this
import useGetRegex from "./use-get-regex"

function useAddAtribute(teg, atribute, content, newContentAtribute) {
    let tegRegxp = useGetRegex(teg, 'teg')
    let atributeRegxp = useGetRegex(atribute, 'atribute')
    let newString = content.replace(tegRegxp, (search) => {
        if (search.match(atributeRegxp) === null) {
            return search.substring(0, teg.length + 1) + ' ' + atribute + `="${newContentAtribute}"` + search.substring(teg.length + 1,)
        } else {
            return search
        }
    })
    return newString
}

export default useAddAtribute