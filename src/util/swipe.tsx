export class SwipeHandler {

  private sx
  private sy
  private mx
  private my

  public up = () => {}
  public down = () => {}
  public left = () => {}
  public right = () => {}

  private reset() {
    this.sx = 0
    this.sy = 0
    this.mx = 0
    this.my = 0
  }

  get start() {
    return e => {
      const first = e.touches[0]
      this.sx = first.clientX
      this.sy = first.clientY
    }
  }

  get move() {
    return e => {
      const first = e.touches[0]
      this.mx = first.clientX
      this.my = first.clientY
    }
  }

  get end() {
    return e => {
      const dx = this.mx - this.sx
      const dy = this.my - this.sy
      const vertical = Math.abs(dx) < Math.abs(dy)
      const horisontal = !vertical
      this.reset()
      if (vertical) {
        if (dy < 0) {
          this.up()
        } else if (dy > 0) {
          this.down()
        }
      } else if (horisontal) {
        if (dx < 0) {
          this.left()
        } else if (dx > 0) {
          this.right()
        }
      }
    }
  }

}
