<template>
  <div>
    <form-wizard
      color="#7367F0"
      :title="null"
      :subtitle="null"
      layout="vertical"
      finish-button-text="Submit"
      back-button-text="Previous"
      class="vertical-steps steps-transparent mb-3"
      @on-complete="formSubmitted"
    >

      <!-- account details tab -->
      <tab-content
        title="Basic Details"
        icon="feather icon-file-text"
      >
        <b-row>
          <b-col
            cols="12"
            class="mb-2"
          >
            <h5 class="mb-0">
              Basic Details
            </h5>
            <small class="text-muted">
              Enter Your Account Details.(All field are required)
            </small>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="First name"
              label-for="vi-username"
            >
              <b-form-input
                id="vi-username"
                placeholder="john"
              />
            </b-form-group>
          </b-col>
         <b-col md="6">
            <b-form-group
              label="Middle name"
              label-for="vi-username"
            >
              <b-form-input
                id="vi-username"
                placeholder="linus"
              />
            </b-form-group>
          </b-col>
           <b-col md="6">
            <b-form-group
              label="Last name"
              label-for="vi-username"
            >
              <b-form-input
                id="vi-username"
                placeholder="doe"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Email"
              label-for="vi-email"
            >
              <b-form-input
                id="vi-email"
                type="email"
                placeholder="john.doe@email.com"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Phone number"
              label-for="vi-phone"
            >
              <b-form-input
                id="vi-phone"
                type="number"
                placeholder="0722222222"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="KRA pin number"
              label-for="vi-c-pin"
            >
              <b-form-input
                id="vi-c-pin"
                type="text"
                placeholder="A0D66949036970"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Identification Document"
              label-for="vi-document"
            >
              <v-select
                id="vi-docmument"
                v-model="selectedLanguage"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :selectable="option => ! option.value.includes('select_value')"
                :options="documentType"
                label="text"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Identification document number"
              label-for="vi-c-document-number"
            >
              <b-form-input
                id="vi-c-document-number"
                type="number"
                placeholder="38490183475"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </tab-content>

      <!-- personal details tab -->
      <tab-content
        title="Advanced Bio Data"
        icon="feather icon-user"
      >
        <b-row>
          <b-col
            cols="12"
            class="mb-2"
          >
            <h5 class="mb-0">
              Advanced Bio Data
            </h5>
            <small class="text-muted">Enter Your Personal Info.</small>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Date of birth"
              label-for="vi-dob"
            >
              <b-form-input
                id="vi-dob"
                type="date"
                placeholder="Date of birth"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Gender"
              label-for="vi-gender"
            >
              <v-select
                id="vi-gender"
                v-model="selectedContry"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="gender"
                :selectable="option => ! option.value.includes('select_value')"
                label="text"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="NHIF number"
              label-for="vi-c-nhif-number"
            >
              <b-form-input
                id="vi-c-nhif-number"
                type="number"
                placeholder="83475"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="NSSF number"
              label-for="vi-c-nssf-number"
            >
              <b-form-input
                id="vi-c-nssf-number"
                type="number"
                placeholder="3849"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Postal Address"
              label-for="vi-c-postal-address"
            >
              <b-form-input
                id="vi-c-postal-address"
                type="text"
                placeholder="30100-5633 Nairobi Kenya "
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Home County"
              label-for="vi-c-home-county"
            >
              <b-form-input
                id="vi-c-home-county"
                type="text"
                placeholder="Nairobi"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Ethnicity"
              label-for="vi-c-document-number"
            >
              <b-form-input
                id="vi-c-ethnicity"
                type="text"
                placeholder="Kikuyu"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Sub group"
              label-for="vi-c-sub-group"
            >
              <b-form-input
                id="vi-c-sub-group"
                type="text"
                placeholder="Kikuyu"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </tab-content>

      <!-- address -->
      <tab-content
        title="Qualifications"
        icon="feather icon-map-pin"
      >
        <b-row>
          <b-col
            cols="12"
            class="mb-2"
          >
            <h5 class="mb-0">
            Qualifications
            </h5>
            <small class="text-muted">Fill in your professional and academic  qualifications</small>
          </b-col>
          <b-col md="12">
            <qualification/>
           </b-col>
        </b-row>
      </tab-content>

      <!-- social link -->
      <tab-content
        title="Personal Disclosure"
        icon="feather icon-folder"
      >
        <b-row>
          <b-col
            cols="12"
            class="mb-2"
          >
            <h5 class="mb-0">
              Personal Disclosure
            </h5>
            <small class="text-muted">Fill in the personal disclosure questions</small>
          </b-col>
          <b-col md="12">
            <b-form-group
              label="Have you ever been convicted of any criminal offence or a subject of probation order?"
              label-for="vi-q1"
            >
             <b-form-radio-group
                v-model="selected"
                :options="options"
                :aria-describedby="ariaDescribedby"
                name="radios-stacked"
                >
            </b-form-radio-group>
            </b-form-group>
          </b-col>
          <b-col md="12">
            <b-form-group
              label="Details:If yes, State nature of offence, the year and duration of conviction"
              label-for="vi-q1-reason"
            >
              <b-form-textarea
                    id="textarea"
                    v-model="text"
                    placeholder="Enter something..."
                    rows="3"
                    max-rows="6"
                >
              </b-form-textarea>
            </b-form-group>
          </b-col>
          <hr/>
          <b-col md="12">
            <b-form-group
              label="Have you ever been dismissed or otherwise removed from any employment?"
              label-for="vi-q1"
            >
             <b-form-radio-group
                v-model="selected"
                :options="options"
                :aria-describedby="ariaDescribedby"
                name="radios-stacked"
                >
            </b-form-radio-group>
            </b-form-group>
          </b-col>
          <b-col md="12">
            <b-form-group
              label="Details: If yes, give details"
              label-for="vi-q1-reason"
            >
              <b-form-textarea
                    id="textarea"
                    v-model="text"
                    placeholder="Enter something..."
                    rows="3"
                    max-rows="6"
                >
              </b-form-textarea>
            </b-form-group>
          </b-col>
          <hr/>
          <b-col md="12">
            <b-form-group
              label="Are you living with any disability?"
              label-for="vi-q1"
            >
             <b-form-radio-group
                v-model="selected"
                :options="options"
                :aria-describedby="ariaDescribedby"
                name="radios-stacked"
                >
            </b-form-radio-group>
            </b-form-group>
          </b-col>
          <b-col md="12">
            <b-form-group
              label="Details: If yes, give Details /nature of Disability and attach relevant documents"
              label-for="vi-q1-reason"
            >
              <b-form-textarea
                    id="textarea"
                    v-model="text"
                    placeholder="Enter something..."
                    rows="3"
                    max-rows="6"
                >
              </b-form-textarea>
            </b-form-group>
          </b-col>
        </b-row>
      </tab-content>

      <!-- attachements -->
      <tab-content
        title="Attachments"
        icon="feather icon-link"
      >
        <b-row>
          <b-col
            cols="12"
            class="mb-2"
          >
            <h5 class="mb-0">
              Attachments
            </h5>
            <small class="text-muted">Attach all documents relevant to this application</small>
          </b-col>
         <b-col md="12">
            <b-form-group
              label=""
              label-for="vi-facebook"
            >
              <document-attachments
                id="vi-facebook"
                placeholder="https://facebook.com/abc"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </tab-content>
    </form-wizard>

  </div>
</template>

<script>
import { FormWizard, TabContent } from 'vue-form-wizard'
import vSelect from 'vue-select'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import {
  BRow,
  BCol,
  BFormGroup,
  BFormInput,
  BFormRadioGroup,
  BFormTextarea,
} from 'bootstrap-vue'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import Qualification from './qualification/Qualification.vue'
import DocumentAttachments from './attachments/DocumentAttachments.vue'
import { codeIconInfo } from './code'

export default {
  components: {
    FormWizard,
    TabContent,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    vSelect,
    // eslint-disable-next-line vue/no-unused-components
    ToastificationContent,
    Qualification,
    BFormRadioGroup,
    BFormTextarea,
    DocumentAttachments,
  },
  data() {
    return {
      selectedContry: 'select_value',
      selectedLanguage: 'nothing_selected',
      codeIconInfo,
      countryName: [
        { value: 'select_value', text: 'Select Value' },
        { value: 'Russia', text: 'Russia' },
        { value: 'Canada', text: 'Canada' },
        { value: 'China', text: 'China' },
        { value: 'United States', text: 'United States' },
        { value: 'Brazil', text: 'Brazil' },
        { value: 'Australia', text: 'Australia' },
        { value: 'India', text: 'India' },
      ],
      documentType: [
        { value: 'nothing_selected', text: 'Nothing Selected' },
        { value: 'National Id', text: 'National Id' },
        { value: 'Passport', text: 'Passport' },
      ],
      gender: [
        { value: 'nothing_selected', text: 'Nothing Selected' },
        { value: 'Male', text: 'Male' },
        { value: 'Female', text: 'Female' },
      ],
      options: [
        { text: 'Yes', value: 'Yes' },
        { text: 'No', value: 'No' },
      ],
    }
  },
  methods: {
    formSubmitted() {
      this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Form Submitted',
          icon: 'EditIcon',
          variant: 'success',
        },
      })
    },
  },
}
</script>
<style lang="scss">
  @import '@core/scss/vue/libs/vue-wizard.scss';
  @import '@core/scss/vue/libs/vue-select.scss';
  .wizard-card-footer {
    margin-left: 26% !important;
   }
</style>
