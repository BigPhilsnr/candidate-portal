<template>
 <b-container>
    <b-card
    v-for="item in items" :key="item.id"
    :title="item.post"
    tag="article"
    style="width: 100%;"
    class="mb-2"
  >
    <b-card-text>
      <b-row class="secondary mx-auto"  >
        <b-col cols="2">
          <b-row>
          <b> Job id</b>
          </b-row>
          <b-row>
            {{ item.id }}
          </b-row>
        </b-col>
        <b-col>
          <b-row>
          <b> Job Category</b>
          </b-row>
          <b-row>
            {{ item.category }}
          </b-row>
        </b-col>
        <b-col>
          <b-row>
          <b> Closing Date</b>
          </b-row>
          <b-row>
            {{ item.start_date }}
          </b-row>
        </b-col>
        <b-col>
          <b-row>
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="outline-primary"
              class="mr-1"
              style="height:45px"
            >
              View Details
            </b-button>
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              class="ml-1"
              variant="primary"
              style="height:45px"
            >
              Apply
            </b-button>
          </b-row>
        </b-col>
      </b-row>
    </b-card-text>
  </b-card>
 </b-container>
</template>

<script>
import {
  BContainer, BCard, BRow, BCol, BButton,
} from 'bootstrap-vue'
import { codeKitchenSink } from './code'

export default {
  components: {
    BContainer,
    BCard,
    BRow,
    BCol,
    BButton,
  },
  data() {
    return {
      perPage: 5,
      pageOptions: [3, 5, 10],
      totalRows: 1,
      currentPage: 1,
      sortBy: '',
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      filterOn: [],
      infoModal: {
        id: 'info-modal',
        title: '',
        content: '',
      },
      fields: [
        {
          key: 'id', label: 'Id',
        },
        { key: 'post', label: 'Designation', sortable: true },
        { key: 'category', label: 'Category', sortable: true },
        'job_group',
        { key: 'start_date', label: 'Deadline', sortable: true },
        { key: 'experience', label: 'No of Posts', sortable: true },
      ],
      /* eslint-disable global-require */
      items: [
        {
          id: 1,
          avatar: require('@/assets/images/avatars/10-small.png'),
          full_name: "Korrie O'Crevy",
          category: 'Information Technology',
          post: 'Nuclear Power Engineer',
          email: 'kocrevy0@thetimes.co.uk',
          city: 'Krasnosilka',
          start_date: '09/23/2016',
          job_group: 'M6',
          age: '61',
          experience: '1',
          status: 2,
        },
        {
          id: 2,
          avatar: require('@/assets/images/avatars/1-small.png'),
          full_name: 'Bailie Coulman',
          post: 'VP Quality Control',
          category: 'Information Technology',
          email: 'bcoulman1@yolasite.com',
          city: 'Hinigaran',
          start_date: '05/20/2018',
          job_group: 'M6',
          age: '63',
          experience: '3',
          status: 2,
        },
        {
          id: 3,
          avatar: require('@/assets/images/avatars/9-small.png'),
          full_name: 'Stella Ganderton',
          post: 'Operator',
          email: 'sganderton2@tuttocitta.it',
          city: 'Golcowa',
          start_date: '03/24/2018',
          category: 'Information Technology',
          job_group: 'M6',
          age: '66',
          experience: '6',
          status: 5,
        },
        {
          id: 4,
          avatar: require('@/assets/images/avatars/3-small.png'),
          full_name: 'Dorolice Crossman',
          post: 'Cost Accountant',
          email: 'dcrossman3@google.co.jp',
          category: 'Information Technology',
          city: 'Paquera',
          start_date: '12/03/2017',
          job_group: 'M6',
          age: '22',
          experience: '2',
          status: 2,
        },
        {
          id: 5,
          avatar: require('@/assets/images/avatars/4-small.png'),
          full_name: 'Harmonia Nisius',
          post: 'Senior Cost Accountant',
          category: 'Information Technology',
          email: 'hnisius4@gnu.org',
          city: 'Lucan',
          start_date: '08/25/2017',
          job_group: 'M6',
          age: '33',
          experience: '3',
          status: 2,
        },
        {
          id: 6,
          avatar: require('@/assets/images/avatars/5-small.png'),
          full_name: 'Genevra Honeywood',
          post: 'Geologist',
          email: 'ghoneywood5@narod.ru',
          city: 'Maofan',
          start_date: '06/01/2017',
          job_group: '$17803.80',
          age: '61',
          experience: '1',
          status: 1,
        },
        {
          id: 7,
          avatar: require('@/assets/images/avatars/7-small.png'),
          full_name: 'Eileen Diehn',
          post: 'Environmental Specialist',
          email: 'ediehn6@163.com',
          city: 'Lampuyang',
          start_date: '10/15/2017',
          job_group: '$18991.67',
          age: '59',
          experience: '9',
          status: 3,
        },
        {
          id: 8,
          avatar: require('@/assets/images/avatars/9-small.png'),
          full_name: 'Richardo Aldren',
          post: 'Senior Sales Associate',
          email: 'raldren7@mtv.com',
          city: 'Skoghall',
          start_date: '11/05/2016',
          job_group: '$19230.13',
          age: '55',
          experience: '5',
          status: 3,
        },
        {
          id: 9,
          avatar: require('@/assets/images/avatars/2-small.png'),
          full_name: 'Allyson Moakler',
          post: 'Safety Technician',
          email: 'amoakler8@shareasale.com',
          city: 'Mogilany',
          start_date: '12/29/2018',
          job_group: '$11677.32',
          age: '39',
          experience: '9',
          status: 5,
        },
        {
          id: 10,
          avatar: require('@/assets/images/avatars/6-small.png'),
          full_name: 'Merline Penhalewick',
          post: 'Junior Executive',
          email: 'mpenhalewick9@php.net',
          city: 'Kanuma',
          start_date: '04/19/2019',
          job_group: '$15939.52',
          age: '23',
          experience: '3',
          status: 2,
        },
      ],
      /* eslint-disable global-require */
      status: [{
        1: 'Current', 2: 'Professional', 3: 'Rejected', 4: 'Resigned', 5: 'Applied',
      },
      {
        1: 'light-primary', 2: 'light-success', 3: 'light-danger', 4: 'light-warning', 5: 'light-info',
      }],
      codeKitchenSink,
    }
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => ({ text: f.label, value: f.key }))
    },
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length
  },
  methods: {
    onRowSelected(items) {
      alert(JSON.stringify(items))
    },
    info(item, index, button) {
      this.infoModal.title = `Row index: ${index}`
      this.infoModal.content = JSON.stringify(item, null, 2)
      this.$root.$emit('bv::show::modal', this.infoModal.id, button)
    },
    resetInfoModal() {
      this.infoModal.title = ''
      this.infoModal.content = ''
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
  },
}
</script>
