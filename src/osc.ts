// src/osc.ts - CORRIGIDO
import OSC from 'osc-js'

/* WebSocket client → servidor na porta 8080 */
const osc = new OSC({
  plugin: new OSC.WebsocketClientPlugin({
    host: 'localhost',
    port: 8080
  })
})

// Estado da conexão
let isConnected = false;

// Conecta
osc.open()

// Events de conexão
osc.on('open', () => {
  console.log('🔗 OSC conectado ao bridge')
  isConnected = true
})

osc.on('close', () => {
  console.log('❌ OSC desconectado do bridge')
  isConnected = false
})

osc.on('error', (error: any) => {
  console.error('❌ Erro OSC:', error)
  isConnected = false
})

/* envia /panel/state <int32> */
export const sendOscState = (value: number) => {
  // Verifica se está conectado antes de enviar
  if (!isConnected) {
    console.warn('⚠️ OSC não conectado, ignorando envio:', value)
    return
  }
  
  try {
    const msg = new OSC.Message('/panel/state')
    msg.add(value, 'i')
    osc.send(msg)
    console.log(`📤 OSC enviado: /panel/state ${value}`)
  } catch (error) {
    console.error('❌ Erro ao enviar OSC:', error)
  }
}
