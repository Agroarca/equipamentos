import { r as ref, x as onMounted, a5 as lodashExports, j as axios, d as defineComponent, Z as nextTick, c as createBlock, w as withCtx, o as openBlock, a as createBaseVNode, t as toDisplayString, u as unref, k as createElementBlock, h as createTextVNode, l as createCommentVNode, m as renderList, F as Fragment, f as createVNode, T as Transition, g as withModifiers, b as withDirectives, e as vModelText, A as isRef } from "./app-4bad2d0e.js";
import { _ as _sfc_main$1 } from "./SiteLayout.vue_vue_type_script_setup_true_lang-9f82cc24.js";
import { _ as _sfc_main$2 } from "./Mensagem.vue_vue_type_script_setup_true_lang-73a9cc04.js";
import { _ as _sfc_main$3 } from "./FormError.vue_vue_type_script_setup_true_lang-d8b2414d.js";
import { g as getPush, N as NovaMensagem, L as Listener, M as MensagemExcluida } from "./_plugin-vue_export-helper-32befbe5.js";
import "./Modal.vue_vue_type_script_setup_true_lang-b061b430.js";
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
//# sourceMappingURL=Conversa-60553b08.js.map
