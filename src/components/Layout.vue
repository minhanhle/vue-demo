<template>
    <div class="home">
        <div class="header">
            <slot name="header">
                Home page
            </slot>
        </div>
        <slot name="content">
            Content
        </slot>
    </div>
</template>

<script>
export default {
  name: 'appLayput'
}
</script>
