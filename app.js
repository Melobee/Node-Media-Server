const NodeMediaServer = require('./')

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8000,
    mediaroot: './media',
    webroot: './www',
    allow_origin: '*'
  },
  https: {
    port: 8443,
    key: './privatekey.pem',
    cert: './certificate.pem'
  },
  auth: {
    api: true,
    api_user: 'admin',
    api_pass: 'admin',
    play: false,
    publish: false,
    secret: 'nodemedia2017privatekey'
  }
}

let nms = new NodeMediaServer(config)
nms.run()

nms.on('preConnect', (id, args) => {
  console.log('--- --- --- UPDATED NODE-MEDIA-SERVER: PRECONNECT --- --- ---')
  // let session = nms.getSession(id);
  // session.reject();
})

nms.on('postConnect', (id, args) => {})

nms.on('doneConnect', (id, args) => {
  console.log('--- --- --- UPDATED NODE-MEDIA-SERVER: DONECONNECT --- --- ---')
})

nms.on('prePublish', (id, StreamPath, args) => {
  console.log('--- --- --- UPDATED NODE-MEDIA-SERVER: PREPUBLISH --- --- ---')
  // let session = nms.getSession(id);
  // session.reject();
})

nms.on('postPublish', (id, StreamPath, args) => {
})

nms.on('donePublish', (id, StreamPath, args) => {
})

nms.on('prePlay', (id, StreamPath, args) => {
  // let session = nms.getSession(id);
  // session.reject();
})

nms.on('postPlay', (id, StreamPath, args) => {
})

nms.on('donePlay', (id, StreamPath, args) => {
})
