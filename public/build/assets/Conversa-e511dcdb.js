import { r as ref, x as onMounted, a5 as lodashExports, j as axios, d as defineComponent, Z as nextTick, c as createBlock, w as withCtx, o as openBlock, a as createBaseVNode, t as toDisplayString, u as unref, k as createElementBlock, h as createTextVNode, l as createCommentVNode, m as renderList, F as Fragment, f as createVNode, T as Transition, g as withModifiers, b as withDirectives, e as vModelText, A as isRef } from "./app-0ff9bc90.js";
import { _ as _sfc_main$1 } from "./SiteLayout.vue_vue_type_script_setup_true_lang-35065bdd.js";
import { _ as _sfc_main$2 } from "./Mensagem.vue_vue_type_script_setup_true_lang-d141f509.js";
import { _ as _sfc_main$3 } from "./FormError.vue_vue_type_script_setup_true_lang-609805c4.js";
import { g as getPush, N as NovaMensagem, L as Listener, M as MensagemExcluida } from "./_plugin-vue_export-helper-af6bd5fd.js";
import "./Modal.vue_vue_type_script_setup_true_lang-a76c0f5d.js";
import "./index-2530c752.js";
class Mensagem {
  constructor(id, mensagem, usuario_id, created_at, loading = false) {
    this.id = id;
    this.mensagem = mensagem;
    this.usuario_id = usuario_id;
    this.created_at = created_at;
    this.loading = loading;
  }
  static converterArray(mensagens) {
    return mensagens.map((m) => new Mensagem(m.id, m.mensagem, m.usuario_id, m.created_at));
  }
}
function conversaLib(conversa, propsUsuarioId) {
  let mensagens = ref(conversa.mensagens);
  let mensagensAnteriores = ref(false);
  let temNovasMensagens = ref(false);
  let temPermNotificacao = ref(getPush().temPermissao());
  let conversaId = conversa.id;
  let ultimaMsgVisualizadaId = ref(conversa.visualizacao.ultima_mensagem_id);
  let usuarioId = propsUsuarioId;
  let tempId = -1;
  let controleAtualizar = {
    bloquearAtualizar: false,
    atualizar: false,
    bloquearAtualizarAnteriores: false
  };
  onMounted(() => {
    novaMensagemListener();
    mensagemExcluidaListener();
  });
  function getUltimaMensagemVisualizada() {
    return mensagens.value.findLast((m) => m.id <= ultimaMsgVisualizadaId.value);
  }
  function getProximaMensagem(id) {
    return mensagens.value.find((m) => m.id > id);
  }
  function visualizarMensagem(id) {
    if (id < ultimaMsgVisualizadaId.value) {
      return;
    }
    ultimaMsgVisualizadaId.value = id;
    ajaxEnviarUltimaVisualizacao(id);
  }
  async function atualizarMensagens() {
    var _a;
    if (controleAtualizar.bloquearAtualizar) {
      controleAtualizar.atualizar = true;
    }
    controleAtualizar.bloquearAtualizar = true;
    controleAtualizar.atualizar = false;
    await ajaxNovasMensagens(((_a = mensagens.value.findLast((m) => m.id > 0)) == null ? void 0 : _a.id) ?? 0);
    controleAtualizar.bloquearAtualizar = false;
    if (controleAtualizar.atualizar) {
      atualizarMensagens();
    }
  }
  function solicitarPermNotificacao() {
    getPush().solicitarPermissao().then(() => {
      temPermNotificacao.value = getPush().temPermissao();
    });
  }
  function deveSolicitarPermissao() {
    if (getPush().jaSolicitouPermissao()) {
      return;
    }
    if (getPush().temPermissao()) {
      return;
    }
    solicitarPermNotificacao();
  }
  async function atualizarMensagensAnteriores() {
    if (!mensagensAnteriores.value || mensagens.value.length === 0) {
      return null;
    }
    if (controleAtualizar.bloquearAtualizarAnteriores) {
      return null;
    }
    controleAtualizar.bloquearAtualizarAnteriores = true;
    const mensagemId = lodashExports.first(mensagens.value).id;
    await ajaxMensagensAnteriores(mensagemId);
    controleAtualizar.bloquearAtualizarAnteriores = false;
    return mensagemId;
  }
  async function ajaxMensagensAnteriores(mensagemId) {
    let response = await axios.get(`/conversa/${conversaId}/mensagens/anteriores/${mensagemId}`);
    mensagens.value = removerExistentes(Mensagem.converterArray(response.data.mensagens)).concat(mensagens.value);
    mensagensAnteriores.value = response.data.mais;
  }
  async function ajaxNovasMensagens(mensagemId) {
    let response = await axios.get(`/conversa/${conversaId}/mensagens/posteriores/${mensagemId}`);
    if (response.data.mensagens.length > 0) {
      mensagens.value = mensagens.value.concat(removerExistentes(Mensagem.converterArray(response.data.mensagens)));
      temNovasMensagens.value = true;
    }
  }
  async function ajaxEnviarMensagem(texto) {
    let response = await axios.post(`/conversa/${conversaId}/enviar`, {
      mensagem: texto
    });
    mensagens.value.push(new Mensagem(response.data.id, response.data.mensagem, response.data.usuario_id, response.data.created_at));
  }
  function ajaxEnviarUltimaVisualizacao(id) {
    axios.post(`/conversa/${conversaId}/mensagens/visualizacao/${id}`);
  }
  function ajaxExcluirMensagem(id) {
    axios.get(`/conversa/${conversaId}/mensagem/excluir/${id}`).then(() => {
      mensagens.value = lodashExports.filter(mensagens.value, (m) => id !== m.id);
    });
  }
  function novaMensagemListener() {
    NovaMensagem.addListener(new Listener((e) => {
      var _a;
      if (e.mensagem_id > (((_a = lodashExports.last(mensagens.value)) == null ? void 0 : _a.id) ?? 0)) {
        atualizarMensagens();
      }
    }, 1));
  }
  function mensagemExcluidaListener() {
    MensagemExcluida.addListener(new Listener((e) => {
      mensagens.value = lodashExports.filter(mensagens.value, (m) => e.mensagem_id !== m.id);
    }, 1));
  }
  async function enviarMensagem(texto) {
    let mensagem = new Mensagem(tempId, texto, usuarioId, /* @__PURE__ */ new Date(), true);
    tempId -= 1;
    mensagens.value.push(mensagem);
    try {
      await ajaxEnviarMensagem(mensagem.mensagem);
    } finally {
      mensagens.value = lodashExports.filter(mensagens.value, (m) => m.id !== mensagem.id);
    }
    deveSolicitarPermissao();
  }
  function getMensagemErroEnviarMensagem(e) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    if ((_c = (_b = (_a = e == null ? void 0 : e.response) == null ? void 0 : _a.data) == null ? void 0 : _b.errors) == null ? void 0 : _c.mensagem) {
      if (Array.isArray((_f = (_e = (_d = e == null ? void 0 : e.response) == null ? void 0 : _d.data) == null ? void 0 : _e.errors) == null ? void 0 : _f.mensagem)) {
        let [mensagem] = e.response.data.errors.mensagem;
        return mensagem;
      }
      return e.response.data.errors.mensagem;
    }
    if ((_h = (_g = e == null ? void 0 : e.response) == null ? void 0 : _g.data) == null ? void 0 : _h.message) {
      return e.response.data.message;
    }
    return "Erro ao enviar mensagem";
  }
  function removerExistentes(msgs) {
    return msgs.filter((m) => !mensagens.value.find((m2) => m2.id === m.id));
  }
  return {
    mensagens,
    mensagensAnteriores,
    temNovasMensagens,
    temPermNotificacao,
    ultimaMsgVisualizadaId,
    ajaxExcluirMensagem,
    atualizarMensagensAnteriores,
    enviarMensagem,
    getMensagemErroEnviarMensagem,
    getProximaMensagem,
    getUltimaMensagemVisualizada,
    solicitarPermNotificacao,
    visualizarMensagem
  };
}
class Conversa {
  constructor(id, equipamento_id, visualizacao, mensagens) {
    this.id = id;
    this.equipamento_id = equipamento_id;
    this.visualizacao = visualizacao;
    this.mensagens = mensagens.map((m) => new Mensagem(m.id, m.mensagem, m.usuario_id, m.created_at));
  }
}
const _hoisted_1 = { class: "container conversa" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_3 = { class: "conteudo" };
const _hoisted_4 = { class: "container-mensagens" };
const _hoisted_5 = {
  key: 0,
  class: "loader-inline"
};
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("span", { class: "elemento" }, null, -1);
const _hoisted_7 = [
  _hoisted_6
];
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("span", null, "Novas Mensagens", -1);
const _hoisted_9 = [
  _hoisted_8
];
const _hoisted_10 = ["onSubmit"];
const _hoisted_11 = { class: "col" };
const _hoisted_12 = { class: "row" };
const _hoisted_13 = { class: "d-flex flex-row" };
const _hoisted_14 = { class: "col" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("button", {
  type: "submit",
  class: "btn btn-primary"
}, " Enviar ", -1);
const _hoisted_16 = { class: "textcount" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Conversa",
  props: {
    conversa: Object,
    usuarioId: Number,
    mensagensTempoExcluir: Number
  },
  setup(__props) {
    const props = __props;
    const scroll = lodashExports.debounce(onScroll, 100, { maxWait: 250 });
    const scrollMargin = 25;
    const maxlengthText = 2500;
    const elMensagens = ref(null);
    let erroMensagem = ref("");
    let textoMsg = ref("");
    let conversaModel = new Conversa(props.conversa.id, props.conversa.equipamentoId, props.conversa.visualizacao, props.conversa.mensagens);
    const {
      mensagens,
      mensagensAnteriores,
      temNovasMensagens,
      temPermNotificacao,
      ultimaMsgVisualizadaId,
      ajaxExcluirMensagem,
      atualizarMensagensAnteriores,
      enviarMensagem,
      getMensagemErroEnviarMensagem,
      getProximaMensagem,
      getUltimaMensagemVisualizada,
      solicitarPermNotificacao,
      visualizarMensagem
    } = conversaLib(conversaModel, props.usuarioId);
    onMounted(() => {
      if (elMensagens.value.scrollHeight > elMensagens.value.clientHeight + scrollMargin) {
        mensagensAnteriores.value = true;
      }
      nextTick(setScrollPagina);
    });
    async function enviarMensagemEvent() {
      var _a, _b, _c;
      try {
        let texto = textoMsg.value.trim();
        textoMsg.value = "";
        erroMensagem.value = "";
        await enviarMensagem(texto);
      } catch (e) {
        erroMensagem.value = getMensagemErroEnviarMensagem(e);
        if (((_c = (_b = (_a = e == null ? void 0 : e.response) == null ? void 0 : _a.data) == null ? void 0 : _b.mensagem) == null ? void 0 : _c.length) === 0) {
          setTimeout(() => {
            window.location.reload();
          }, 5e3);
        }
      }
    }
    function setScrollPagina() {
      var _a, _b;
      const ultimaVisualizada = getUltimaMensagemVisualizada();
      if (ultimaVisualizada) {
        setMensagensScrolltop(getOffsetMensagem(ultimaVisualizada.id) - elMensagens.value.clientHeight / 2);
      }
      if (elMensagens.value.scrollTop < ((_a = elMensagens.value.querySelector(".loader-inline")) == null ? void 0 : _a.clientHeight)) {
        setMensagensScrolltop((_b = elMensagens.value.querySelector(".loader-inline")) == null ? void 0 : _b.clientHeight);
      }
      nextTick(verificaUltimaVisualizada);
    }
    function novasMensagens() {
      temNovasMensagens.value = false;
      const proximaMensagem = getProximaMensagem(ultimaMsgVisualizadaId);
      if (proximaMensagem) {
        setMensagensScrolltop(getOffsetMensagem(proximaMensagem.id) - elMensagens.value.clientHeight / 2);
        visualizarMensagem(proximaMensagem.id);
      } else {
        setScrollPagina();
      }
    }
    function setMensagensScrolltop(px) {
      elMensagens.value.scrollTop = px;
      setTimeout(() => {
        scroll.cancel();
      }, 100);
    }
    function getOffsetMensagem(id) {
      return elMensagens.value.querySelector(`#msg-${id}`).offsetTop - elMensagens.value.offsetTop;
    }
    function onScroll() {
      if (elMensagens.value.scrollTop <= scrollMargin) {
        atualizarMsgsAnteriores();
      }
      verificaUltimaVisualizada();
      if (elMensagens.value.scrollTop + elMensagens.value.clientHeight >= elMensagens.value.scrollHeight - scrollMargin) {
        temNovasMensagens.value = false;
      }
    }
    function verificaUltimaVisualizada() {
      const ultimaVisualizada = procuraUltimaMensagemVisualizada();
      if (ultimaVisualizada && ultimaVisualizada.id > ultimaMsgVisualizadaId) {
        ultimaMsgVisualizadaId.value = ultimaVisualizada.id;
        visualizarMensagem(ultimaMsgVisualizadaId.value);
      }
    }
    function procuraUltimaMensagemVisualizada() {
      const idxUltima = mensagens.value.findIndex((m) => m.id > ultimaMsgVisualizadaId.value);
      return mensagens.value.slice(idxUltima).findLast((m) => m.id > 0 && verificaMensagemVisualizada(m.id));
    }
    function verificaMensagemVisualizada(id) {
      const el = elMensagens.value.querySelector(`#msg-${id}`);
      const elOffset = el.offsetTop + el.clientHeight - el.parentElement.offsetTop;
      return elOffset > el.parentElement.scrollTop && elOffset < el.parentElement.scrollTop + el.parentElement.clientHeight;
    }
    async function atualizarMsgsAnteriores() {
      let mensagemId = await atualizarMensagensAnteriores();
      if (!mensagemId) {
        return;
      }
      nextTick(() => {
        setMensagensScrolltop(getOffsetMensagem(mensagemId));
      });
    }
    function excluirMensagemListener(mensagem) {
      ajaxExcluirMensagem(mensagem.id);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        titulo: `Conversa ${__props.conversa.equipamento.titulo}`
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("h2", null, "Conversa - " + toDisplayString(__props.conversa.equipamento.titulo), 1),
            !unref(temPermNotificacao) ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "alert alert-warning mt-2 mb-4 cursor-pointer",
              onClick: _cache[0] || (_cache[0] = //@ts-ignore
              (...args) => unref(solicitarPermNotificacao) && unref(solicitarPermNotificacao)(...args))
            }, [
              createTextVNode(" Você não irá receber notificações de novas mensagens."),
              _hoisted_2,
              createTextVNode(" Clique aqui para autorizar as Notificações ")
            ])) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("div", _hoisted_4, [
                createBaseVNode("div", {
                  ref_key: "elMensagens",
                  ref: elMensagens,
                  class: "mensagens",
                  onScroll: _cache[1] || (_cache[1] = //@ts-ignore
                  (...args) => unref(scroll) && unref(scroll)(...args))
                }, [
                  unref(mensagensAnteriores) ? (openBlock(), createElementBlock("div", _hoisted_5, _hoisted_7)) : createCommentVNode("", true),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(mensagens), (mensagem) => {
                    return openBlock(), createBlock(_sfc_main$2, {
                      key: mensagem.id,
                      mensagem,
                      usuarioId: __props.usuarioId,
                      mensagensTempoExcluir: __props.mensagensTempoExcluir,
                      onExcluirMensagem: excluirMensagemListener
                    }, null, 8, ["mensagem", "usuarioId", "mensagensTempoExcluir"]);
                  }), 128))
                ], 544),
                createVNode(Transition, {
                  name: "fade-transition",
                  duration: 100
                }, {
                  default: withCtx(() => [
                    unref(temNovasMensagens) ? (openBlock(), createElementBlock("button", {
                      key: 0,
                      type: "button",
                      class: "novas-mensagens",
                      onClick: novasMensagens
                    }, _hoisted_9)) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("form", {
                class: "mensagens-footer",
                onSubmit: withModifiers(enviarMensagemEvent, ["prevent"])
              }, [
                createBaseVNode("div", _hoisted_11, [
                  createBaseVNode("div", _hoisted_12, [
                    createVNode(_sfc_main$3, { error: unref(erroMensagem) }, null, 8, ["error"])
                  ]),
                  createBaseVNode("div", _hoisted_13, [
                    withDirectives(createBaseVNode("textarea", {
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isRef(textoMsg) ? textoMsg.value = $event : textoMsg = $event),
                      class: "form-control",
                      maxlength: maxlengthText,
                      rows: "3"
                    }, null, 512), [
                      [vModelText, unref(textoMsg)]
                    ]),
                    createBaseVNode("div", _hoisted_14, [
                      _hoisted_15,
                      createBaseVNode("span", _hoisted_16, toDisplayString(unref(textoMsg).length + " / " + maxlengthText), 1)
                    ])
                  ])
                ])
              ], 40, _hoisted_10)
            ])
          ])
        ]),
        _: 1
      }, 8, ["titulo"]);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udmVyc2EtZTUxMWRjZGIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Jlc291cmNlcy9qcy9Nb2RlbHMvRXF1aXBhbWVudG8vQ29udmVyc2EvTWVuc2FnZW0udHMiLCIuLi8uLi8uLi9yZXNvdXJjZXMvanMvUGFnZXMvU2l0ZS9FcXVpcGFtZW50by9Db252ZXJzYS9Db21wb25lbnRlcy9Db252ZXJzYUxpYi50cyIsIi4uLy4uLy4uL3Jlc291cmNlcy9qcy9Nb2RlbHMvRXF1aXBhbWVudG8vQ29udmVyc2EvQ29udmVyc2EudHMiLCIuLi8uLi8uLi9yZXNvdXJjZXMvanMvUGFnZXMvU2l0ZS9FcXVpcGFtZW50by9Db252ZXJzYS9Db252ZXJzYS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW5zYWdlbSB7XG4gICAgaWQ6IG51bWJlclxuICAgIG1lbnNhZ2VtOiBzdHJpbmdcbiAgICB1c3VhcmlvX2lkOiBudW1iZXJcbiAgICBjcmVhdGVkX2F0OiBEYXRlXG4gICAgbG9hZGluZzogYm9vbGVhblxuXG4gICAgY29uc3RydWN0b3IoaWQsIG1lbnNhZ2VtLCB1c3VhcmlvX2lkLCBjcmVhdGVkX2F0LCBsb2FkaW5nID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkXG4gICAgICAgIHRoaXMubWVuc2FnZW0gPSBtZW5zYWdlbVxuICAgICAgICB0aGlzLnVzdWFyaW9faWQgPSB1c3VhcmlvX2lkXG4gICAgICAgIHRoaXMuY3JlYXRlZF9hdCA9IGNyZWF0ZWRfYXRcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gbG9hZGluZ1xuICAgIH1cblxuICAgIHN0YXRpYyBjb252ZXJ0ZXJBcnJheShtZW5zYWdlbnMpIHtcbiAgICAgICAgcmV0dXJuIG1lbnNhZ2Vucy5tYXAoKG0pID0+IG5ldyBNZW5zYWdlbShtLmlkLCBtLm1lbnNhZ2VtLCBtLnVzdWFyaW9faWQsIG0uY3JlYXRlZF9hdCkpXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgUmVmLCBvbk1vdW50ZWQsIHJlZiB9IGZyb20gJ3Z1ZSdcbmltcG9ydCB7IGZpbHRlciwgZmlyc3QsIGxhc3QgfSBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyBnZXRQdXNoIH0gZnJvbSAnQC9Db21wb25lbnRlcy9Ob3RpZmljYWNhby9QdXNoJ1xuaW1wb3J0IE5vdmFNZW5zYWdlbSBmcm9tICdAL0NvbXBvbmVudGVzL0V2ZW50b3MvTm92YU1lbnNhZ2VtJ1xuaW1wb3J0IE1lbnNhZ2VtRXhjbHVpZGEgZnJvbSAnQC9Db21wb25lbnRlcy9FdmVudG9zL01lbnNhZ2VtRXhjbHVpZGEnXG5pbXBvcnQgTGlzdGVuZXIgZnJvbSAnQC9Db21wb25lbnRlcy9FdmVudG9zL0xpc3RlbmVyJ1xuaW1wb3J0IENvbnZlcnNhIGZyb20gJ0AvTW9kZWxzL0VxdWlwYW1lbnRvL0NvbnZlcnNhL0NvbnZlcnNhJ1xuaW1wb3J0IE1lbnNhZ2VtIGZyb20gJ0AvTW9kZWxzL0VxdWlwYW1lbnRvL0NvbnZlcnNhL01lbnNhZ2VtJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb252ZXJzYUxpYihjb252ZXJzYTogQ29udmVyc2EsIHByb3BzVXN1YXJpb0lkKSB7XG4gICAgbGV0IG1lbnNhZ2VuczogUmVmPE1lbnNhZ2VtW10+ID0gcmVmKGNvbnZlcnNhLm1lbnNhZ2VucylcbiAgICBsZXQgbWVuc2FnZW5zQW50ZXJpb3JlczogUmVmPGJvb2xlYW4+ID0gcmVmKGZhbHNlKVxuICAgIGxldCB0ZW1Ob3Zhc01lbnNhZ2VuczogUmVmPGJvb2xlYW4+ID0gcmVmKGZhbHNlKVxuICAgIGxldCB0ZW1QZXJtTm90aWZpY2FjYW86IFJlZjxib29sZWFuPiA9IHJlZihnZXRQdXNoKCkudGVtUGVybWlzc2FvKCkpXG4gICAgbGV0IGNvbnZlcnNhSWQ6IG51bWJlciA9IGNvbnZlcnNhLmlkXG4gICAgbGV0IHVsdGltYU1zZ1Zpc3VhbGl6YWRhSWQ6IFJlZjxudW1iZXI+ID0gcmVmKGNvbnZlcnNhLnZpc3VhbGl6YWNhby51bHRpbWFfbWVuc2FnZW1faWQpXG4gICAgbGV0IHVzdWFyaW9JZDogbnVtYmVyID0gcHJvcHNVc3VhcmlvSWRcblxuICAgIGxldCB0ZW1wSWQ6IG51bWJlciA9IC0xXG4gICAgbGV0IGNvbnRyb2xlQXR1YWxpemFyID0ge1xuICAgICAgICBibG9xdWVhckF0dWFsaXphcjogZmFsc2UsXG4gICAgICAgIGF0dWFsaXphcjogZmFsc2UsXG4gICAgICAgIGJsb3F1ZWFyQXR1YWxpemFyQW50ZXJpb3JlczogZmFsc2UsXG4gICAgfVxuXG4gICAgb25Nb3VudGVkKCgpID0+IHtcbiAgICAgICAgbm92YU1lbnNhZ2VtTGlzdGVuZXIoKVxuICAgICAgICBtZW5zYWdlbUV4Y2x1aWRhTGlzdGVuZXIoKVxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBnZXRVbHRpbWFNZW5zYWdlbVZpc3VhbGl6YWRhKCkge1xuICAgICAgICByZXR1cm4gbWVuc2FnZW5zLnZhbHVlLmZpbmRMYXN0KChtKSA9PiBtLmlkIDw9IHVsdGltYU1zZ1Zpc3VhbGl6YWRhSWQudmFsdWUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UHJveGltYU1lbnNhZ2VtKGlkOiBudW1iZXIpOiBNZW5zYWdlbSB7XG4gICAgICAgIHJldHVybiBtZW5zYWdlbnMudmFsdWUuZmluZCgobSkgPT4gbS5pZCA+IGlkKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZpc3VhbGl6YXJNZW5zYWdlbShpZDogbnVtYmVyKSA6IHZvaWQge1xuICAgICAgICBpZiAoaWQgPCB1bHRpbWFNc2dWaXN1YWxpemFkYUlkLnZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIHVsdGltYU1zZ1Zpc3VhbGl6YWRhSWQudmFsdWUgPSBpZFxuICAgICAgICBhamF4RW52aWFyVWx0aW1hVmlzdWFsaXphY2FvKGlkKVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGF0dWFsaXphck1lbnNhZ2VucygpIDogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGlmIChjb250cm9sZUF0dWFsaXphci5ibG9xdWVhckF0dWFsaXphcikge1xuICAgICAgICAgICAgY29udHJvbGVBdHVhbGl6YXIuYXR1YWxpemFyID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgY29udHJvbGVBdHVhbGl6YXIuYmxvcXVlYXJBdHVhbGl6YXIgPSB0cnVlXG4gICAgICAgIGNvbnRyb2xlQXR1YWxpemFyLmF0dWFsaXphciA9IGZhbHNlXG5cbiAgICAgICAgYXdhaXQgYWpheE5vdmFzTWVuc2FnZW5zKG1lbnNhZ2Vucy52YWx1ZS5maW5kTGFzdCgobSkgPT4gbS5pZCA+IDApPy5pZCA/PyAwKVxuXG4gICAgICAgIGNvbnRyb2xlQXR1YWxpemFyLmJsb3F1ZWFyQXR1YWxpemFyID0gZmFsc2VcbiAgICAgICAgaWYgKGNvbnRyb2xlQXR1YWxpemFyLmF0dWFsaXphcikge1xuICAgICAgICAgICAgYXR1YWxpemFyTWVuc2FnZW5zKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNvbGljaXRhclBlcm1Ob3RpZmljYWNhbygpOiB2b2lkIHtcbiAgICAgICAgZ2V0UHVzaCgpLnNvbGljaXRhclBlcm1pc3NhbygpLnRoZW4oKCkgPT4geyB0ZW1QZXJtTm90aWZpY2FjYW8udmFsdWUgPSBnZXRQdXNoKCkudGVtUGVybWlzc2FvKCkgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZXZlU29saWNpdGFyUGVybWlzc2FvKCk6IHZvaWQge1xuICAgICAgICBpZiAoZ2V0UHVzaCgpLmphU29saWNpdG91UGVybWlzc2FvKCkpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGdldFB1c2goKS50ZW1QZXJtaXNzYW8oKSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBzb2xpY2l0YXJQZXJtTm90aWZpY2FjYW8oKVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGF0dWFsaXphck1lbnNhZ2Vuc0FudGVyaW9yZXMoKTogUHJvbWlzZTxudW1iZXJ8bnVsbD4ge1xuICAgICAgICBpZiAoIW1lbnNhZ2Vuc0FudGVyaW9yZXMudmFsdWUgfHwgbWVuc2FnZW5zLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250cm9sZUF0dWFsaXphci5ibG9xdWVhckF0dWFsaXphckFudGVyaW9yZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICBjb250cm9sZUF0dWFsaXphci5ibG9xdWVhckF0dWFsaXphckFudGVyaW9yZXMgPSB0cnVlXG4gICAgICAgIGNvbnN0IG1lbnNhZ2VtSWQgPSBmaXJzdChtZW5zYWdlbnMudmFsdWUpLmlkXG4gICAgICAgIGF3YWl0IGFqYXhNZW5zYWdlbnNBbnRlcmlvcmVzKG1lbnNhZ2VtSWQpXG5cbiAgICAgICAgY29udHJvbGVBdHVhbGl6YXIuYmxvcXVlYXJBdHVhbGl6YXJBbnRlcmlvcmVzID0gZmFsc2VcbiAgICAgICAgcmV0dXJuIG1lbnNhZ2VtSWRcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBhamF4TWVuc2FnZW5zQW50ZXJpb3JlcyhtZW5zYWdlbUlkOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAvY29udmVyc2EvJHtjb252ZXJzYUlkfS9tZW5zYWdlbnMvYW50ZXJpb3Jlcy8ke21lbnNhZ2VtSWR9YClcblxuICAgICAgICBtZW5zYWdlbnMudmFsdWUgPSByZW1vdmVyRXhpc3RlbnRlcyhNZW5zYWdlbS5jb252ZXJ0ZXJBcnJheShyZXNwb25zZS5kYXRhLm1lbnNhZ2VucykpLmNvbmNhdChtZW5zYWdlbnMudmFsdWUpXG4gICAgICAgIG1lbnNhZ2Vuc0FudGVyaW9yZXMudmFsdWUgPSByZXNwb25zZS5kYXRhLm1haXNcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBhamF4Tm92YXNNZW5zYWdlbnMobWVuc2FnZW1JZDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgL2NvbnZlcnNhLyR7Y29udmVyc2FJZH0vbWVuc2FnZW5zL3Bvc3RlcmlvcmVzLyR7bWVuc2FnZW1JZH1gKVxuXG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhLm1lbnNhZ2Vucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBtZW5zYWdlbnMudmFsdWUgPSBtZW5zYWdlbnMudmFsdWUuY29uY2F0KHJlbW92ZXJFeGlzdGVudGVzKE1lbnNhZ2VtLmNvbnZlcnRlckFycmF5KHJlc3BvbnNlLmRhdGEubWVuc2FnZW5zKSkpXG4gICAgICAgICAgICB0ZW1Ob3Zhc01lbnNhZ2Vucy52YWx1ZSA9IHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGFqYXhFbnZpYXJNZW5zYWdlbSh0ZXh0bzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYC9jb252ZXJzYS8ke2NvbnZlcnNhSWR9L2VudmlhcmAsIHtcbiAgICAgICAgICAgIG1lbnNhZ2VtOiB0ZXh0byxcbiAgICAgICAgfSlcblxuICAgICAgICBtZW5zYWdlbnMudmFsdWUucHVzaChuZXcgTWVuc2FnZW0ocmVzcG9uc2UuZGF0YS5pZCwgcmVzcG9uc2UuZGF0YS5tZW5zYWdlbSwgcmVzcG9uc2UuZGF0YS51c3VhcmlvX2lkLCByZXNwb25zZS5kYXRhLmNyZWF0ZWRfYXQpKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFqYXhFbnZpYXJVbHRpbWFWaXN1YWxpemFjYW8oaWQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBheGlvcy5wb3N0KGAvY29udmVyc2EvJHtjb252ZXJzYUlkfS9tZW5zYWdlbnMvdmlzdWFsaXphY2FvLyR7aWR9YClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhamF4RXhjbHVpck1lbnNhZ2VtKGlkOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgYXhpb3MuZ2V0KGAvY29udmVyc2EvJHtjb252ZXJzYUlkfS9tZW5zYWdlbS9leGNsdWlyLyR7aWR9YCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBtZW5zYWdlbnMudmFsdWUgPSBmaWx0ZXIobWVuc2FnZW5zLnZhbHVlLCAobSkgPT4gaWQgIT09IG0uaWQpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbm92YU1lbnNhZ2VtTGlzdGVuZXIoKTogdm9pZCB7XG4gICAgICAgIE5vdmFNZW5zYWdlbS5hZGRMaXN0ZW5lcihuZXcgTGlzdGVuZXIoKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLm1lbnNhZ2VtX2lkID4gKGxhc3QobWVuc2FnZW5zLnZhbHVlKT8uaWQgPz8gMCkpIHtcbiAgICAgICAgICAgICAgICBhdHVhbGl6YXJNZW5zYWdlbnMoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxKSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtZW5zYWdlbUV4Y2x1aWRhTGlzdGVuZXIoKTogdm9pZCB7XG4gICAgICAgIE1lbnNhZ2VtRXhjbHVpZGEuYWRkTGlzdGVuZXIobmV3IExpc3RlbmVyKChlKSA9PiB7XG4gICAgICAgICAgICBtZW5zYWdlbnMudmFsdWUgPSBmaWx0ZXIobWVuc2FnZW5zLnZhbHVlLCAobSkgPT4gZS5tZW5zYWdlbV9pZCAhPT0gbS5pZClcbiAgICAgICAgfSwgMSkpXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZW52aWFyTWVuc2FnZW0odGV4dG86IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBsZXQgbWVuc2FnZW0gPSBuZXcgTWVuc2FnZW0odGVtcElkLCB0ZXh0bywgdXN1YXJpb0lkLCBuZXcgRGF0ZSgpLCB0cnVlKVxuICAgICAgICB0ZW1wSWQgLT0gMVxuXG4gICAgICAgIG1lbnNhZ2Vucy52YWx1ZS5wdXNoKG1lbnNhZ2VtKVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBhamF4RW52aWFyTWVuc2FnZW0obWVuc2FnZW0ubWVuc2FnZW0pXG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBtZW5zYWdlbnMudmFsdWUgPSBmaWx0ZXIobWVuc2FnZW5zLnZhbHVlLCAobSkgPT4gbS5pZCAhPT0gbWVuc2FnZW0uaWQpXG4gICAgICAgIH1cblxuICAgICAgICBkZXZlU29saWNpdGFyUGVybWlzc2FvKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRNZW5zYWdlbUVycm9FbnZpYXJNZW5zYWdlbShlKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKGU/LnJlc3BvbnNlPy5kYXRhPy5lcnJvcnM/Lm1lbnNhZ2VtKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShlPy5yZXNwb25zZT8uZGF0YT8uZXJyb3JzPy5tZW5zYWdlbSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgW21lbnNhZ2VtXSA9IGUucmVzcG9uc2UuZGF0YS5lcnJvcnMubWVuc2FnZW1cbiAgICAgICAgICAgICAgICByZXR1cm4gbWVuc2FnZW1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBlLnJlc3BvbnNlLmRhdGEuZXJyb3JzLm1lbnNhZ2VtXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGU/LnJlc3BvbnNlPy5kYXRhPy5tZXNzYWdlKSB7XG4gICAgICAgICAgICByZXR1cm4gZS5yZXNwb25zZS5kYXRhLm1lc3NhZ2VcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJ0Vycm8gYW8gZW52aWFyIG1lbnNhZ2VtJ1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZXJFeGlzdGVudGVzKG1zZ3M6IE1lbnNhZ2VtW10pOiBNZW5zYWdlbVtdIHtcbiAgICAgICAgcmV0dXJuIG1zZ3MuZmlsdGVyKChtKSA9PiAhbWVuc2FnZW5zLnZhbHVlLmZpbmQoKG0yKSA9PiBtMi5pZCA9PT0gbS5pZCkpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWVuc2FnZW5zLFxuICAgICAgICBtZW5zYWdlbnNBbnRlcmlvcmVzLFxuICAgICAgICB0ZW1Ob3Zhc01lbnNhZ2VucyxcbiAgICAgICAgdGVtUGVybU5vdGlmaWNhY2FvLFxuICAgICAgICB1bHRpbWFNc2dWaXN1YWxpemFkYUlkLFxuICAgICAgICBhamF4RXhjbHVpck1lbnNhZ2VtLFxuICAgICAgICBhdHVhbGl6YXJNZW5zYWdlbnNBbnRlcmlvcmVzLFxuICAgICAgICBlbnZpYXJNZW5zYWdlbSxcbiAgICAgICAgZ2V0TWVuc2FnZW1FcnJvRW52aWFyTWVuc2FnZW0sXG4gICAgICAgIGdldFByb3hpbWFNZW5zYWdlbSxcbiAgICAgICAgZ2V0VWx0aW1hTWVuc2FnZW1WaXN1YWxpemFkYSxcbiAgICAgICAgc29saWNpdGFyUGVybU5vdGlmaWNhY2FvLFxuICAgICAgICB2aXN1YWxpemFyTWVuc2FnZW0sXG4gICAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG5pbXBvcnQgTWVuc2FnZW0gZnJvbSAnLi9NZW5zYWdlbSdcbmltcG9ydCBWaXN1YWxpemFjYW8gZnJvbSAnLi9WaXN1YWxpemFjYW8nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnZlcnNhIHtcbiAgICBpZDogbnVtYmVyXG4gICAgZXF1aXBhbWVudG9faWQ6IG51bWJlclxuICAgIHZpc3VhbGl6YWNhbzogVmlzdWFsaXphY2FvXG4gICAgbWVuc2FnZW5zOiBNZW5zYWdlbVtdXG5cbiAgICBjb25zdHJ1Y3RvcihpZCwgZXF1aXBhbWVudG9faWQsIHZpc3VhbGl6YWNhbywgbWVuc2FnZW5zKSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZFxuICAgICAgICB0aGlzLmVxdWlwYW1lbnRvX2lkID0gZXF1aXBhbWVudG9faWRcbiAgICAgICAgdGhpcy52aXN1YWxpemFjYW8gPSB2aXN1YWxpemFjYW9cbiAgICAgICAgdGhpcy5tZW5zYWdlbnMgPSBtZW5zYWdlbnMubWFwKChtKSA9PiBuZXcgTWVuc2FnZW0obS5pZCwgbS5tZW5zYWdlbSwgbS51c3VhcmlvX2lkLCBtLmNyZWF0ZWRfYXQpKVxuICAgIH1cbn1cbiIsIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG4vKiBlc2xpbnQtZGlzYWJsZSB2dWVqcy1hY2Nlc3NpYmlsaXR5L2Zvcm0tY29udHJvbC1oYXMtbGFiZWwgKi9cbmltcG9ydCB7IHJlZiwgb25Nb3VudGVkLCBuZXh0VGljayB9IGZyb20gJ3Z1ZSdcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IFNpdGVMYXlvdXQgZnJvbSAnQC9MYXlvdXRzL1NpdGVMYXlvdXQudnVlJ1xuaW1wb3J0IE1lbnNhZ2VtIGZyb20gJy4vQ29tcG9uZW50ZXMvTWVuc2FnZW0udnVlJ1xuaW1wb3J0IEZvcm1FcnJvciBmcm9tICdAL0NvbXBvbmVudGVzL0xheW91dC9Gb3Jtcy9Gb3JtRXJyb3IudnVlJ1xuaW1wb3J0IGNvbnZlcnNhTGliIGZyb20gJy4vQ29tcG9uZW50ZXMvQ29udmVyc2FMaWInXG5pbXBvcnQgQ29udmVyc2EgZnJvbSAnQC9Nb2RlbHMvRXF1aXBhbWVudG8vQ29udmVyc2EvQ29udmVyc2EnXG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHMoe1xuICAgIGNvbnZlcnNhOiBPYmplY3QsXG4gICAgdXN1YXJpb0lkOiBOdW1iZXIsXG4gICAgbWVuc2FnZW5zVGVtcG9FeGNsdWlyOiBOdW1iZXIsXG59KVxuXG5jb25zdCBzY3JvbGwgPSBkZWJvdW5jZShvblNjcm9sbCwgMTAwLCB7IG1heFdhaXQ6IDI1MCB9KVxuY29uc3Qgc2Nyb2xsTWFyZ2luOiBudW1iZXIgPSAyNVxuY29uc3QgbWF4bGVuZ3RoVGV4dDogbnVtYmVyID0gMjUwMFxuY29uc3QgZWxNZW5zYWdlbnMgPSByZWYobnVsbClcbmxldCBlcnJvTWVuc2FnZW0gPSByZWYoJycpXG5sZXQgdGV4dG9Nc2cgPSByZWYoJycpXG5sZXQgY29udmVyc2FNb2RlbCA9IG5ldyBDb252ZXJzYShwcm9wcy5jb252ZXJzYS5pZCwgcHJvcHMuY29udmVyc2EuZXF1aXBhbWVudG9JZCwgcHJvcHMuY29udmVyc2EudmlzdWFsaXphY2FvLCBwcm9wcy5jb252ZXJzYS5tZW5zYWdlbnMpXG5cbmNvbnN0IHtcbiAgICBtZW5zYWdlbnMsXG4gICAgbWVuc2FnZW5zQW50ZXJpb3JlcyxcbiAgICB0ZW1Ob3Zhc01lbnNhZ2VucyxcbiAgICB0ZW1QZXJtTm90aWZpY2FjYW8sXG4gICAgdWx0aW1hTXNnVmlzdWFsaXphZGFJZCxcbiAgICBhamF4RXhjbHVpck1lbnNhZ2VtLFxuICAgIGF0dWFsaXphck1lbnNhZ2Vuc0FudGVyaW9yZXMsXG4gICAgZW52aWFyTWVuc2FnZW0sXG4gICAgZ2V0TWVuc2FnZW1FcnJvRW52aWFyTWVuc2FnZW0sXG4gICAgZ2V0UHJveGltYU1lbnNhZ2VtLFxuICAgIGdldFVsdGltYU1lbnNhZ2VtVmlzdWFsaXphZGEsXG4gICAgc29saWNpdGFyUGVybU5vdGlmaWNhY2FvLFxuICAgIHZpc3VhbGl6YXJNZW5zYWdlbSxcbn0gPSBjb252ZXJzYUxpYihjb252ZXJzYU1vZGVsLCBwcm9wcy51c3VhcmlvSWQpXG5cbm9uTW91bnRlZCgoKSA9PiB7XG4gICAgaWYgKGVsTWVuc2FnZW5zLnZhbHVlLnNjcm9sbEhlaWdodCA+IChlbE1lbnNhZ2Vucy52YWx1ZS5jbGllbnRIZWlnaHQgKyBzY3JvbGxNYXJnaW4pKSB7XG4gICAgICAgIG1lbnNhZ2Vuc0FudGVyaW9yZXMudmFsdWUgPSB0cnVlXG4gICAgfVxuXG4gICAgbmV4dFRpY2soc2V0U2Nyb2xsUGFnaW5hKVxufSlcblxuYXN5bmMgZnVuY3Rpb24gZW52aWFyTWVuc2FnZW1FdmVudCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgdGV4dG8gPSB0ZXh0b01zZy52YWx1ZS50cmltKClcbiAgICAgICAgdGV4dG9Nc2cudmFsdWUgPSAnJ1xuICAgICAgICBlcnJvTWVuc2FnZW0udmFsdWUgPSAnJ1xuICAgICAgICBhd2FpdCBlbnZpYXJNZW5zYWdlbSh0ZXh0bylcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGVycm9NZW5zYWdlbS52YWx1ZSA9IGdldE1lbnNhZ2VtRXJyb0Vudmlhck1lbnNhZ2VtKGUpXG5cbiAgICAgICAgaWYgKGU/LnJlc3BvbnNlPy5kYXRhPy5tZW5zYWdlbT8ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgICAgIH0sIDUwMDApXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNldFNjcm9sbFBhZ2luYSgpOiB2b2lkIHtcbiAgICBjb25zdCB1bHRpbWFWaXN1YWxpemFkYSA9IGdldFVsdGltYU1lbnNhZ2VtVmlzdWFsaXphZGEoKVxuXG4gICAgaWYgKHVsdGltYVZpc3VhbGl6YWRhKSB7XG4gICAgICAgIHNldE1lbnNhZ2Vuc1Njcm9sbHRvcChnZXRPZmZzZXRNZW5zYWdlbSh1bHRpbWFWaXN1YWxpemFkYS5pZCkgLSAoZWxNZW5zYWdlbnMudmFsdWUuY2xpZW50SGVpZ2h0IC8gMikpXG4gICAgfVxuXG4gICAgaWYgKGVsTWVuc2FnZW5zLnZhbHVlLnNjcm9sbFRvcCA8IGVsTWVuc2FnZW5zLnZhbHVlLnF1ZXJ5U2VsZWN0b3IoJy5sb2FkZXItaW5saW5lJyk/LmNsaWVudEhlaWdodCkge1xuICAgICAgICBzZXRNZW5zYWdlbnNTY3JvbGx0b3AoZWxNZW5zYWdlbnMudmFsdWUucXVlcnlTZWxlY3RvcignLmxvYWRlci1pbmxpbmUnKT8uY2xpZW50SGVpZ2h0KVxuICAgIH1cblxuICAgIG5leHRUaWNrKHZlcmlmaWNhVWx0aW1hVmlzdWFsaXphZGEpXG59XG5cbmZ1bmN0aW9uIG5vdmFzTWVuc2FnZW5zKCk6IHZvaWQge1xuICAgIHRlbU5vdmFzTWVuc2FnZW5zLnZhbHVlID0gZmFsc2VcbiAgICBjb25zdCBwcm94aW1hTWVuc2FnZW0gPSBnZXRQcm94aW1hTWVuc2FnZW0odWx0aW1hTXNnVmlzdWFsaXphZGFJZClcbiAgICBpZiAocHJveGltYU1lbnNhZ2VtKSB7XG4gICAgICAgIHNldE1lbnNhZ2Vuc1Njcm9sbHRvcChnZXRPZmZzZXRNZW5zYWdlbShwcm94aW1hTWVuc2FnZW0uaWQpIC0gKGVsTWVuc2FnZW5zLnZhbHVlLmNsaWVudEhlaWdodCAvIDIpKVxuICAgICAgICB2aXN1YWxpemFyTWVuc2FnZW0ocHJveGltYU1lbnNhZ2VtLmlkKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFNjcm9sbFBhZ2luYSgpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBzZXRNZW5zYWdlbnNTY3JvbGx0b3AocHg6IG51bWJlcik6IHZvaWQge1xuICAgIGVsTWVuc2FnZW5zLnZhbHVlLnNjcm9sbFRvcCA9IHB4XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2Nyb2xsLmNhbmNlbCgpXG4gICAgfSwgMTAwKVxufVxuXG5mdW5jdGlvbiBnZXRPZmZzZXRNZW5zYWdlbShpZDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gZWxNZW5zYWdlbnMudmFsdWUucXVlcnlTZWxlY3RvcihgI21zZy0ke2lkfWApLm9mZnNldFRvcCAtIGVsTWVuc2FnZW5zLnZhbHVlLm9mZnNldFRvcFxufVxuXG5mdW5jdGlvbiBvblNjcm9sbCgpOiB2b2lkIHtcbiAgICBpZiAoZWxNZW5zYWdlbnMudmFsdWUuc2Nyb2xsVG9wIDw9IHNjcm9sbE1hcmdpbikge1xuICAgICAgICBhdHVhbGl6YXJNc2dzQW50ZXJpb3JlcygpXG4gICAgfVxuXG4gICAgdmVyaWZpY2FVbHRpbWFWaXN1YWxpemFkYSgpXG5cbiAgICBpZiAoKGVsTWVuc2FnZW5zLnZhbHVlLnNjcm9sbFRvcCArIGVsTWVuc2FnZW5zLnZhbHVlLmNsaWVudEhlaWdodCkgPj0gKGVsTWVuc2FnZW5zLnZhbHVlLnNjcm9sbEhlaWdodCAtIHNjcm9sbE1hcmdpbikpIHtcbiAgICAgICAgdGVtTm92YXNNZW5zYWdlbnMudmFsdWUgPSBmYWxzZVxuICAgIH1cbn1cblxuZnVuY3Rpb24gdmVyaWZpY2FVbHRpbWFWaXN1YWxpemFkYSgpOiB2b2lkIHtcbiAgICBjb25zdCB1bHRpbWFWaXN1YWxpemFkYSA9IHByb2N1cmFVbHRpbWFNZW5zYWdlbVZpc3VhbGl6YWRhKClcbiAgICBpZiAodWx0aW1hVmlzdWFsaXphZGEgJiYgdWx0aW1hVmlzdWFsaXphZGEuaWQgPiB1bHRpbWFNc2dWaXN1YWxpemFkYUlkKSB7XG4gICAgICAgIHVsdGltYU1zZ1Zpc3VhbGl6YWRhSWQudmFsdWUgPSB1bHRpbWFWaXN1YWxpemFkYS5pZFxuICAgICAgICB2aXN1YWxpemFyTWVuc2FnZW0odWx0aW1hTXNnVmlzdWFsaXphZGFJZC52YWx1ZSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHByb2N1cmFVbHRpbWFNZW5zYWdlbVZpc3VhbGl6YWRhKCk6IG9iamVjdCB7XG4gICAgY29uc3QgaWR4VWx0aW1hID0gbWVuc2FnZW5zLnZhbHVlLmZpbmRJbmRleCgobSkgPT4gbS5pZCA+IHVsdGltYU1zZ1Zpc3VhbGl6YWRhSWQudmFsdWUpXG4gICAgcmV0dXJuIG1lbnNhZ2Vucy52YWx1ZS5zbGljZShpZHhVbHRpbWEpLmZpbmRMYXN0KChtKSA9PiBtLmlkID4gMCAmJiB2ZXJpZmljYU1lbnNhZ2VtVmlzdWFsaXphZGEobS5pZCkpXG59XG5cbmZ1bmN0aW9uIHZlcmlmaWNhTWVuc2FnZW1WaXN1YWxpemFkYShpZCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGVsID0gZWxNZW5zYWdlbnMudmFsdWUucXVlcnlTZWxlY3RvcihgI21zZy0ke2lkfWApXG5cbiAgICBjb25zdCBlbE9mZnNldCA9IGVsLm9mZnNldFRvcCArIGVsLmNsaWVudEhlaWdodCAtIGVsLnBhcmVudEVsZW1lbnQub2Zmc2V0VG9wXG4gICAgcmV0dXJuIGVsT2Zmc2V0ID4gZWwucGFyZW50RWxlbWVudC5zY3JvbGxUb3AgJiYgZWxPZmZzZXQgPCBlbC5wYXJlbnRFbGVtZW50LnNjcm9sbFRvcCArIGVsLnBhcmVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGF0dWFsaXphck1zZ3NBbnRlcmlvcmVzKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBtZW5zYWdlbUlkID0gYXdhaXQgYXR1YWxpemFyTWVuc2FnZW5zQW50ZXJpb3JlcygpXG4gICAgaWYgKCFtZW5zYWdlbUlkKSB7IHJldHVybiB9XG5cbiAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgIHNldE1lbnNhZ2Vuc1Njcm9sbHRvcChnZXRPZmZzZXRNZW5zYWdlbShtZW5zYWdlbUlkKSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBleGNsdWlyTWVuc2FnZW1MaXN0ZW5lcihtZW5zYWdlbTogb2JqZWN0KTogdm9pZCB7XG4gICAgYWpheEV4Y2x1aXJNZW5zYWdlbShtZW5zYWdlbS5pZClcbn1cblxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgICA8U2l0ZUxheW91dCA6dGl0dWxvPVwiYENvbnZlcnNhICR7Y29udmVyc2EuZXF1aXBhbWVudG8udGl0dWxvfWBcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBjb252ZXJzYVwiPlxuICAgICAgICAgICAgPGgyPkNvbnZlcnNhIC0ge3sgY29udmVyc2EuZXF1aXBhbWVudG8udGl0dWxvIH19PC9oMj5cbiAgICAgICAgICAgIDxkaXYgdi1pZj1cIiF0ZW1QZXJtTm90aWZpY2FjYW9cIiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXdhcm5pbmcgbXQtMiBtYi00IGN1cnNvci1wb2ludGVyXCIgQGNsaWNrPVwic29saWNpdGFyUGVybU5vdGlmaWNhY2FvXCI+XG4gICAgICAgICAgICAgICAgVm9jw6ogbsOjbyBpcsOhIHJlY2ViZXIgbm90aWZpY2HDp8O1ZXMgZGUgbm92YXMgbWVuc2FnZW5zLjxicj5cbiAgICAgICAgICAgICAgICBDbGlxdWUgYXF1aSBwYXJhIGF1dG9yaXphciBhcyBOb3RpZmljYcOnw7Vlc1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGV1ZG9cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLW1lbnNhZ2Vuc1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlZj1cImVsTWVuc2FnZW5zXCIgY2xhc3M9XCJtZW5zYWdlbnNcIiBAc2Nyb2xsPVwic2Nyb2xsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJtZW5zYWdlbnNBbnRlcmlvcmVzXCIgY2xhc3M9XCJsb2FkZXItaW5saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlbGVtZW50b1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW5zYWdlbSB2LWZvcj1cIm1lbnNhZ2VtIGluIG1lbnNhZ2Vuc1wiIDprZXk9XCJtZW5zYWdlbS5pZFwiIDptZW5zYWdlbT1cIm1lbnNhZ2VtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dXN1YXJpb0lkPVwidXN1YXJpb0lkXCIgOm1lbnNhZ2Vuc1RlbXBvRXhjbHVpcj1cIm1lbnNhZ2Vuc1RlbXBvRXhjbHVpclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGV4Y2x1aXJNZW5zYWdlbT1cImV4Y2x1aXJNZW5zYWdlbUxpc3RlbmVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uIG5hbWU9XCJmYWRlLXRyYW5zaXRpb25cIiA6ZHVyYXRpb249XCIxMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdi1pZj1cInRlbU5vdmFzTWVuc2FnZW5zXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibm92YXMtbWVuc2FnZW5zXCIgQGNsaWNrPVwibm92YXNNZW5zYWdlbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Ob3ZhcyBNZW5zYWdlbnM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwibWVuc2FnZW5zLWZvb3RlclwiIEBzdWJtaXQucHJldmVudD1cImVudmlhck1lbnNhZ2VtRXZlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtRXJyb3IgOmVycm9yPVwiZXJyb01lbnNhZ2VtXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSB2LW1vZGVsPVwidGV4dG9Nc2dcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIDptYXhsZW5ndGg9XCJtYXhsZW5ndGhUZXh0XCIgcm93cz1cIjNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVudmlhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0Y291bnRcIj57eyB0ZXh0b01zZy5sZW5ndGggKyAnIC8gJyArIG1heGxlbmd0aFRleHQgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvU2l0ZUxheW91dD5cbjwvdGVtcGxhdGU+XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJmaWx0ZXIiLCJsYXN0IiwiZGVib3VuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxNQUFxQixTQUFTO0FBQUEsRUFPMUIsWUFBWSxJQUFJLFVBQVUsWUFBWSxZQUFZLFVBQVUsT0FBTztBQUMvRCxTQUFLLEtBQUs7QUFDVixTQUFLLFdBQVc7QUFDaEIsU0FBSyxhQUFhO0FBQ2xCLFNBQUssYUFBYTtBQUNsQixTQUFLLFVBQVU7QUFBQSxFQUNuQjtBQUFBLEVBRUEsT0FBTyxlQUFlLFdBQVc7QUFDN0IsV0FBTyxVQUFVLElBQUksQ0FBQyxNQUFNLElBQUksU0FBUyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFVBQVUsQ0FBQztBQUFBLEVBQzFGO0FBQ0o7QUNUd0IsU0FBQSxZQUFZLFVBQW9CLGdCQUFnQjtBQUNoRSxNQUFBLFlBQTZCLElBQUksU0FBUyxTQUFTO0FBQ25ELE1BQUEsc0JBQW9DLElBQUksS0FBSztBQUM3QyxNQUFBLG9CQUFrQyxJQUFJLEtBQUs7QUFDL0MsTUFBSSxxQkFBbUMsSUFBSSxRQUFRLEVBQUUsYUFBYyxDQUFBO0FBQ25FLE1BQUksYUFBcUIsU0FBUztBQUNsQyxNQUFJLHlCQUFzQyxJQUFJLFNBQVMsYUFBYSxrQkFBa0I7QUFDdEYsTUFBSSxZQUFvQjtBQUV4QixNQUFJLFNBQWlCO0FBQ3JCLE1BQUksb0JBQW9CO0FBQUEs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
