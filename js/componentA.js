//컴포넌트 구현체
import ComponentAbstract from "./componentAbstract.js";
class ComponentA extends ComponentAbstract {
  setup() {
    this.state = {items: ['item1', 'item2']}
  }
  template() {
    const {items} = this.state;
    return `
      <ul>
          ${items.map((item, index) => `
            <li>
                ${item}
                <button class="delBtn" data-index="${index}">삭제</button>
            </li>
          `).join('\n')}
      </ul>
      <button class="addBtn" id="append">추가</button>
    `
  }
  setEvent() {
    //event register abstract
    this.addEvent('click', '.addBtn', ({target}) => {
      const {items} = this.state;
      this.setState({items: [...items, `item${items.length + 1}`]});
    })

    this.addEvent('click', '.delBtn', ({target}) => {
      const {items} = this.state;
      items.splice(target.dataset.index, 1);
      this.setState({items});
    })

    // //이벤트 버블링
    // this.$target.addEventListener('click', ({target}) => {
    //   const {items} = this.state;
    //
    //   //등록버튼 이벤트 처리
    //   if(target.classList.contains('addBtn')) {
    //     this.setState({items: [...items, `item${items.length + 1}`]});
    //   }
    //
    //   //삭제버튼 이벤트 처리
    //   if (target.classList.contains('delBtn')) {
    //       items.splice(target.dataset.index, 1);
    //       this.setState({items});
    //   }
    // })
  }
}
export default ComponentA;
