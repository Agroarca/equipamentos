<script setup>
import { Inertia } from "@inertiajs/inertia";

Inertia.on("navigate", (event) => {
  document.body.classList.remove("admin");
  document.body.classList.remove("site");

  if (route().current("admin.*")) {
    document.body.classList.add("admin");
  } else {
    document.body.classList.add("site");
  }
});
</script>

<template>
  <slot></slot>
</template>
