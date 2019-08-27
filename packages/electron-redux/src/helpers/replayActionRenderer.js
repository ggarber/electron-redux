import { ipcRenderer } from 'electron';

export default function replayActionRenderer(store) {
  ipcRenderer.on('redux-action', (event, payload) => {
    if (!payload.meta) {
      payload.meta = {};
    }
    payload.meta.source = 'remote';

    store.dispatch(payload);
  });
}
