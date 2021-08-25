import Vue from 'vue'
import VueTailwind from 'vue-tailwind'

import {
  TInput,
  TTextarea,
  TSelect,
  TRadio,
  TCheckbox,
  TButton,
  TInputGroup,
  TCard,
  TAlert,
  TModal,
  TDropdown,
  TRichSelect,
  TPagination,
  TTag,
  TRadioGroup,
  TCheckboxGroup,
  TTable,
  TDatepicker,
  TToggle,
  TDialog,
} from 'vue-tailwind/dist/components';

const settings = {
  // Use the following syntax
  // {component-name}: {
  //   component: {importedComponentObject},
  //   props: {
  //     {propToOverride}: {newDefaultValue}
  //     {propToOverride2}: {newDefaultValue2}
  //   }
  // }
  't-modal': {
    component: TModal
  },
  't-button': {
    component: TButton,
    props: {
      classes: 'border-2 block w-full rounded text-gray-800 bg-gray-100 hover:bg-red-700 hover:text-white'
      // ...More settings
    }
  },
  // ...Rest of the components
}

Vue.use(VueTailwind, settings)
