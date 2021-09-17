<template>
  <div>
    <div>
      <b-form
        ref="form"
        :style="{height: trHeight}"
        class="repeater-form"
        @submit.prevent="repeateAgain"
      >

        <!-- Row Loop -->
        <b-row
          v-for="(item, index) in items"
          :id="item.id"
          :key="item.id"
          ref="row"
        >

          <!-- Item Name -->
          <b-col md="12">
            <b-form-group
              label="Name"
              label-for="name"
            >
              <b-form-input
                id="qualification-name"
                type="text"
                placeholder="Bsc. Computer Science"
              />
            </b-form-group>
          </b-col>
              <b-col md="6">
            <b-form-group
              label="Institution"
              label-for="institution"
            >
              <b-form-input
                id="institution"
                type="text"
                placeholder="Nairobi university"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Level"
              label-for="Level"
            >
              <b-form-input
                id="level"
                type="text"
                placeholder="Degree"
              />
            </b-form-group>
          </b-col>

          <!-- Cost -->
          <b-col md="4">
            <b-form-group
              label="Qualification"
              label-for="qualification"
            >
              <b-form-input
                id="qualification"
                type="text"
                placeholder="First Class"
              />
            </b-form-group>
          </b-col>

          <!-- Quantity -->
          <b-col md="2">
            <b-form-group
              label="Cert. No"
              label-for="cert-n0"
            >
              <b-form-input
                id="cert-no"
                type="text"
                placeholder="A5960"
              />
            </b-form-group>
          </b-col>

          <!-- Profession -->
          <b-col
            lg="4"
            md="4"
          >
            <b-form-group
              label="Year"
              label-for="year"
            >
              <b-form-input
                id="year"
                type="date"
                placeholder="Year"
              />
            </b-form-group>
          </b-col>

          <!-- Remove Button -->
          <b-col
            lg="2"
            md="3"
            class="mb-50"
          >
            <b-button
              v-ripple.400="'rgba(234, 84, 85, 0.15)'"
              variant="outline-danger"
              class="mt-0 mt-md-2"
              @click="removeItem(index)"
            >
              <feather-icon
                icon="TrashIcon"
                class="mr-25"
              />
            </b-button>
          </b-col>
          <b-col cols="12">
            <hr>
          </b-col>
        </b-row>

      </b-form>
    </div>
    <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="primary"
      @click="repeateAgain"
    >
      <feather-icon
        icon="PlusIcon"
        class="mr-25"
      />
      <span>Add New</span>
    </b-button>

  </div>
</template>

<script>
import {
  BForm, BFormGroup, BFormInput, BRow, BCol, BButton,
} from 'bootstrap-vue'
import { heightTransition } from '@core/mixins/ui/transition'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BForm,
    BRow,
    BCol,
    BButton,
    BFormGroup,
    BFormInput,
  },
  directives: {
    Ripple,
  },
  mixins: [heightTransition],
  data() {
    return {
      items: [{
        id: 1,
        selected: 'male',
        selected1: 'designer',
        prevHeight: 0,
      }],
      nextTodoId: 2,
    }
  },
  mounted() {
    this.initTrHeight()
  },
  created() {
    window.addEventListener('resize', this.initTrHeight)
  },
  destroyed() {
    window.removeEventListener('resize', this.initTrHeight)
  },
  methods: {
    repeateAgain() {
      this.items.push({
        id: this.nextTodoId += this.nextTodoId,
      })

      this.$nextTick(() => {
        this.trAddHeight(this.$refs.row[0].offsetHeight)
      })
    },
    removeItem(index) {
      this.items.splice(index, 1)
      this.trTrimHeight(this.$refs.row[0].offsetHeight)
    },
    initTrHeight() {
      this.trSetHeight(null)
      this.$nextTick(() => {
        this.trSetHeight(this.$refs.form.scrollHeight)
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.repeater-form {
  overflow: hidden;
  transition: .35s height;
}
</style>
