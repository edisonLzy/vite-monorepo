import Graphemer from 'graphemer'

const gaphemer = new Graphemer()

export function splitSymbol(str = '👨‍👩‍👦‍👦'){
    return gaphemer.splitGraphemes(str)
}