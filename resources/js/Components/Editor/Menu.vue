<script setup>
const props = defineProps(["editor"]);

let itens = [
    {
        icone: "fa-solid fa-bold",
        titulo: "Negrito",
        acao: () => props.editor.chain().focus().toggleBold().run(),
    },
    {
        icone: "fa-solid fa-italic",
        titulo: "Italico",
        acao: () => props.editor.chain().focus().toggleItalic().run(),
    },
    {
        texto: "H1",
        titulo: "Título 1",
        acao: () =>
            props.editor.chain().focus().toggleHeading({ level: 1 }).run(),
    },
    {
        texto: "H2",
        titulo: "Título 2",
        acao: () =>
            props.editor.chain().focus().toggleHeading({ level: 2 }).run(),
    },
    {
        texto: "H3",
        titulo: "Título 3",
        acao: () =>
            props.editor.chain().focus().toggleHeading({ level: 3 }).run(),
    },
    {
        icone: "fa-solid fa-list-ul",
        titulo: "Lista",
        acao: () => props.editor.chain().focus().toggleBulletList().run(),
    },
    {
        icone: "fa-solid fa-list-ol",
        titulo: "Lista Ordenada",
        acao: () => props.editor.chain().focus().toggleOrderedList().run(),
    },
    {
        icone: "fa-solid fa-indent",
        titulo: "Destacar",
        acao: () => props.editor.chain().focus().toggleBlockquote().run(),
    },
    {
        icone: "fa-regular fa-window-minimize",
        titulo: "Linha Horizontal",
        acao: () => props.editor.chain().focus().setHorizontalRule().run(),
    },
    {
        icone: "fa-solid fa-text-slash",
        titulo: "Linha Horizontal",
        acao: () =>
            props.editor.chain().focus().clearNodes().unsetAllMarks().run(),
    },
    {
        icone: "fa-solid fa-arrow-rotate-left",
        titulo: "Desfazer",
        acao: () => props.editor.chain().focus().undo().run(),
    },
    {
        icone: "fa-solid fa-arrow-rotate-right",
        titulo: "Refazer",
        acao: () => props.editor.chain().focus().redo().run(),
    },
    {
        icone: "fa-solid fa-align-left",
        titulo: "Alinhar à Esquerda",
        acao: () => props.editor.chain().focus().setTextAlign("left").run(),
    },
    {
        icone: "fa-solid fa-align-center",
        titulo: "Alinhar no centro",
        acao: () => props.editor.chain().focus().setTextAlign("center").run(),
    },
    {
        icone: "fa-solid fa-align-right",
        titulo: "Alinhar à Direita",
        acao: () => props.editor.chain().focus().setTextAlign("right").run(),
    },
    {
        icone: "fa-solid fa-align-justify",
        titulo: "Justificar",
        acao: () => props.editor.chain().focus().setTextAlign("justify").run(),
    },
];
</script>

<template>
    <div>
        <template v-for="(item, index) in itens" :key="index">
            <button v-if="item.icone" class="editor-btn" @click="item.acao" :title="item.titulo"><i :class="item.icone"></i></button>
            <button v-else class="editor-btn" @click="item.acao" :title="item.titulo"><span>{{ item.texto }}</span></button>
        </template>
    </div>
</template>
