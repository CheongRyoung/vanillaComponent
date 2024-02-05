//컴포넌트 설계 기반이 되는 코드
//State - seState - render

const $app = document.querySelector('#app')

let state = {
  items: ['item1', 'item2', 'item3', 'item4']
}

const render = () => {
  const {items} = state;
  $app.innerHTML = `
    <ul>
        ${items.map(item => `<li>${item}</li>`).join('\n')}
    </ul>
    <button id="append">추가</button>
  `;
  document.querySelector('#append').addEventListener('click', () => {
    setState({items: [...items, `item${items.length + 1}`]})
  })
}

const setState = (newState) => {
  state = {...state, ...newState};
  render();
}

render();
