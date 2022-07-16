<template>
  <h3 v-for="name in names">
    <slot :firstName="name.firstName" :lastName="name.lastName"></slot>
  </h3>
</template>

<script>
export default {
  name: 'NameList',
  data() {
    return {
      names: [
        {
          firstName: 'Bruce',
          lastName: 'Wayne',
        },
        {
          firstName: 'Clark',
          lastName: 'Kent',
        },
        {
          firstName: 'Princess',
          lastName: 'Diana',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
