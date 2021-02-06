let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [085795669601]
│ • Axis [083195008913]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
