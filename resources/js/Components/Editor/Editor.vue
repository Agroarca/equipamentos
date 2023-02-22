<script setup>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import { Document } from '@tiptap/extension-document'
import { Paragraph } from '@tiptap/extension-paragraph'
import { Text } from '@tiptap/extension-text'
import { Blockquote } from '@tiptap/extension-blockquote'
import { BulletList } from '@tiptap/extension-bullet-list'
import { Heading } from '@tiptap/extension-heading'
import { HorizontalRule } from '@tiptap/extension-horizontal-rule'
import { ListItem } from '@tiptap/extension-list-item'
import { OrderedList } from '@tiptap/extension-ordered-list'
import { Bold } from '@tiptap/extension-bold'
import { Italic } from '@tiptap/extension-italic'
import { BubbleMenu } from '@tiptap/extension-bubble-menu'
import { History } from '@tiptap/extension-history'
import { TextAlign } from '@tiptap/extension-text-align'

import Menu from './Menu.vue'

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const editor = useEditor({
    content: props.modelValue,
    editable: true,
    extensions: [
        Document,
        Paragraph,
        Text,
        Blockquote,
        BulletList,
        Heading.configure({
            levels: [1, 2, 3],
        }),
        HorizontalRule,
        ListItem,
        OrderedList,
        Bold,
        Italic,
        BubbleMenu,
        History,
        TextAlign.configure({
            types: ['heading', 'paragraph'],
        }),
    ],
    onUpdate: () => {
        emit('update:modelValue', editor.value.getHTML())
    },
})
</script>

<template>
    <div class="tiptap-editor">
        <Menu class="tiptap-menu" :editor="editor" />
        <EditorContent class="tiptap-content" :editor="editor" />
    </div>
</template>
