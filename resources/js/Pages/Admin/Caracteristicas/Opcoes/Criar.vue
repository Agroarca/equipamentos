<script setup>
    import AdminLayout from "@/Layouts/AdminLayout.vue";
    import { useForm } from "@inertiajs/inertia-vue3";
    import FormError from "@/Components/FormError.vue";

    const props = defineProps(['caracteristica'])

    const form = useForm({
        'nome': '',
    })

    function submit() {
        form.post(route('admin.categorias.caracteristicas.opcoes.salvar', [props.caracteristica.categoria_id, props.caracteristica.id]))
    }

    </script>

    <template>
        <AdminLayout titulo="Nova Opção">
            <form @submit.prevent="submit">
                <div class="card card-default">
                    <div class="card-body">
                        <div class="mb-3">
                            <label for="nome">Nome</label>
                            <input class="form-control" type="text" id="nome" v-model="form.nome" required>
                            <FormError :error="form.errors.nome" />
                        </div>
                    </div>
                    <div class="card-footer">
                        <button type="submit" class="btn btn-primary">Criar</button>
                    </div>
                </div>
            </form>
        </AdminLayout>
    </template>
