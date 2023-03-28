import Component from '@glimmer/component';
import { action, computed } from '@ember/object';
import { tracked } from '@glimmer/tracking';


export default class FormGeneratorComponent extends Component {
    // https://guides.emberjs.com/v4.11.0/components/component-state-and-actions/
    // Instead of allowing the component itself to be responsible for the multiple, let's allow it to be passed in.
    // We refer to a component's argument from JavaScript by prefixing them with this.args..
  
    @computed('args.items')
    get formcode() {
      var code = '<form>\n';
      this.args.items.forEach(element => {
        code += `  <${element} ...>\n`; // 'render' here ... tbd
      });
      code += '</form>';
      return code;
    }
}