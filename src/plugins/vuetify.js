import Vue from 'vue'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VTextField,
  VAvatar,
  VDialog,
  VCard,
  VTooltip,
  VForm,
  VSelect,
  VSubheader,
  VTabs,
  VDataTable,
  VDivider,
  transitions
} from 'vuetify'
 
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VTextField,
    VAvatar,
    VDialog,
    VCard,    
    VTooltip,
    VForm,
    VSelect,
    VSubheader,
    VTabs,
    VDataTable,
    VDivider,
    transitions
  },
  theme: {
    primary: '#1976d2',
    secondary: '#424242',
    headerbox:'#1976d2',
    submit:'#1976d2',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  },
})
