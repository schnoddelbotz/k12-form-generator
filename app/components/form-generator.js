import Component from '@glimmer/component';
import { action, computed } from '@ember/object';
import { tracked } from '@glimmer/tracking';


export default class FormGeneratorComponent extends Component {
    @tracked count = 1; 
    // https://guides.emberjs.com/v4.11.0/components/component-state-and-actions/
    // Instead of allowing the component itself to be responsible for the multiple, let's allow it to be passed in.
    // We refer to a component's argument from JavaScript by prefixing them with this.args..
  
    @computed('args.count')
    get formcode() {      
      return `tbd HTML form code ... ${this.args.count}`;
    }
}