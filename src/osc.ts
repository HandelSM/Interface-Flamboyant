import OSC from 'osc-js'

/* WebSocket client → servidor na porta 8080 */
const osc = new OSC({
  plugin: new OSC.WebsocketClientPlugin()
})
osc.open({ host: 'localhost', port: 8080 })

/* envia /panel/state <int32> */
export const sendOscState = (value: number) => {
  const msg = new OSC.Message('/panel/state')
  msg.add(value, 'i')
  osc.send(msg)
}
