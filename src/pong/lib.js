import React from 'react'
import _ from 'lodash'
import * as PIXI from 'pixi.js'

export const Application = ({children = [], ...props}) =>
  <Wrapper
    create={() => {
      const app = new PIXI.Application()
      // TODO
      document.body.appendChild(app.view)
      return app
    }}
    update={o => _.assign(o, props)}
    appendChild={(app, c) => app.stage.addChild(c)}
    children={children}
  />

export const Sprite = (props) =>
  <Wrapper
    create={() => new PIXI.Sprite()}
    update={o => _.assign(o, props)}
  />

export const Text = (props) =>
  <Wrapper
    create={() => new PIXI.Text()}
    update={o => _.assign(o, props)}
  />


class Wrapper extends React.Component {
  constructor(props) {
    super(props)
    this.inst = props.create()
  }

  render() {
    this.props.update(this.inst)
    return this.props.children
  }

  componentDidMount() {
    let fiber = this._reactInternalFiber

    // owning doesn't matter at this point so it's just like DOM
    while (fiber = fiber.return) {
      const comp = fiber.stateNode

      if (comp instanceof Wrapper) {
        comp.appendChild(this.inst)
        break
      }
    }
  }

  appendChild(c) {
    this.props.appendChild(this.inst, c)
  }
}

Wrapper.defaultProps = {
  children: []
}
