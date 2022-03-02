function useGetRegex(elem, type) {
    switch (type) {
        case "teg":
            console.log(`elem is ${elem}, type is ${type}`)
            return new RegExp(`<${elem}(\\s|[^>]*)>`, 'gm')

        case "atribute":
            console.log(`elem is ${elem}, type is ${type}`)
            return new RegExp(`${elem}([\\s>]|=("|')([^"']*)("|'))`, '')

    }

}

export default useGetRegex