//컴포넌트 추상클래스
class Component {

  constructor($target) {
    if($target === undefined) {
      throw new TypeError("Must $target paremeter");
    }

    this.$target = $target;
    if(this.setup === undefined
      || this.render === undefined
      || this.template === undefined
      || this.setEvent === undefined
    ) {
      throw new TypeError("Must override method");
    }
    this.setup(); //데이터 셋업
    this.setEvent(); //이벤트 등록
    this.render(); //렌더링
  }
  render() {
    this.$target.innerHTML = this.template();
  }
  setState(newState) {
    if(this.state === undefined) {
      throw new TypeError("Must this.state define");
    }

    this.state = {...this.state, ...newState};
    this.render();
  }

  /**
   * add Event
   * @param {String} type event type ex) click
   * @param {String} selector querySelector parameter
   * @param {Function} callback callBack
   */
  addEvent(type, selector, callback) {
    this.$target.addEventListener(type, event => {
      if(!event.target.closest(selector)) {
        return false;
      }
      callback(event);
    })
  }
}
export default Component;
