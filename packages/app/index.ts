import { splitSymbol } from '@test/editor';

function render(){
    const app = document.getElementById('app') as HTMLDivElement;
    app.innerHTML = '';
    app.innerHTML = splitSymbol('👨‍👩‍👦🌷🎁💩😜👍🏳️‍🌈').toString();
}

render()